import { middleware_resolver } from '@/app/api/utils';
import { collection } from '@/lib/mongo';
import { dbStatusSchema } from '@/lib/validator/db-status';
import { NextResponse } from 'next/server';

async function get_handler(req: Request) {
  // error boundary test with ZodError
  const z = await dbStatusSchema.parseAsync({ name: 'John', age: 'asdf' });

  const testCollection = await collection.test();

  const result = await testCollection.find().toArray();

  return NextResponse.json(result);
}

async function post_handler(req: Request) {
  const requestBody = await dbStatusSchema.parse(await req.json());

  const testCollection = await collection.test();
  const result = await testCollection.insertOne(requestBody);

  return NextResponse.json({ result });
}

export const GET = middleware_resolver(get_handler);
export const POST = middleware_resolver(post_handler);
