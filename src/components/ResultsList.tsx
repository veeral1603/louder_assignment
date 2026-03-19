"use client";
import React from "react";
import ResultCard from "./ResultCard";
import LoadingCard from "./LoadingCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEventPlans } from "@/services/client/eventPlan.service";
import { Spinner } from "./ui/spinner";
import type { EventPlan } from "@prisma/client";
import { motion } from "motion/react";
import { useEventPlanLoadingStore } from "@/stores/eventPlanLoadingStore";

export default function ResultsList() {
  const { data, isLoading: isQueryLoading } = useQuery<EventPlan[]>({
    queryKey: ["results"],
    queryFn: getAllEventPlans,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const isLoading = useEventPlanLoadingStore((state) => state.isLoading);

  if (isQueryLoading) {
    return (
      <div className="w-full flex items-center justify-center p-8">
        <Spinner className="size-8" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full flex items-center justify-center p-8">
        <p className="text-sm text-muted-foreground">
          No results found. Try generating a plan!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {isLoading && <LoadingCard />}
      {data.map((result, index) => (
        <motion.div
          key={result.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <ResultCard data={result} />
        </motion.div>
      ))}
    </div>
  );
}
