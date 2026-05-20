import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

const whatsappConsultationHref =
  "https://wa.me/6285655558573?text=Halo%20PT%20Akira%20Prima%20Karya%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20signage%20%2F%20acrylic%20fabrication.";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-6 sm:pb-24 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,104,234,0.16),_transparent_38%),linear-gradient(180deg,_#ffffff_0%,_#f0f4fa_48%,_#ffffff_100%)]" />
      <Container className="grid items-center gap-5 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <Reveal className="max-w-3xl">
          <p className="inline-flex whitespace-nowrap rounded-full border border-[var(--color-soft-gray)] bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-sky-blue)] sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            <span className="sm:hidden">Signage &amp; Acrylic</span>
            <span className="hidden sm:inline">Premium Signage &amp; Acrylic Fabrication</span>
          </p>
          <h1 className="mt-4 text-[1.95rem] font-bold leading-[0.92] tracking-[-0.055em] text-[var(--color-midnight-ink)] sm:mt-6 sm:text-6xl lg:text-7xl">
            Visual branding yang dibuat presisi untuk ruang usaha modern.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6.5 text-[var(--color-pewter-gray)] sm:mt-6 sm:text-lg sm:leading-8">
            PT Akira Prima Karya menghadirkan solusi advertising, signage, dan custom acrylic fabrication dengan pendekatan
            workshop yang rapi, detail, dan siap menampilkan brand Anda lebih premium.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <CtaButton href={whatsappConsultationHref} variant="whatsapp" target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
            </CtaButton>
            <CtaButton href="/produk-layanan" variant="secondary">
              Lihat Layanan
            </CtaButton>
            <CtaButton href="/portofolio" variant="ghost">
              Jelajahi Portofolio
            </CtaButton>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <ImagePlaceholder
            src="/images/hero-workshop.jpg"
            title="Workshop produksi akrilik dan signage"
            height="sm:min-h-[420px]"
            priority
          />
        </Reveal>
      </Container>
    </section>
  );
}
