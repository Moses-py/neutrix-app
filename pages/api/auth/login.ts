import mongoConnect from "@/lib/mongo_connect";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { db, client } = await mongoConnect();
    let data = req.body;

    if (db) {
      if (data.email) {
        await db
          .collection("users")
          .findOne({ email: data.email })
          .then((found_user) => {
            if (found_user) {
              bcrypt.compare(
                data.password,
                found_user.password,
                function (err, result) {
                  if (err) {
                    res.send({
                      statusCode: 50,
                      message: "An error has occured",
                    });
                  }
                  if (result) {
                    res.send({
                      statusCode: 20,
                      message:
                        "Login successful, redirecting you in a moment...",
                      verificationStatus: found_user.isVerified,
                      token: found_user._id,
                      email: found_user.email,
                    });
                  } else {
                    res.send({
                      statusCode: 40,
                      message: "Sorry, your credentials are invalid",
                    });
                  }
                }
              );
            } else {
              res.send({
                statusCode: 40,
                message: "Sorry, your credentials are invalid",
              });
            }
          });
        client.close();
      }
      if (data.phonenumber) {
        await db
          .collection("users")
          .findOne({ phonenumber: data.phonenumber })
          .then((found_user) => {
            if (found_user) {
              bcrypt.compare(
                data.password,
                found_user.password,
                function (err, result) {
                  if (err) {
                    res.send({
                      statusCode: 50,
                      message: "An error has occured",
                    });
                  }
                  if (result) {
                    res.send({
                      statusCode: 20,
                      message:
                        "Login successful, redirecting you in a moment...",
                      verificationStatus: found_user.isVerified,
                      token: found_user._id,
                      email: found_user.email,
                    });
                  } else {
                    res.send({
                      statusCode: 40,
                      message: "Sorry, your credentials are invalid",
                    });
                  }
                }
              );
            } else {
              res.send({
                statusCode: 40,
                message: "Sorry, your credentials are invalid",
              });
            }
          });
        client.close();
      }
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
