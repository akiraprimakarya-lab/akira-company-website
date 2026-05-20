import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";

const whatsappHref = "https://wa.me/6285655558573";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_rgba(240,246,255,0.96)_0%,_#ffffff_58%,_rgba(245,248,252,0.98)_100%)]">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(15,104,234,0.12),_transparent_65%)]" />

      <Container className="relative flex min-h-[calc(100vh-9rem)] items-center py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-3xl">
          <div className="overflow-hidden rounded-[28px] border border-white/75 bg-white/88 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="inline-flex rounded-full border border-[var(--color-royal-blue)]/12 bg-[var(--color-royal-blue)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-royal-blue)]">
              404
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[var(--color-midnight-ink)] sm:mt-6 sm:text-4xl lg:text-5xl">
              Halaman Tidak Ditemukan
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">
              Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <CtaButton href="/">Kembali ke Beranda</CtaButton>
              <CtaButton href={whatsappHref} variant="secondary" target="_blank" rel="noopener noreferrer">
                Hubungi Kami via WhatsApp
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
