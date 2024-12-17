import { collection } from '@/lib/mongo';
import { insertPartySchema } from '@/lib/validator/party';
import { NextResponse } from 'next/server';

export async function GET() {
  const partyCollection = await collection.party();
  const result = await partyCollection.find().toArray();

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const json = (await req.json()) as {
    party: unknown;
  };

  const party = await insertPartySchema.parse(json.party);

  // 유저정보 파싱해서 멤버 넣어줘야함

  const partyCollection = await collection.party();

  const result = await partyCollection.insertOne({
    ...party,
    member: [],
    status: 'progress',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  } as never);

  if (!result?.insertedId) {
    return NextResponse.json(
      { status: 'fail' },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json({
    status: 'success',
    insertedId: result.insertedId,
  });
}

// export const POST = middleware_resolver(post_handler);
// export const GET = middleware_resolver(get_handler);
