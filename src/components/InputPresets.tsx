import { SAMPLE_PROMPTS } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import type { UseFormSetValue } from "react-hook-form";
import { GeneratePlanFormData } from "@/validators/generatePlanFormSchema";
import { X } from "lucide-react";

interface Props {
  setValue: UseFormSetValue<GeneratePlanFormData>;
}

export default function InputPresets({ setValue }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {SAMPLE_PROMPTS.map((prompt, index) => (
        <Button
          key={index}
          variant="outline"
          size="xs"
          onClick={() => setValue("eventDescription", prompt.text)}
        >
          {prompt.label}
        </Button>
      ))}
      <Button
        variant="outline"
        size="xs"
        onClick={() => setValue("eventDescription", "")}
      >
        <X size={16} />
        <span>Clear</span>
      </Button>
    </div>
  );
}
