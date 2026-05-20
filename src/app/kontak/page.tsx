import Link from "next/link";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site-data";

const workshopAddress =
  "Jl. Dusun Ngaglik, RT.4/RW.1, Cerme Lor, Cerme Kidul, Kec. Cerme, Kabupaten Gresik, Jawa Timur 61171";

const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(workshopAddress)}&output=embed`;
const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshopAddress)}`;

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.4c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H8.5v2.8h2.3V21h2.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.9]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.3" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M14.9 3c.5 1.7 1.6 3 3.3 3.7.7.3 1.4.5 2.2.5v2.9a8.5 8.5 0 0 1-4.4-1.3v6.1c0 3.1-2.5 5.6-5.6 5.6S4.8 18 4.8 14.9s2.5-5.6 5.6-5.6c.3 0 .6 0 .8.1v3a3.1 3.1 0 0 0-.8-.1c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.8-1.1 2.8-3V3h1.7Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.3 7.2c-.2-.9-.9-1.6-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.5.4c-.9.2-1.6.9-1.8 1.8C2.3 8.9 2.3 12 2.3 12s0 3.1.4 4.8c.2.9.9 1.6 1.8 1.8 1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4c.9-.2 1.6-.9 1.8-1.8.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8l5.4 3.2-5.4 3.2Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/fabrikasiakrilikgresik",
    icon: FacebookIcon
  },
  {
    label: "Instagram",
    href: "https://instagram.com/fabrikasicerme",
    icon: InstagramIcon
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@akira_toko_akrilik",
    icon: TikTokIcon
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@akiratokoakrilik",
    icon: YouTubeIcon
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="py-10 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
          <div>
            <SectionHeading
              eyebrow="Kontak"
              title="Ruang kontak yang siap dipakai untuk brief proyek baru."
              description="Hubungi PT Akira Prima Karya untuk mendiskusikan kebutuhan signage, display akrilik, atau fabrication custom sesuai kebutuhan bisnis Anda."
            />
            <div className="mt-8 grid gap-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="interactive-card rounded-[24px] bg-[var(--color-white-smoke)] p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">{detail.label}</p>
                  {Array.isArray(detail.value) ? (
                    <div className="mt-3 space-y-2 text-base font-semibold text-[var(--color-midnight-ink)] sm:text-lg">
                      {detail.value.map((item) => (
                        <Link
                          key={item}
                          href={item === "085655558573" ? "https://wa.me/6285655558573" : "https://wa.me/6285786584482"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer transition hover:text-[var(--color-royal-blue)]"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 break-words text-base font-semibold text-[var(--color-midnight-ink)] sm:text-lg">{detail.value}</p>
                  )}
                </div>
              ))}

              <div className="interactive-card rounded-[24px] bg-[var(--color-white-smoke)] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">Ikuti Kami</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kunjungi ${item.label} PT Akira Prima Karya`}
                        className="interactive-button flex min-h-12 items-center gap-3 rounded-[18px] border border-black/6 bg-white px-4 py-3 text-sm font-semibold text-[var(--color-midnight-ink)] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-royal-blue)]/18 hover:text-[var(--color-royal-blue)]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-white-smoke)] text-[var(--color-midnight-ink)] transition duration-200">
                          <Icon />
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal delay={90} className="grid gap-5">
            <ImagePlaceholder
              src="/images/kontak/kontak.jpg"
              title="Tim PT Akira Prima Karya siap melayani konsultasi proyek"
              height="sm:min-h-[280px] lg:min-h-[320px]"
            />
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section className="pb-10 sm:pb-24">
        <Container>
          <Reveal>
          <div className="interactive-card rounded-[28px] border border-black/5 bg-white p-4 shadow-[var(--shadow-xl)] sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky-blue)]">
                  Lokasi Workshop Kami
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)] sm:text-4xl">
                  Kunjungi workshop PT Akira Prima Karya di Gresik.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-pewter-gray)] sm:text-base">{workshopAddress}</p>
              </div>
              <Link
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--color-pewter-gray)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-midnight-ink)] transition hover:bg-[var(--color-white-smoke)] sm:w-fit"
              >
                Buka di Google Maps
              </Link>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-black/5">
              <iframe
                title="Lokasi Workshop PT Akira Prima Karya"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[300px] w-full border-0 sm:h-[360px] lg:h-[420px]"
              />
            </div>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
