import { OurError } from '@/app/api/utils/errors';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const apiWrapper = async (
  req: NextRequest,
  options: {
    params: Record<string, string>;
  },
  handler: (
    req: NextRequest,
    options: {
      params: Record<string, string>;
    },
  ) => Promise<NextResponse>,
) => {
  try {
    return await handler(req, options);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    if (error instanceof OurError) {
      const { status, message } = error;
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
};
