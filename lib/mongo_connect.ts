import { MongoClient } from "mongodb";

export default async function mongoConnect() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("neutrix_database");
    return { db, client };
  } catch (error) {
    throw new Error("Unable to establish database connection");
  }
}
