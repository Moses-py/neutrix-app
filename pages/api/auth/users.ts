import mongoConnect from "@/lib/mongo_connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { db, client } = await mongoConnect();
    if (!db) throw new Error("Invalid connection");
    const query = JSON.parse(req.body);
    const found_user = await db.collection("users").findOne({ email: query });

    if (!found_user) throw new Error("Request resource not found");

    const updated_resource = { ...found_user, password: null };

    client.close();
    res.status(201).json({ updated_resource });
  } else {
    throw new Error("Invalid request type");
  }
}
