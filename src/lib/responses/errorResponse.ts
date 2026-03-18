import { NextResponse } from "next/server";
import { ApiError } from "../errors/ApiError";

export function errorResponse(error: unknown, statusCode: number = 500) {
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        errors: error.errors,
      },
      { status: error.statusCode ?? statusCode },
    );
  }

  console.error("Unexpected error:", error);

  return NextResponse.json(
    { success: false, message: "Internal Server Error" },
    { status: 500 },
  );
}
