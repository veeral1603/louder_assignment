import { asyncHandler } from "@/lib/handlers/asyncHandler";
import { successResponse } from "@/lib/responses/successResponse";
import { getAllEventPlans } from "@/services/server/eventPlan.service";

export const GET = asyncHandler(async () => {
  const eventPlans = await getAllEventPlans();

  return successResponse(eventPlans);
});
