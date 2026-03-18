import { z } from "zod";

export const generatePLanFormSchema = z.object({
  eventDescription: z
    .string()
    .min(30, "Please provide a more detailed description of your event.")
    .nonempty("Event description is required.")
    .nonoptional("Event description is required."),
});

export type GeneratePlanFormData = z.infer<typeof generatePLanFormSchema>;
