"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GeneratePlanFormData,
  generatePlanFormSchema,
} from "@/validators/generatePlanFormSchema";

export default function HeroInput() {
  const form = useForm({
    defaultValues: {
      eventDescription: "",
    },
    resolver: zodResolver(generatePlanFormSchema),
  });

  const onSubmit = (data: GeneratePlanFormData) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="w-full md:max-w-xl mx-auto mt-12 md:mt-16">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white/5 backdrop-blur-md px-3 py-2 shadow-lg">
          {/* Input */}

          <Controller
            name="eventDescription"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Plan a 10-person leadership retreat in the mountains under $4000..."
                className="border-none bg-transparent! focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none max-h-35"
              />
            )}
          />

          {/* Send Button */}
          <div className="flex items-center w-full">
            {form.formState.errors.eventDescription && (
              <p className="text-xs text-red-500">
                {form.formState.errors.eventDescription?.message}
              </p>
            )}
            <Button
              size="icon"
              className="ml-auto rounded-full bg-pink-500 hover:bg-pink-600"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
