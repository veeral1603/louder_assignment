import React from "react";
import ResultCard from "./ResultCard";

const results = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function ResultsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result) => (
        <ResultCard key={result.id} />
      ))}
    </div>
  );
}
