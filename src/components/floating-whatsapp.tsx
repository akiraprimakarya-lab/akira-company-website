"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const whatsappHref =
  "https://wa.me/6285655558573?text=Halo%20PT%20Akira%20Prima%20Karya%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20signage%20%2F%20acrylic%20fabrication.";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M19.1 4.9A9.9 9.9 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2h0c5.5 0 10-4.5 10-10 0-2.7-1-5.2-2.9-6.9Zm-7.1 15.2h0c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 0 1 3.9 12c0-4.5 3.6-8.1 8.1-8.1 2.2 0 4.2.8 5.7 2.4a8 8 0 0 1 2.4 5.7c0 4.5-3.6 8.1-8.1 8.1Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1.1-.6-1.5-.1-.4-.3-.3-.4-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.6.6-.6 1.5s.6 1.8.7 1.9c.1.1 1.2 1.9 2.9 2.6 1.8.8 1.8.5 2.1.5.3 0 1.1-.4 1.3-.8.2-.4.2-.8.1-.8 0-.1-.2-.1-.4-.2Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function showButton() {
      setIsVisible(true);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      hideTimer.current = setTimeout(() => {
        setIsVisible(true);
      }, 180);
    }

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        setIsVisible(false);
      } else if (scrollDelta < -4) {
        showButton();
      }

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      hideTimer.current = setTimeout(() => {
        setIsVisible(true);
      }, 220);

      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom,0px)+0.9rem)] right-4 z-[80] transition duration-300 sm:bottom-5 sm:right-5 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp PT Akira Prima Karya"
        className="interactive-button pointer-events-auto inline-flex min-h-11 items-center gap-2.5 rounded-full bg-[#1faa59] px-2.5 py-2.5 text-sm font-semibold !text-white shadow-[0_16px_34px_rgba(31,170,89,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#16924a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ae0af] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-12 sm:gap-3 sm:px-4 sm:py-3"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/14 sm:h-10 sm:w-10">
          <WhatsAppIcon />
        </span>
        <span className="hidden sm:inline">Chat WhatsApp</span>
      </Link>
    </div>
  );
}
