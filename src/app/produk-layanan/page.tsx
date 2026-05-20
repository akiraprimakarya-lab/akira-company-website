import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServicesMobileAccordion } from "@/components/services-mobile-accordion";
import { services } from "@/lib/site-data";

const heroTrustStats = [
  { value: "120+", label: "Proyek" },
  { value: "6", label: "Layanan Utama" },
  { value: "Sejak 2017", label: "" },
  { value: "48 Jam", label: "Respon Awal" }
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-10 sm:py-18">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Produk & Layanan"
                title="Solusi visual untuk brand, retail, dan lingkungan komersial."
                description="Layanan kami dirancang untuk membantu kebutuhan identitas visual, display produk, dan fabrication custom yang membutuhkan hasil rapi serta siap dipasang."
              />

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <CtaButton
                  href="https://wa.me/6285655558573?text=Halo%20PT%20Akira%20Prima%20Karya%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20dan%20layanan."
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi via WhatsApp
                </CtaButton>
                <CtaButton href="/portofolio" variant="secondary">
                  Lihat Portofolio
                </CtaButton>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 xl:grid-cols-4">
                {heroTrustStats.map((stat) => (
                  <div
                    key={stat.value + stat.label}
                    className="rounded-[22px] border border-black/5 bg-white/84 px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-lg font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)] sm:text-xl">{stat.value}</p>
                    {stat.label ? (
                      <p className="mt-1 text-xs leading-5 text-[var(--color-pewter-gray)] sm:text-sm">{stat.label}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ImagePlaceholder
              src="/images/produk-&-layanan/services-showcase-collage.jpg"
              title="Showcase produk signage dan acrylic PT Akira Prima Karya"
              height="min-h-[240px] sm:min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-10 sm:pb-24">
        <Container className="grid gap-5">
          <ServicesMobileAccordion services={services} />

          <div className="hidden gap-5 lg:grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 50}>
            <article
              className="interactive-card grid gap-5 rounded-[28px] border border-black/5 bg-white p-5 shadow-[var(--shadow-xl)] sm:p-6 lg:grid-cols-[260px_1fr_1.1fr]"
            >
              <div className="relative">
                <ImagePlaceholder
                  src={service.image}
                  title={service.title}
                  height="min-h-[190px]"
                  sizes="(min-width: 1024px) 260px, 100vw"
                />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[var(--color-royal-blue)] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-pewter-gray)]">{service.description}</p>
              </div>
              <div className="rounded-[24px] bg-[var(--color-white-smoke)] p-5 text-sm leading-7 text-[var(--color-pewter-gray)]">
                Setiap layanan dapat disesuaikan dari sisi ukuran, material, sistem pencahayaan, finishing, hingga kebutuhan
                pemasangan agar hasil akhirnya sesuai dengan fungsi dan karakter ruang bisnis.
              </div>
            </article>
            </Reveal>
          ))}
          </div>
        </Container>
      </section>
    </>
  );
}
