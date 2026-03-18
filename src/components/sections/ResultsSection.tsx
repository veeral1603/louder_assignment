import React from "react";
import ResultsContainer from "../ResultsContainer";

export default function ResultsSection() {
  return (
    <section className="-mt-[20vh] md:-mt-[10vh] relative z-10 pb-12 md:pb-20 transition-all duration-300">
      <div className="container-sm">
        <ResultsContainer />
      </div>
    </section>
  );
}
