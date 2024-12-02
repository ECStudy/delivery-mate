import { middleware_resolver } from '@/app/api/utils';
import { collection } from '@/lib/mongo';
import {
  insertPartyMemberSchema,
  insertPartySchema,
} from '@/lib/validator/party';
import { NextResponse } from 'next/server';

async function post_handler(req: Request) {
  const json = (await req.json()) as {
    member: unknown;
    party: unknown;
  };
  const party = await insertPartySchema.parse(json.party);
  const member = await insertPartyMemberSchema.parse(json.member);

  const partyCollection = await collection.party();

  const result = await partyCollection.insertOne({
    ...party,
    member: [member],
    status: 'progress',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  });

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

export const POST = middleware_resolver(post_handler);
