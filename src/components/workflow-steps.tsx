"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";

type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

type WorkflowStepsProps = {
  steps: WorkflowStep[];
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-[var(--color-pewter-gray)] transition duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <path
        d="m6 9 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  const [openStep, setOpenStep] = useState(steps[0]?.step ?? "");

  return (
    <>
      <div className="mt-8 grid gap-3 lg:hidden">
        {steps.map((step, index) => {
          const isOpen = openStep === step.step;

          return (
            <Reveal key={step.step} delay={index * 40}>
              <article className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[var(--shadow-xl)]">
                <button
                  type="button"
                  onClick={() => setOpenStep((current) => (current === step.step ? "" : step.step))}
                  className="flex w-full touch-manipulation items-center justify-between gap-3 px-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-white-smoke)] text-xs font-bold text-[var(--color-royal-blue)]">
                      {step.step}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--color-midnight-ink)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronIcon isOpen={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0">
                    <div className="border-t border-black/5 px-4 pb-4 pt-3">
                      <p className="text-sm leading-6 text-[var(--color-pewter-gray)]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.step} delay={index * 50}>
            <article className="interactive-card rounded-[28px] bg-[var(--color-white-smoke)] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">{step.step}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-pewter-gray)]">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
