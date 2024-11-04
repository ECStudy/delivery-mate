import { collection } from '@/lib/mongo';
import { dbStatusSchema } from '@/lib/validator/db-status';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const testCollection = await collection.test();

  const result = await testCollection.find().toArray();

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const requestBody = await dbStatusSchema.parse(await req.json());

  const testCollection = await collection.test();
  const result = await testCollection.insertOne(requestBody);

  return NextResponse.json({ result });
}
