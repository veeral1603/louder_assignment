import { asyncHandler } from "@/lib/handlers/asyncHandler";
import { successResponse } from "@/lib/responses/successResponse";
import { validateSchema } from "@/lib/validateSchema";
import { generateEventPlan } from "@/services/server/eventPlan.service";
import { generatePlanFormSchema } from "@/validators/generatePlanFormSchema";

export const POST = asyncHandler(async (req: Request) => {
  const body = await req.json();
  const valdiatedBody = validateSchema(generatePlanFormSchema, body);

  const eventPlan = await generateEventPlan(valdiatedBody.eventDescription);

  return successResponse(eventPlan);
});
