import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      {/* Prismatic Aurora Burst - Multi-layered Gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
        }}
      />
      <div
        className="absolute inset-0 -z-10 a pointer-events-none opacity-20 bg-[url('/noisy.png')]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, white 0%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, white 0%, transparent 70%)",
        }}
      />
      {/* Your Content/Components */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
//  <div
//         className="absolute inset-0 -z-1 "
//         style={{
//           background: `
//           radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
//           radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
//           radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
//           radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
//           #000000
//         `,
//         }}
//       />
