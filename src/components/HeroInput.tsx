"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";

export default function HeroInput() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full max-w-xl mx-auto mt-12 md:mt-16">
      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white/5 backdrop-blur-md px-3 py-2 shadow-lg">
        {/* Input */}
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Plan a 10-person leadership retreat in the mountains under $4000..."
          className="border-none bg-transparent! focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none"
        />

        {/* Send Button */}
        <div className="flex items-center w-full">
          <Button
            size="icon"
            className="ml-auto rounded-full bg-pink-500 hover:bg-pink-600"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
