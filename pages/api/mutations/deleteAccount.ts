import mongoConnect from "@/lib/mongo_connect";
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
      .deleteOne({ email: data.email })
      .then((data) => {
        client.close();
        if (!data) {
          throw new Error("Operation failed");
        }
        res.json({
          statusCode: 20,
          message: "Account successfully deleted, Goodbye!",
        });
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
