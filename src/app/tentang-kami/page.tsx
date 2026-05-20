import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowSteps } from "@/components/workflow-steps";
import { capabilityDetails, processSteps } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <section className="py-10 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal>
          <div>
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Partner produksi visual untuk signage, display, dan custom acrylic fabrication."
              description="PT Akira Prima Karya hadir sebagai mitra produksi untuk kebutuhan advertising, signage, dan custom acrylic fabrication dengan fokus pada kualitas pengerjaan, ketepatan detail, dan hasil visual yang selaras dengan identitas brand."
            />
            <div className="mt-8 rounded-[28px] bg-[var(--color-white-smoke)] p-6 sm:p-7">
              <p className="text-sm leading-8 text-[var(--color-pewter-gray)] sm:text-base">
                Sejak 2017, Akira telah melayani kebutuhan advertising, signage, dan custom acrylic fabrication untuk
                berbagai kebutuhan bisnis dan area komersial. Kami melayani kebutuhan visual untuk toko, restoran,
                kantor, retail modern, dan berbagai area komersial melalui proses konsultasi, produksi, hingga
                pemasangan yang dikerjakan secara terukur dan profesional.
              </p>
            </div>
          </div>
          </Reveal>
          <Reveal delay={90}>
            <ImagePlaceholder
              src="/images/tentang-kami/about-company-workshop.jpg.jpeg"
              title="Workshop produksi PT Akira Prima Karya"
              height="min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {capabilityDetails.map((item, index) => (
              <Reveal key={item.title} delay={index * 50}>
              <div className="interactive-card rounded-[28px] border border-black/5 bg-white p-6 shadow-[var(--shadow-xl)] sm:p-7">
                <h3 className="text-xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-pewter-gray)]">
                  {item.description}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-24">
        <Container>
          <Reveal>
          <SectionHeading
            eyebrow="Cara Kami Bekerja"
            title="Workflow yang membantu klien merasa tenang sejak awal proyek."
            description="Setiap tahap dibuat jelas agar company profile terasa informatif, bukan sekadar dekoratif."
          />
          </Reveal>
          <WorkflowSteps steps={processSteps} />
        </Container>
      </section>
    </>
  );
}
