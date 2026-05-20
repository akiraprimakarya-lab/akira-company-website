import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { ServiceCarouselMobile } from "@/components/service-carousel-mobile";
import { services } from "@/lib/site-data";

export function ServiceGrid() {
  return (
    <section className="py-10 sm:py-24">
      <Container>
        <Reveal>
        <SectionHeading
          eyebrow="Produk & Layanan"
          title="Layanan signage dan acrylic yang dibuat untuk kebutuhan komersial."
          description="PT Akira Prima Karya melayani kebutuhan visual branding dan fabrication untuk berbagai jenis usaha dengan pengerjaan yang rapi, presisi, dan menyesuaikan kebutuhan lapangan."
        />
        </Reveal>
        <div className="mt-8">
          <Reveal className="md:hidden">
            <ServiceCarouselMobile services={services} />
          </Reveal>
        </div>
        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 50}>
            <article className="interactive-card overflow-hidden rounded-[28px] bg-[var(--color-white-smoke)]">
              <ImagePlaceholder
                src={service.image}
                title={service.title}
                height="min-h-[230px]"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[var(--color-royal-blue)] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">{service.description}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
