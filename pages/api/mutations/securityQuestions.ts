import mongoConnect from "@/lib/mongo_connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateNotes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;

  const { db, client } = await mongoConnect();

  if (!db) {
    throw new Error("Connection to the database collection not established");
  }
  try {
    await db
      .collection("users")
      .updateOne(
        { email: data.email },
        {
          $set: {
            securityQuestions: data.securityQuestions,
            isVerified: true,
            email_token: null,
          },
        }
      )
      .then((data) => {
        client.close();
        if (!data) {
          throw new Error("Unsuccessful");
        }

        res.json({ message: "Successful" });
      });
  } catch (err) {
    res.send(err);
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
