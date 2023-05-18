import mongoConnect from "@/lib/mongo_connect";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function updateGeneralData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const { db, client } = await mongoConnect();

    if (!db) throw new Error("Unable to establish connection to database");

    try {
      await db
        .collection("users")
        .findOne({ email: data.email })
        .then((found_user) => {
          if (found_user) {
            bcrypt.compare(
              data.old_password,
              found_user.password,
              async function (err, result) {
                if (err) {
                  res.json({
                    message: "An error has occured",
                  });
                }
                if (result) {
                  const hash_round = await bcrypt
                    .genSalt(10)
                    .then(async (salt) => {
                      const hashedPass = await bcrypt
                        .hash(data.password, salt)
                        .then(async (hash) => {
                          const encryptedData = {
                            password: hash,
                          };
                          return encryptedData;
                        });
                      return hashedPass;
                    });
                  const returnData = await db
                    .collection("users")
                    .findOneAndUpdate(
                      { email: data.email },
                      { $set: { password: hash_round.password } },
                      { returnDocument: "after" }
                    );
                  if (!returnData) {
                    res.json({ message: "Error encountered2" });
                  } else {
                    res.json({
                      message: "Password successfully updated",
                      data: returnData,
                    });
                  }
                  client.close();
                } else {
                  client.close();
                  res.json({
                    statusCode: 40,
                    message: "Sorry, invalid password credential",
                  });
                }
              }
            );
          } else {
            throw new Error("Error encountered");
          }
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
