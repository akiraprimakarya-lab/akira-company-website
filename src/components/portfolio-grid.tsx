"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { PortfolioCardCarousel } from "@/components/portfolio-card-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioItem } from "@/lib/portfolio-content";

const filters = ["Semua", "Neon Box", "Letter Timbul", "Akrilik", "Signage", "Display"] as const;

type FilterName = (typeof filters)[number];

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterName>("Semua");

  const filteredItems = useMemo(() => {
    if (activeFilter === "Semua") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <section className="py-10 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portofolio"
            title="Contoh proyek yang terasa relevan untuk kebutuhan brand dan area komersial."
            description="Setiap proyek dirancang untuk membantu kebutuhan branding visual, signage, dan fabrication akrilik dengan pendekatan yang rapi, fungsional, dan siap dipasang."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                    className={`interactive-button rounded-full border px-3.5 py-2.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    isActive
                      ? "border-transparent bg-[var(--color-royal-blue)] text-white shadow-[0_14px_30px_rgba(15,104,234,0.18)]"
                      : "border-black/8 bg-white text-[var(--color-pewter-gray)] hover:border-[var(--color-sky-blue)]/30 hover:text-[var(--color-midnight-ink)]"
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 55}>
              <article className="interactive-card overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[var(--shadow-xl)]">
                <PortfolioCardCarousel title={item.title} images={item.images} />
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">
                      {item.category}
                    </p>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-soft-gray)]" />
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-pewter-gray)]/62">Sorotan Proyek</p>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/6 bg-[var(--color-white-smoke)] px-3.5 py-2 text-xs font-medium text-[var(--color-pewter-gray)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={110}>
          <div className="mt-12 rounded-[28px] border border-black/5 bg-[var(--color-white-smoke)] px-5 py-7 text-center shadow-[var(--shadow-xl)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-sky-blue)]">Konsultasi Proyek</p>
            <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)] sm:text-4xl">
              Tertarik membuat proyek serupa?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">
              Diskusikan kebutuhan signage, display akrilik, neon box, atau fabrication custom Anda bersama tim PT Akira
              Prima Karya melalui WhatsApp.
            </p>
            <Link
              href="https://wa.me/6285655558573"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-button mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[#1faa59]/18 bg-white/84 px-6 py-3 text-sm font-semibold text-[#17874a] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:border-[#1faa59]/32 hover:bg-white hover:text-[#137340]"
            >
              Konsultasi via WhatsApp
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
