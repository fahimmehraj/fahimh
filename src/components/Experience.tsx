"use client";

import { useState } from "react";
import Job from "./Job";
import { experiences } from "../data/experiences";

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <h1 id="experience">Experience</h1>
      <div className="flex flex-col md:flex-row gap-8 mt-8 items-stretch">
        <div className="flex flex-col gap-2 md:min-w-[200px]">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`text-left px-4 py-2 transition-all relative rounded-lg ${
                i === selectedIndex
                  ? "text-primary bg-slate-200/5 border-none shadow-[0_4px_12px_rgba(82,234,255,0.3),-4px_4px_0px_#52eaff] translate-x-2"
                  : "text-gray-400 hover:text-gray-300"
              }`}>
              <span className="lowercase tracking-wide text-sm md:text-base">{exp.organization}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 flex">
          <div className="w-full self-stretch">
            <Job exp={experiences[selectedIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
}
