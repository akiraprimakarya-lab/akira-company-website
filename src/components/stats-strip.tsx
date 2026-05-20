import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "120+", label: "Proyek signage & acrylic" },
  { value: "6", label: "Kategori layanan utama" },
  { value: "Sejak 2017", label: "Berpengalaman di bidang advertising & akrilik" },
  { value: "100%", label: "Pendekatan custom sesuai kebutuhan" }
];

export function StatsStrip() {
  return (
    <section className="pb-6 sm:pb-14">
      <Container>
        <Reveal>
        <div className="grid grid-cols-2 gap-3 rounded-[28px] border border-black/5 bg-white p-4 shadow-[var(--shadow-xl)] sm:grid-cols-2 sm:gap-4 sm:p-8 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="interactive-card rounded-[24px] bg-[var(--color-white-smoke)] p-4 sm:rounded-3xl sm:p-6">
              <p className="text-2xl font-bold tracking-[-0.04em] text-[var(--color-midnight-ink)] sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs leading-5 text-[var(--color-pewter-gray)] sm:text-sm sm:leading-6">{stat.label}</p>
            </div>
          ))}
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
