"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/image-placeholder";

type ServiceItem = {
  title: string;
  image: string;
  description: string;
};

type ServiceCarouselMobileProps = {
  services: ServiceItem[];
};

export function ServiceCarouselMobile({ services }: ServiceCarouselMobileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemIds = useMemo(() => services.map((_, index) => `service-slide-${index}`), [services]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      return;
    }

    function updateActiveIndex() {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const slideWidth = container.clientWidth * 0.88 + 12;
      const nextIndex = Math.round(container.scrollLeft / slideWidth);
      setActiveIndex(Math.max(0, Math.min(services.length - 1, nextIndex)));
    }

    updateActiveIndex();
    containerElement.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => containerElement.removeEventListener("scroll", updateActiveIndex);
  }, [services.length]);

  function scrollToIndex(index: number) {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const target = container.querySelector<HTMLElement>(`#${itemIds[index]}`);
    target?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  }

  return (
    <div className="md:hidden">
      <div
        ref={containerRef}
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, index) => (
          <article
            key={service.title}
            id={itemIds[index]}
            className="interactive-card w-[88%] shrink-0 snap-start overflow-hidden rounded-[24px] bg-[var(--color-white-smoke)] shadow-[var(--shadow-xl)]"
          >
            <ImagePlaceholder
              src={service.image}
              title={service.title}
              height="min-h-[190px]"
              sizes="88vw"
            />
            <div className="flex h-[188px] flex-col p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-xs font-bold text-[var(--color-royal-blue)] shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">{service.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-[var(--color-pewter-gray)]">{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Lihat ${service.title}`}
              aria-pressed={isActive}
              className={`h-2.5 rounded-full transition duration-200 ${
                isActive ? "w-6 bg-[var(--color-royal-blue)]" : "w-2.5 bg-black/12 hover:bg-black/22"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
