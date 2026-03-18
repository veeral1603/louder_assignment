import Navbar from "@/components/layout/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
