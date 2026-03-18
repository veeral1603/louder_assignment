import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
import HeroInput from "../HeroInput";

export default function HeroSection() {
  return (
    <section>
      <div className="container-sm py-12 md:py-28 flex flex-col items-center ">
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <Badge className="mb-2 bg-linear-to-b from-pink-700 to-pink-500 border-pink-500 text-white">
            <Sparkles className="size-5" />
            <span>Powered by AI</span>
          </Badge>

          <h2 className="font-noto-serif-display text-4xl md:text-5xl font-bold leading-tight">
            Describe Your Event. Get a Complete Plan in{" "}
            <span className="underline underline-offset-5  bg-linear-to-r from-pink-500 to-pink-400 text-transparent bg-clip-text">
              Seconds.
            </span>
          </h2>

          <p className="mt-6 text-lg text-foreground/80">
            Turn your idea into a complete event plan... including venues,
            budgets, and tailored recommendations powered by AI.
          </p>
        </div>

        <HeroInput />
      </div>
    </section>
  );
}
