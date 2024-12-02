import { NextResponse, NextRequest } from 'next/server';
import { apiWrapper } from './apiWrapper';
export const middleware_resolver = (
  handler: (
    req: NextRequest,
    options: {
      params: Record<string, string>;
    },
  ) => Promise<NextResponse>,
  middlewares: ((req: NextRequest) => Promise<NextResponse>)[] = [],
) => {
  return async (
    req: NextRequest,
    options: {
      params: Record<string, string>;
    },
  ) => {
    for (const middleware of middlewares) {
      const response = await middleware(req);
      if (response) return response;
    }

    return apiWrapper(req, options, handler);
  };
};
