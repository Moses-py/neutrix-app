import bcrypt from "bcrypt";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "./lib/mongo_connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let data = req.body;

    const { db, client } = await mongoConnect();

    if (db) {
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
                  res.send({ statusCode: 50, message: "An error has occured" });
                }
                if (result) {
                  res.send({
                    statusCode: 20,
                    message: "Logged in successfully... redirecting...",
                  });
                } else {
                  res.send({
                    statusCode: 40,
                    message: "Incorrect credentials",
                  });
                }
              }
            );
          } else {
            res.send({ statusCode: 30, message: "Account does not exist" });
          }
        });
      client.close();
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};