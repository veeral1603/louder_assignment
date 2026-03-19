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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generateEventPLan } from "@/services/client/eventPlan.service";
import { Spinner } from "./ui/spinner";
import { useEventPlanLoadingStore } from "@/stores/eventPlanLoadingStore";
import { EventPlan } from "@prisma/client";
import InputPresets from "./InputPresets";

export default function HeroInput() {
  const form = useForm({
    defaultValues: {
      eventDescription: "",
    },
    resolver: zodResolver(generatePlanFormSchema),
  });

  const setIsLoading = useEventPlanLoadingStore((state) => state.setLoading);

  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    onMutate: () => {
      setIsLoading(true);
      const resultContainer = document.getElementById("results-container");
      if (resultContainer) {
        resultContainer.scrollIntoView({ behavior: "smooth" });
      }
    },
    mutationFn: (data: GeneratePlanFormData) =>
      generateEventPLan(data.eventDescription),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["results"],
        (oldData: EventPlan[] | undefined) => {
          if (!oldData) return [data];
          return [data.data, ...oldData];
        },
      );
      setIsLoading(false);
      form.reset();
    },
    onError: () => {
      alert(
        "An error occurred while generating the event plan. Please try again.",
      );
      setIsLoading(false);
    },
  });

  const onSubmit = (data: GeneratePlanFormData) => {
    mutate(data);
  };
  return (
    <>
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
                  className="border-none bg-transparent! focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none max-h-35 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isLoading}
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
              {isLoading && <Spinner className="size-8 ml-auto" />}
              {!isLoading && (
                <Button
                  size="icon"
                  className="ml-auto rounded-full bg-pink-500 hover:bg-pink-600 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 w-full md:max-w-xl">
        <InputPresets setValue={form.setValue} />
      </div>
    </>
  );
}
