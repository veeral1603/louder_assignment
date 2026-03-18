import { Plane } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-sm h-16  relative flex items-center justify-between">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* Logo  */}
        <Link href="/">
          <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-transparent bg-linear-to-br from-pink-700 to-pink-500 bg-clip-text">
            <span>
              <Plane
                strokeWidth={2}
                className="text-pink-600 size-6 md:size-7"
              />
            </span>
            <h1>AI Concierge</h1>
          </div>
        </Link>

        <div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://www.linkedin.com/in/veeral-narang/"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              Veeral Narang
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
