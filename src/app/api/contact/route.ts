import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// Define the expected structure of the contact message
interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
}

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming request body
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields (name, email, message)' }, { status: 400 });
    }

    // 2. Connect to the database
    const { db } = await connectToDatabase();

    // 3. Prepare the document to insert
    const contactMessage: ContactMessage = {
      name,
      email,
      message,
      submittedAt: new Date(),
    };

    // 4. Insert the message into the 'contactMessages' collection
    const result = await db.collection<Omit<ContactMessage, '_id'>>('contactMessages').insertOne(contactMessage);

    // console.log('Inserted contact message:', result.insertedId);

    // 5. Return a success response
    return NextResponse.json({ success: true, message: 'Message received successfully!', id: result.insertedId }, { status: 201 });

  } catch (error) {
    console.error('Failed to process contact form:', error);
    // Distinguish between connection errors and other errors if needed
    if (error instanceof Error && error.message.includes('Failed to connect')) {
         return NextResponse.json({ error: 'Database connection error' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Internal Server Error processing message' }, { status: 500 });
  }
}

// Optional: Add a GET handler later if you want to retrieve messages via API
// export async function GET(request: Request) {
//   // ... implementation to fetch messages ...
// }