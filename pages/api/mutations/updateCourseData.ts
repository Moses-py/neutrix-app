import mongoConnect from "@/lib/mongo_connect";
import { ReturnDocument } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateCourseStatus(
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
      .findOneAndUpdate(
        { email: data.email },
        { $set: { courses: data.courseData } },
        { returnDocument: "after" }
      )
      .then((data) => {
        client.close();
        if (!data) {
          res.json({ message: "Operation failed" });
        }
        res.json({ message: "Successfully activated free session", data });
      });
  } catch (err) {
    res.send(err);
  }
}
