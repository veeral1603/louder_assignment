import { ZodSchema } from "zod";
import { ApiError } from "./errors/ApiError";

export function validateSchema<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.issues.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));

    throw new ApiError(400, "Validation failed", formattedErrors);
  }
  return result.data;
}
