"use client";

import { useState } from "react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

type ServiceItem = {
  title: string;
  image: string;
  description: string;
};

type ServicesMobileAccordionProps = {
  services: ServiceItem[];
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-[var(--color-pewter-gray)] transition duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
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

export function ServicesMobileAccordion({ services }: ServicesMobileAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-3 lg:hidden">
      {services.map((service, index) => {
        const isOpen = openIndex === index;

        return (
          <Reveal key={service.title} delay={index * 35}>
            <article className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[var(--shadow-xl)]">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full touch-manipulation items-center justify-between gap-3 px-4 py-4 text-left"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-white-smoke)] text-xs font-bold text-[var(--color-royal-blue)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-[var(--color-midnight-ink)]">{service.title}</p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-sm font-semibold text-[var(--color-pewter-gray)]">
                    {isOpen ? "Tutup" : "Lihat"}
                  </span>
                  <ChevronIcon isOpen={isOpen} />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0">
                  <div className="border-t border-black/5 px-4 pb-4 pt-3">
                    <ImagePlaceholder
                      src={service.image}
                      title={service.title}
                      height="min-h-[170px]"
                      sizes="100vw"
                    />
                    <p className="mt-4 text-sm leading-6 text-[var(--color-pewter-gray)]">{service.description}</p>
                    <div className="mt-4 rounded-[20px] bg-[var(--color-white-smoke)] p-4 text-sm leading-6 text-[var(--color-pewter-gray)]">
                      Setiap layanan dapat disesuaikan dari sisi ukuran, material, sistem pencahayaan, finishing, hingga kebutuhan
                      pemasangan agar hasil akhirnya sesuai dengan fungsi dan karakter ruang bisnis.
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
