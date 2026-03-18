import { Plane } from "lucide-react";
import Link from "next/link";
import React from "react";

const navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Testimonials",
    href: "#",
  },

  {
    label: "Portfolio",
    href: "https://veerbuilds.tech",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/145rxiLAC0dzdygGwjVfGEghGDJYDsHl3/view?usp=sharing",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container-sm py-3 flex items-center justify-between">
        {/* Logo  */}
        <Link href="/">
          <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-transparent bg-linear-to-br from-pink-700 to-pink-500 bg-clip-text">
            <span>
              <Plane
                strokeWidth={2}
                className="text-pink-600 size-7 md:size-8"
              />
            </span>
            <h1>AI Concierge</h1>
          </div>
        </Link>

        {/* Navlinks  */}
        <div className=" items-center md:gap-4 lg:gap-6 hidden md:flex">
          {navlinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {link.label}
              </span>
            </Link>
          ))}

          <Link
            href="#"
            className="bg-linear-to-br from-pink-700 to-pink-500 rounded-md px-3 py-1.5 flex items-center justify-center text-white font-medium text-sm"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
