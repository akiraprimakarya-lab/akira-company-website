"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { Container } from "@/components/container";

const consultationHref = "https://wa.me/6285655558573";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[var(--color-midnight-ink)] transition duration-300 ${
          isOpen ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-[var(--color-midnight-ink)] transition duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-[var(--color-midnight-ink)] transition duration-300 ${
          isOpen ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-[90] transition duration-300 ${
        isScrolled
          ? "border-b border-white/55 bg-white/72 shadow-[0_18px_48px_rgba(0,20,66,0.10)] backdrop-blur-2xl"
          : "border-b border-black/5 bg-white/92 shadow-none backdrop-blur-md"
      }`}
    >
      <Container className="py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 lg:gap-8">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[18px] bg-white ring-1 ring-black/6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:h-11 sm:w-11 sm:rounded-2xl">
              <Image
                src="/logo-akira.jpg"
                alt="Logo PT Akira Prima Karya"
                width={320}
                height={140}
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-sky-blue)] sm:text-sm sm:tracking-[0.24em]">
                PT Akira Prima Karya
              </p>
              <p className="hidden truncate text-[11px] text-[var(--color-pewter-gray)]/80 sm:block sm:text-xs">
                Advertising & Acrylic Fabrication
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 ${
                    isActive
                      ? "text-[var(--color-royal-blue)]"
                      : "text-[var(--color-pewter-gray)]/78 hover:bg-white/75 hover:text-[var(--color-midnight-ink)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-[var(--color-royal-blue)] transition duration-200 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-55"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex lg:items-center">
            <Link
              href={consultationHref}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-button inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-royal-blue)]/18 bg-white/72 px-5 py-2.5 text-sm font-semibold text-[var(--color-royal-blue)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-200 hover:border-[var(--color-royal-blue)]/28 hover:bg-white"
            >
              Konsultasi
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
            className="interactive-button relative z-[101] inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-[18px] border border-black/7 bg-white/90 text-[var(--color-midnight-ink)] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:bg-white sm:h-11 sm:w-11 sm:rounded-2xl lg:hidden"
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>

        <div
          className={`relative z-[100] grid overflow-hidden transition-all duration-300 lg:hidden ${
            isMobileMenuOpen ? "pointer-events-auto mt-3 grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="origin-top max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[24px] border border-white/65 bg-white/92 p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:rounded-[28px] sm:p-3">
              <nav className="grid gap-1.5 sm:gap-2">
                {navItems.map((item) => {
                  const isActive = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition duration-200 sm:py-3 ${
                        isActive
                          ? "bg-[var(--color-royal-blue)]/8 text-[var(--color-royal-blue)]"
                          : "text-[var(--color-pewter-gray)]/82 hover:bg-[var(--color-white-smoke)] hover:text-[var(--color-midnight-ink)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-2.5 border-t border-black/6 pt-2.5 sm:mt-3 sm:pt-3">
                <Link
                  href={consultationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="interactive-button inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#1faa59]/12 bg-[#1faa59] px-5 py-2.5 text-sm font-semibold !text-white shadow-[0_16px_38px_rgba(31,170,89,0.2)] transition duration-200 hover:bg-[#16924a] sm:min-h-12 sm:py-3"
                >
                  Konsultasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
