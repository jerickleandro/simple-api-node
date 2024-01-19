import { MongoClient } from "mongodb";

async function query(queryObject) {
 const client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);
 try {
   await client.connect();
   const database = client.db(process.env.MONGO_DB);
   const result = await database.collection(queryObject.collection).find(queryObject.filter).toArray();
   return result;
 } catch (error) {
   console.error(error);
 } finally {
   await client.close();
 }
}

export default {
 query: query
}
