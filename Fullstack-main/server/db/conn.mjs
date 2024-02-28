import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString + "AAA")
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db("jayway");

export default db;