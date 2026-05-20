import Link from "next/link";
import { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  target?: string;
  rel?: string;
};

export function CtaButton({ href, children, variant = "primary", target, rel }: CtaButtonProps) {
  const styles =
    variant === "whatsapp"
      ? "border border-transparent bg-[#1faa59] !text-white shadow-[0_16px_40px_rgba(31,170,89,0.22)] hover:bg-[#16924a]"
      : variant === "secondary"
        ? "border border-[var(--color-pewter-gray)]/18 bg-white/88 !text-[var(--color-midnight-ink)] shadow-[0_10px_26px_rgba(15,23,42,0.06)] hover:border-[var(--color-pewter-gray)]/28 hover:bg-white"
        : variant === "ghost"
          ? "border border-transparent bg-transparent !text-[var(--color-royal-blue)] shadow-none hover:bg-[rgba(15,104,234,0.06)] hover:!text-[#0c59ca]"
          : "border border-transparent bg-[var(--color-royal-blue)] !text-white shadow-[0_14px_34px_rgba(15,104,234,0.18)] hover:bg-[#0c59ca]";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`interactive-button inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 sm:w-auto ${styles}`}
    >
      {children}
    </Link>
  );
}
