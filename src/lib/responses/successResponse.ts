import { NextResponse } from "next/server";

export function successResponse(
  data?: unknown,
  message: string = "Success",
  statusCode: number = 200,
) {
  return NextResponse.json(
    { success: true, message, data: data ? data : undefined },
    { status: statusCode },
  );
}
