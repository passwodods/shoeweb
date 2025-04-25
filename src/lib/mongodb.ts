import { MongoClient, Db } from 'mongodb';

// Read the MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'shoeStore'; // Default DB name if not set in env

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Cache the client promise to avoid reconnecting on every API call in serverless envs
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    // console.log('Using cached database connection');
    return { client: cachedClient, db: cachedDb };
  }

  // console.log('Creating new database connection');
  const client = new MongoClient(uri!); // Use non-null assertion as we checked uri above

  try {
    await client.connect();
    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    // console.log('Successfully connected to MongoDB');
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    // Attempt to close the client if connection failed partially
    await client.close();
    throw new Error('Failed to connect to the database.');
  }
}

// Optional: Add a default export or specific functions to interact with collections later
// export default connectToDatabase;