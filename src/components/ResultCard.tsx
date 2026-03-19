import React from "react";
import { Card, CardContent } from "./ui/card";
import { EventPlan } from "@prisma/client";
import { DollarSign, MapPin, Sparkles } from "lucide-react";

interface Props {
  data: EventPlan;
}

export default function ResultCard({ data }: Props) {
  return (
    <Card
      className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl 
    hover:bg-white/10 transition-all duration-300 
    hover:shadow-[0_0_40px_rgba(244,114,182,0.15)]"
    >
      {/* Subtle gradient glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 
      bg-linear-to-br from-pink-500/10 via-transparent to-transparent"
      />

      <CardContent className="p-5 relative z-10">
        {/* Title */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {data.venueName}
          </h3>

          <span className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
            AI Pick
          </span>
        </div>

        {/* Location + Cost */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>{data.location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-pink-400" />
            <span>{data.estimatedCost}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-4" />

        {/* Why it fits */}
        <div className="flex gap-2 text-sm text-gray-300 leading-relaxed">
          <Sparkles className="w-4 h-4 mt-0.5 text-pink-400 shrink-0" />
          <p>{data.whyItFits}</p>
        </div>
      </CardContent>
    </Card>
  );
}
