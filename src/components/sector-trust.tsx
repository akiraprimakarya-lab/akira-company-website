import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sectorBadges } from "@/lib/site-data";

function SectorIcon({ label }: { label: string }) {
  const iconClassName = "h-5 w-5 fill-none stroke-current stroke-[1.8] sm:h-6 sm:w-6";

  switch (label) {
    case "Retail":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M4 9.5 6 5h12l2 4.5" />
          <path d="M5 9.5h14v8.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18Z" />
          <path d="M9 19.5v-5h6v5" />
        </svg>
      );
    case "F&B":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M6 4v8" />
          <path d="M9 4v8" />
          <path d="M7.5 12v8" />
          <path d="M15 4v7.5a2.5 2.5 0 0 0 5 0V4" />
          <path d="M17.5 11.5v8.5" />
        </svg>
      );
    case "Corporate":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M4.5 19.5h15" />
          <path d="M6 19.5V6.5A1.5 1.5 0 0 1 7.5 5h9A1.5 1.5 0 0 1 18 6.5v13" />
          <path d="M9 8.5h1.5" />
          <path d="M13.5 8.5H15" />
          <path d="M9 12h1.5" />
          <path d="M13.5 12H15" />
          <path d="M11 19.5v-3h2v3" />
        </svg>
      );
    case "Hospitality":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M4 19.5V7.5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5v12" />
          <path d="M16 10.5h2.5A1.5 1.5 0 0 1 20 12v7.5" />
          <path d="M8 9h1.5" />
          <path d="M11.5 9H13" />
          <path d="M8 12.5h1.5" />
          <path d="M11.5 12.5H13" />
          <path d="M10 19.5v-3h2v3" />
        </svg>
      );
    case "Exhibition":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M4 18.5h16" />
          <path d="M6 18.5v-9l6-3 6 3v9" />
          <path d="M9 11.5h6" />
          <path d="M12 8v10.5" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName}>
          <path d="M4.5 19.5h15" />
          <path d="M6 19.5V8.5A1.5 1.5 0 0 1 7.5 7h9A1.5 1.5 0 0 1 18 8.5v11" />
          <path d="M8.5 10h7" />
          <path d="M8.5 13h7" />
          <path d="M8.5 16h4.5" />
          <path d="M9 7V5.5h6V7" />
        </svg>
      );
  }
}

export function SectorTrust() {
  return (
    <section className="bg-[linear-gradient(180deg,_#f8fafc_0%,_#f3f6fb_100%)] py-10 sm:py-24">
      <Container>
        <Reveal>
        <SectionHeading
          eyebrow="Sektor Klien"
          title="Dipercaya untuk Kebutuhan Visual Branding Berbagai Sektor"
          description="Kami mendukung kebutuhan signage, display akrilik, dan branding visual untuk berbagai jenis bisnis dan area komersial."
          align="center"
        />
        </Reveal>

        <Reveal delay={30}>
          <div className="mt-4 flex justify-center sm:mt-5">
            <span className="rounded-full border border-[var(--color-royal-blue)]/12 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-royal-blue)] shadow-sm">
              Since 2017
            </span>
          </div>
        </Reveal>

        <Reveal delay={60} className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">
          Dari kebutuhan toko retail, F&amp;B, kantor, hingga area promosi, PT Akira Prima Karya membantu menghadirkan
          tampilan visual yang lebih profesional dan siap digunakan.
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {sectorBadges.map((sector, index) => (
            <Reveal key={sector.label} delay={index * 45}>
            <article
              className="interactive-card group min-h-[78px] rounded-[20px] border border-black/6 bg-white/92 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:border-[var(--color-sky-blue)]/20 sm:min-h-[96px] sm:rounded-[24px] sm:p-5"
            >
              <div className="grid min-h-full grid-cols-[40px_1fr] items-center gap-2.5 sm:grid-cols-[56px_1fr] sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] border border-black/7 bg-[var(--color-white-smoke)] text-[var(--color-midnight-ink)] transition group-hover:border-[var(--color-sky-blue)]/20 group-hover:text-[var(--color-royal-blue)] sm:h-14 sm:w-14 sm:rounded-2xl">
                  <SectorIcon label={sector.label} />
                </div>
                <div className="min-w-0 self-center">
                  <p className="text-[13px] font-semibold leading-4.5 text-[var(--color-midnight-ink)] sm:text-[17px] sm:leading-6">
                    {sector.label}
                  </p>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
