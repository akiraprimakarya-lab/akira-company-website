"use client";

import Image from "next/image";
import { useState } from "react";

type PortfolioCardCarouselProps = {
  title: string;
  images: string[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      {direction === "left" ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  );
}

export function PortfolioCardCarousel({ title, images }: PortfolioCardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const hasMultipleImages = images.length > 1;

  function goToIndex(nextIndex: number) {
    if (!hasMultipleImages) {
      return;
    }

    const normalizedIndex = (nextIndex + images.length) % images.length;
    setActiveIndex(normalizedIndex);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchStartX - touchEndX;
    const swipeThreshold = 36;

    if (deltaX > swipeThreshold) {
      goToIndex(activeIndex + 1);
    } else if (deltaX < -swipeThreshold) {
      goToIndex(activeIndex - 1);
    }

    setTouchStartX(null);
  }

  if (images.length === 0) {
    return (
      <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-black/5 bg-[var(--color-white-smoke)] shadow-[var(--shadow-xl)]" />
    );
  }

  return (
    <div
      className="group relative min-h-[260px] touch-pan-y overflow-hidden rounded-[28px] border border-black/5 bg-[var(--color-white-smoke)] shadow-[var(--shadow-xl)]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex min-h-[260px] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={`${title}-${image}`} className="relative min-h-[260px] w-full shrink-0 grow-0 basis-full">
            <Image
              src={image}
              alt={`${title} - foto ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {hasMultipleImages ? (
        <>
          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            aria-label={`Lihat foto sebelumnya untuk ${title}`}
            className="interactive-button absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--color-midnight-ink)] opacity-0 shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition duration-200 hover:bg-white group-hover:opacity-100 md:inline-flex"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            aria-label={`Lihat foto berikutnya untuk ${title}`}
            className="interactive-button absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--color-midnight-ink)] opacity-0 shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition duration-200 hover:bg-white group-hover:opacity-100 md:inline-flex"
          >
            <ArrowIcon direction="right" />
          </button>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 px-4">
            {images.map((image, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={`${image}-dot`}
                  type="button"
                  onClick={() => goToIndex(index)}
                  aria-label={`Lihat foto ${index + 1} untuk ${title}`}
                  aria-pressed={isActive}
                  className={`h-2.5 rounded-full transition duration-200 ${
                    isActive ? "w-6 bg-white shadow-sm" : "w-2.5 bg-white/55 hover:bg-white/78"
                  }`}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
