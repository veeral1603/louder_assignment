import { z } from "zod";

export const eventPlanAiOutputSchema = z.object({
  success: z.boolean().nonoptional(),
  venue_name: z.string().nonoptional(),
  location: z.string().nonoptional(),
  estimated_cost: z.string().nonoptional(),
  why_it_fits: z.string().nonoptional(),
});

export type EventPlanAiOutput = z.infer<typeof eventPlanAiOutputSchema>;
