/* eslint-disable react/prop-types */
/* This example requires Tailwind CSS v2.0+ */

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  { name: "1", status: "current" },
  { name: "2", status: "upcoming" },
  { name: "3", status: "upcoming" },
  { name: "4", status: "upcoming" },
  { name: "5", status: "upcoming" },
  { name: "6", status: "upcoming" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Levels({ level }) {
  const [, setRefresh] = useState(false);
  useEffect(() => {
    if (level > 0) {
      steps[level].status = "current";
      steps[level - 1].status = "complete";
      setRefresh((prev) => !prev);
    }
  }, [level]);

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center py-4">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length ? "pr-6 md:pr-20" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full bg-indigo-600" />
                </div>
                <a
                  href="#section1"
                  className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"
                >
                  <CheckIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full bg-gray-200" />
                </div>
                <a
                  href="#section2"
                  className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full bg-gray-200" />
                </div>
                <a
                  href="#section"
                  className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
