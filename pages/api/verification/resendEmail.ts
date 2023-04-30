// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import mongoConnect from "@/lib/mongo_connect";
import { render } from "@react-email/render";
import { sendMailVerification } from "@/lib/email";
import UserVerificationEmail from "@/emails/EmailVerfication";
import generateString from "@/utils/misc/generateString";

export default async function resendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  if (req.method === "POST") {
    const new_token = generateString(100);
    const url_string = `${process.env.NEXT_URL}/verify/auth/${new_token}`;
    const { db, client } = await mongoConnect();

    try {
      if (db) {
        const user = await db
          .collection("users")
          .findOne({ email: data.email });

        if (user && user.isVerified) {
          res.json({
            statusCode: 10,
            message: "Email has been verified successfully, please login",
          });
        } else {
          await db
            .collection("users")
            .findOneAndUpdate(
              { email: data.email },
              { $set: { email_token: new_token } }
            )
            .then(async (response) => {
              if (response) {
                await sendMailVerification({
                  to: data.email,
                  subject: "Welcome onboard to Neutrix",
                  html: render(
                    UserVerificationEmail(data.username, url_string),
                    {
                      pretty: true,
                    }
                  ),
                });

                res.json({
                  statusCode: 20,
                  message: "Email resent successfully",
                });
              }
            });
        }
        client.close();
      }
    } catch (err) {
      res.json({
        statusCode: 40,
        message: "Error encountered",
      });
    }
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
