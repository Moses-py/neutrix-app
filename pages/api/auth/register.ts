// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import mongoConnect from "@/lib/mongo_connect";

export default async function register_user(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  if (req.method === "POST") {
    try {
      const { db, client } = await mongoConnect();

      await db
        .collection("users")
        .findOne({ email: data.email })
        .then(async (result) => {
          if (result) {
            res.json({
              statusCode: 30,
              message:
                "User already exists...try again with a different email address",
            });
          } else {
            try {
              await bcrypt
                .genSalt(10)
                .then(async (salt) => {
                  await bcrypt.hash(data.password, salt).then(async (hash) => {
                    const encryptedData = { ...data, password: hash };
                    await db
                      .collection("users")
                      .insertOne(encryptedData)
                      .then((result) => {
                        result &&
                          res.status(201).json({
                            statusCode: 20,
                            message: "Registration successful...redirecting",
                          });
                        client.close;
                      });
                  });
                })
                .catch((err) => {
                  res.send(err);
                });
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
