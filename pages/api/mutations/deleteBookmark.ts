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
        { $pull: { bookmarks: { $in: [data.bookmark, null] } } }
      )
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
