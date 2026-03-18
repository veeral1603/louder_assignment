import { NextRequest, NextResponse } from "next/server";
import { errorResponse } from "../responses/errorResponse";

type RouteContext<T = Record<string, string>> = {
  params: Promise<T>;
};

type RouteHandler<T = Record<string, string>> = (
  req: NextRequest,
  context: RouteContext<T>,
) => Promise<NextResponse>;

export function asyncHandler<T extends Record<string, string>>(
  handler: RouteHandler<T>,
): RouteHandler<T> {
  return async (req, context) => {
    try {
      return await handler(req, context);
    } catch (error) {
      return errorResponse(error);
    }
  };
}
