import bcrypt from "bcrypt";
import mongoConnect from "@/lib/mongo_connect";
import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { sendMailVerification } from "@/lib/email";
import PasswordRecover from "@/emails/PasswordRecovery";
import { render } from "@react-email/components";

// Function to generate a random 6-digit number
function generateSixDigitRandomNumber(): Promise<string> {
  return new Promise((resolve, reject) => {
    const min = 100000; // minimum value for a 6-digit number
    const max = 999999; // maximum value for a 6-digit number
    const range = max - min + 1; // range of possible values for the random number

    crypto.randomBytes(4, (err, buffer) => {
      // generate 4 bytes of random data
      if (err) {
        reject(err);
        return;
      }

      const randomNumber = (buffer.readUInt32LE() % range) + min; // convert 4 bytes to an integer and calculate the random number within the desired range
      const randomString = randomNumber.toString(); // convert the random number to a string
      resolve(randomString);
    });
  });
}

export default async function handlePasswordRecovery(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payload = req.body;

  const { db, client } = await mongoConnect();

  //   Email Check handler
  if (Object.keys(payload)[0] === "email") {
    if (!db) {
      throw new Error("System Error");
    }
    const foundEmail = await db
      .collection("users")
      .findOne({ email: payload.email });

    if (!foundEmail) {
      res
        .status(202)
        .json({ message: "A user with this e-mail address was not found" });
    } else {
      const randomDigit = await generateSixDigitRandomNumber().then(
        (randomNumber) => {
          return randomNumber;
        }
      );

      const addCodeToken = await db
        .collection("users")
        .findOneAndUpdate(
          { email: foundEmail.email },
          { $set: { recoveryToken: randomDigit } }
        );

      if (!addCodeToken) {
        throw new Error("System Error");
      }

      await sendMailVerification({
        to: foundEmail.email,
        subject: "Neutrix: Password Reset",
        html: render(
          PasswordRecover(
            `${foundEmail.first_name} ${foundEmail.last_name}`,
            randomDigit
          ),
          {
            pretty: true,
          }
        ),
      });
      res.status(200).json({ message: "Verification code has been sent" });
    }
  }

  //   Code check handler
  if (Object.keys(payload)[0] === "code") {
    if (!db) {
      throw new Error("System Error");
    }
    const checkCode = await db
      .collection("users")
      .findOne({ email: payload.email });

    if (!checkCode) {
      res.status(202).json({ message: "Something happened" });
    }
    if (checkCode.recoveryToken != payload.code) {
      res.status(202).json({ message: "Invalid Code" });
    } else {
      res.status(200).json({ message: "Token valid" });
    }
  }

  //   Password save handler
  if (Object.keys(payload)[0] === "password") {
    if (!db) {
      throw new Error("System Error");
    }

    await bcrypt.hash(payload.password, 10).then(async (hash: string) => {
      const retrieveOldPassword = await db
        .collection("users")
        .findOne({ email: payload.email });

      if (!retrieveOldPassword) {
        throw new Error("System Error");
      }

      await bcrypt
        .compare(hash, retrieveOldPassword.password)
        .then((isEqual) => {
          if (isEqual) {
            res.status(202).json({
              message:
                "Please input a password different from your previous password",
            });
          } else {
            const updatePassword = db
              .collection("users")
              .findOneAndUpdate(
                { email: payload.email },
                { $set: { password: hash } }
              );

            if (!updatePassword) {
              throw new Error("System Error");
            }

            res.status(200).json({ message: "Password successfully updated" });
          }
        });
    });
  }

  client.close();
}
