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

  //   Email Check handler
  if (Object.keys(payload)[0] === "email") {
    const { db, client } = await mongoConnect();

    try {
      if (!db) {
        throw new Error("System Error");
      }
      const foundEmail = await db
        .collection("users")
        .findOne({ email: payload.email });

      if (!foundEmail) {
        res.status(202).json({
          message: "A user with this e-mail address was not found",
        });
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
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  }

  //   Code check handler
  if (Object.keys(payload)[0] === "code") {
    const { db, client } = await mongoConnect();

    try {
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
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  }

  //   Password save handler
  if (Object.keys(payload)[0] === "password") {
    const { db, client } = await mongoConnect();
    if (!db) {
      throw new Error("System Error");
    }
    try {
      await db
        .collection("users")
        .findOne({ email: payload.email })
        .then(async (oldPassword) => {
          if (!oldPassword) {
            throw new Error("System Error");
          }
          bcrypt.compare(
            payload.password,
            oldPassword.password,
            async (err, isEqual) => {
              if (err) {
                throw new Error("System Error");
              }
              if (isEqual) {
                res.status(202).json({
                  message:
                    "Similar passwords detected, choose a different password",
                });
              } else {
                await bcrypt
                  .hash(payload.password, 10)
                  .then(async (hashedPassword) => {
                    const updatePassword = await db
                      .collection("users")
                      .findOneAndUpdate(
                        { email: payload.email },
                        { $set: { password: hashedPassword } }
                      );

                    if (!updatePassword) {
                      throw new Error("System Error");
                    }
                    client.close();
                    res.status(200).json({
                      message: "Password successfully updated",
                    });
                  });
              }
            }
          );
        });
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
