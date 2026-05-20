import { PortfolioGrid } from "@/components/portfolio-grid";
import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getPortfolioItems } from "@/lib/portfolio-data";

export default function PortfolioPage() {
  const portfolioItems = getPortfolioItems();

  return (
    <>
      <section className="py-10 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Portofolio"
              title="Showcase proyek dengan tampilan visual yang meyakinkan calon klien."
              description="Halaman ini menggambarkan jenis pekerjaan yang relevan untuk kebutuhan signage, display, dan elemen visual komersial di berbagai sektor usaha."
            />
          </Reveal>
          <Reveal delay={90}>
            <ImagePlaceholder
              src="/images/portfolio-showcase-collage.jpg"
              title="Showcase hasil proyek signage dan akrilik PT Akira Prima Karya"
              height="min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>
      <PortfolioGrid items={portfolioItems} />
    </>
  );
}
