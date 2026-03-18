import { EVENT_PLAN_PROMPT } from "@/constants/prompt";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildEventPlanPrompt(eventDescription: string) {
  return EVENT_PLAN_PROMPT.replace("{{USER_INPUT}}", eventDescription);
}
