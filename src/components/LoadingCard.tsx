import React from "react";
import { Card, CardContent } from "./ui/card";

export default function LoadingCard() {
  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Diagonal shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-full animate-shimmer-diagonal bg-linear-to-br from-transparent via-white/10 to-transparent" />
      </div>

      <CardContent className="p-5 space-y-4 h-60 md:h-45">
        {/* Title */}
        <div className="w-full flex items-center justify-center h-full">
          <span className="font-bold text-2xl bg-linear-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent ">
            Generating plan with AI...
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
