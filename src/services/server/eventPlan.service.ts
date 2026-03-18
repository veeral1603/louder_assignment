import { ApiError } from "@/lib/errors/ApiError";
import gemini from "@/lib/gemini";
import { prisma } from "@/lib/prisma";
import { buildEventPlanPrompt } from "@/lib/utils";
import {
  EventPlanAiOutput,
  eventPlanAiOutputSchema,
} from "@/validators/eventPlanAiOutputSchema";

const MAX_TRIES = 3;

// Generate event plan using gemini AI
export const generateEventPlan = async (eventDescription: string) => {
  if (!eventDescription) {
    throw new ApiError(400, "Event description is required");
  }

  const prompt = buildEventPlanPrompt(eventDescription);

  let tries = 0;
  while (tries < MAX_TRIES) {
    try {
      const response = await gemini(prompt);

      //Cleaning
      const cleaned = (response as string)
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      //Parsing
      const parsed = JSON.parse(cleaned as string);
      if (!parsed.success) tries++;

      //Zod Validation
      const validated = eventPlanAiOutputSchema.safeParse(parsed);
      if (!validated.success || !validated.data) tries++;

      const savedEventPlan = await createEventPlan(
        validated.data as EventPlanAiOutput,
        eventDescription,
      );
      return savedEventPlan;
    } catch {
      tries++;
    }
  }

  throw new ApiError(
    500,
    "Failed to generate a valid event plan after multiple attempts",
  );
};

export const createEventPlan = async (
  eventPlan: EventPlanAiOutput,
  eventDesc: string,
) => {
  if (!eventPlan) {
    throw new ApiError(400, "Event plan data is required");
  }

  const savedEventPlan = await prisma.eventPlan.create({
    data: {
      query: eventDesc,
      venueName: eventPlan.venue_name,
      location: eventPlan.location,
      estimatedCost: eventPlan.estimated_cost,
      whyItFits: eventPlan.why_it_fits,
    },
  });

  return savedEventPlan;
};

export const getAllEventPlans = async () => {
  const eventPlans = await prisma.eventPlan.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return eventPlans;
};
