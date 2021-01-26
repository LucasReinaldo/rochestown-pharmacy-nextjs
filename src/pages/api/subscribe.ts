import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const myURL = new URL(uri);

  const dbName = myURL.pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const { name, phone, email } = request.body;

  const db = await connectToDatabase(process.env.NEXT_PUBLIC_MONGODB_URI);

  const collection = db.collection('subscribers');

  await collection.insertOne({
    name,
    phone,
    email,
    subscribedAt: new Date(),
  })

  return response.status(201).json({ ok: true });
}