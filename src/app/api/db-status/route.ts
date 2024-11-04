import { collection } from '@/lib/mongo';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const testCollection = await collection.test();

  const result = await testCollection.find().toArray();

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const testCollection = await collection.test();
  const requestBody = await req.json();

  const result = await testCollection.insertOne(requestBody);

  return NextResponse.json(result);
}
