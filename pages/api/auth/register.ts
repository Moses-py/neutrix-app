import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import mongoConnect from "@/lib/mongo_connect";
import { render } from "@react-email/render";
import { sendMailVerification } from "@/lib/email";
import UserVerificationEmail from "@/emails/EmailVerfication";
import generateString from "@/utils/misc/generateString";

export default async function register_user(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const { db, client } = await mongoConnect();
  if (req.method === "POST") {
    try {
      await db
        .collection("users")
        .findOne({
          $or: [{ email: data.email }, { phonenumber: data.phonenumber }],
        })
        .then(async (result) => {
          if (result) {
            res.json({
              statusCode: 30,
              message: "User account already exists",
            });
          } else {
            try {
              const hash_round = await bcrypt
                .genSalt(10)
                .then(async (salt) => {
                  const hashedPass = await bcrypt
                    .hash(data.password, salt)
                    .then(async (hash) => {
                      const encryptedData = { ...data, password: hash };
                      return encryptedData;
                    });
                  return hashedPass;
                })
                .catch((err) => {
                  res.send(err);
                });

              // once done hashing, create email_verification hash
              const email_token = generateString(100);

              if (email_token) {
                const updated_data = {
                  ...hash_round,
                  email_token,
                  isVerified: false,
                };
                // DB call
                await db
                  .collection("users")
                  .insertOne(updated_data)
                  .then(async (user) => {
                    if (user) {
                      const url_string = `${process.env.customUrl}/verify/auth/${updated_data.email_token}`;
                      const username = `${updated_data.first_name} ${updated_data.last_name}`;
                      await sendMailVerification({
                        to: data.email,
                        subject: "Welcome onboard to Neutrix",
                        html: render(
                          UserVerificationEmail(username, url_string),
                          {
                            pretty: true,
                          }
                        ),
                      });

                      client.close();
                      res.status(201).json({
                        statusCode: 20,
                        message: "Successfully created an account for you.",
                        user,
                      });
                    } else {
                      res.json({
                        statusCode: 40,
                        message: "Error encountered, please try again",
                      });
                    }
                  });
              }
            } catch (err) {
              res.send(err);
            }
          }
        });
    } catch (err) {
      res.send(err);
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
