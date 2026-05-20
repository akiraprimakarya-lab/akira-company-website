"use client";

import { useEffect, useState } from "react";

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2]">
      <path d="M12 19V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </svg>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div
      className={`pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom,0px)+5rem)] right-3 z-[78] transition duration-300 sm:bottom-24 sm:right-6 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className="interactive-button pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/65 bg-[var(--color-slate-blue)]/92 text-white shadow-[0_16px_36px_rgba(6,40,90,0.24)] backdrop-blur-xl transition hover:bg-[var(--color-royal-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sky-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
