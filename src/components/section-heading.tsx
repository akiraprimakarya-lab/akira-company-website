type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="mb-4 inline-flex rounded-full border border-[var(--color-soft-gray)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[var(--color-midnight-ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-pewter-gray)] sm:mt-5 sm:text-lg">{description}</p>
    </div>
  );
}
