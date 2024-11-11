import { middleware_resolver, OurError } from '@/app/api/utils';
import { NextResponse } from 'next/server';

async function get_handler(req: Request) {
  // error boundary test with OurError
  throw new OurError('BAD_REQUEST');
  return NextResponse.json({ status: 'success' }, { status: 200 });
}

export const GET = middleware_resolver(get_handler);
