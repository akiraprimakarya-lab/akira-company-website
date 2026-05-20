import { ContactCta } from "@/components/contact-cta";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectorTrust } from "@/components/sector-trust";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { StatsStrip } from "@/components/stats-strip";
import { WorkflowSteps } from "@/components/workflow-steps";
import { capabilities, processSteps } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServiceGrid />

      <section className="py-10 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
          <div>
          <SectionHeading
              eyebrow="Tentang Brand"
              title="Pendekatan kerja yang rapi, cepat, dan tetap fokus pada hasil visual."
              description="PT Akira Prima Karya mendampingi kebutuhan signage, display, dan fabrikasi akrilik untuk brand yang membutuhkan hasil visual kuat, detail produksi yang terjaga, dan proses kerja yang jelas."
            />
            <div className="mt-8 grid gap-3">
              {capabilities.map((item) => (
                <div key={item} className="interactive-card rounded-full border border-black/8 bg-white px-5 py-4 text-sm text-[var(--color-pewter-gray)] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          </Reveal>
          <Reveal delay={90}>
            <ImagePlaceholder
              src="/images/about-workflow-process.jpg"
              title="Produksi detail untuk kebutuhan brand environment"
              height="sm:min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-24">
        <Container>
          <Reveal>
          <SectionHeading
            eyebrow="Alur Kerja"
            title="Dari brief awal hingga pemasangan, semua dibuat agar terasa jelas dan profesional."
            description="Setiap proyek dijalankan melalui tahapan yang terukur agar kebutuhan visual, material, dan instalasi dapat dieksekusi dengan lebih efisien."
            align="center"
          />
          </Reveal>
          <WorkflowSteps steps={processSteps} />
        </Container>
      </section>

      <SectorTrust />

      <ContactCta />
    </>
  );
}
