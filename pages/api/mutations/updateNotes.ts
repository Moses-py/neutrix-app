import mongoConnect from "@/lib/mongo_connect";
import { ReturnDocument } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateNotes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const array_data = {
    title: data.title,
    content: data.content,
    image: data.image,
  };

  const { db, client } = await mongoConnect();

  if (!db) {
    throw new Error("Connection to the database collection not established");
  }
  try {
    await db
      .collection("users")
      .updateOne({ email: data.email }, { $addToSet: { notes: array_data } })
      .then((data) => {
        client.close();
        if (!data) {
          res.json({ message: "Operation failed" });
        }
        res.json({ message: "Successful", data });
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
