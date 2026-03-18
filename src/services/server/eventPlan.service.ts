import { ApiError } from "@/lib/errors/ApiError";
import gemini from "@/lib/gemini";
import { buildEventPlanPrompt } from "@/lib/utils";
import { eventPlanAiOutputSchema } from "@/validators/eventPlanAiOutputSchema";

const MAX_TRIES = 3;

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
      if (!validated.success) tries++;

      return validated;
    } catch {
      tries++;
    }
  }

  throw new ApiError(
    500,
    "Failed to generate a valid event plan after multiple attempts",
  );
};
