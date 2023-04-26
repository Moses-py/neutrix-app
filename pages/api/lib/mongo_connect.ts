import { MongoClient } from "mongodb";

export default async function mongoConnect() {
  const client = new MongoClient(
    "mongodb+srv://neutrix:devilwillcry1@neutrix.kvtkynb.mongodb.net/?retryWrites=true&w=majority"
  );
  try {
    await client.connect();
    const db = client.db("neutrix_database");
    return { db, client };
  } catch (error) {
    throw new Error("Unable to establish database connection");
  }
}
