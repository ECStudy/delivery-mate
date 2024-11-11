import { NextResponse, NextRequest } from 'next/server';
import { apiWrapper } from './apiWrapper';
export const middleware_resolver = (
  handler: (req: NextRequest, res: NextResponse) => Promise<NextResponse>,
  middlewares: ((
    req: NextRequest,
    res: NextResponse,
  ) => Promise<NextResponse>)[] = [],
) => {
  return async (req: NextRequest, res: NextResponse) => {
    for (const middleware of middlewares) {
      const response = await middleware(req, res);
      if (response) return response;
    }

    return apiWrapper(req, res, handler);
  };
};
