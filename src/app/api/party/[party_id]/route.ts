import { middleware_resolver } from '@/app/api/utils';
import { collection } from '@/lib/mongo';
import { getPartySchema } from '@/lib/validator/party';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

async function get_handler(
  req: Request,
  {
    params,
  }: {
    params: Record<string, string>;
  },
) {
  const { party_id } = await getPartySchema.parse(params);
  const partyCollection = await collection.party();

  const result = await partyCollection.findOne({
    _id: new ObjectId(party_id),
  } as any);

  if (!result) {
    return NextResponse.json(
      { status: 'fail', message: 'party not found' },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    status: 'success',
    party: result,
  });
}

export const GET = middleware_resolver(get_handler);
