import React from "react";
import ResultsList from "./ResultsList";

export default function ResultsContainer() {
  return (
    <div className="rounded-2xl border-border border bg-white/5 w-full min-h-100 p-4 md:p-6">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  text-foreground/80">
          Results
        </h2>
        <p className="text-muted-foreground">
          View the results of your event planning process.
        </p>
      </div>

      <div className="mt-6">
        <ResultsList />
      </div>
    </div>
  );
}
