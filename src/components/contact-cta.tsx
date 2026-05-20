import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section className="py-10 sm:py-24">
      <Container>
        <Reveal>
        <div className="interactive-card rounded-[28px] bg-[linear-gradient(135deg,_#00051a_0%,_#06285a_55%,_#0f68ea_100%)] px-5 py-8 text-white shadow-[var(--shadow-xl)] sm:px-10 sm:py-14 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sunburst-yellow)]">Mulai Brief Anda</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Siap mengubah kebutuhan display dan signage menjadi visual yang lebih kuat?
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/82 sm:text-base">
              Kami siap membantu mulai dari konsultasi konsep, pemilihan material, proses produksi, hingga pemasangan untuk
              kebutuhan retail, F&B, kantor, dan area komersial lainnya.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 lg:mt-0">
            <CtaButton href="/kontak" variant="secondary">
              Konsultasi Sekarang
            </CtaButton>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
