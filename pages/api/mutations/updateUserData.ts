import mongoConnect from "@/lib/mongo_connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateGeneralData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const { db, client } = await mongoConnect();

    if (!db) throw new Error("Unable to establish connection to database");

    try {
      const returnData = await db
        .collection("users")
        .findOneAndUpdate(
          { email: data.email },
          { $set: { ...data } },
          { returnDocument: "after" }
        );
      if (!returnData) {
        client.close();
        res.json({ message: "Error encountered2" });
      } else {
        res.json({
          message: "User data successfully updated",
          data: returnData,
        });
      }
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
