import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/lib/site-data";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M6.8 3.5h2.4c.4 0 .8.3.9.7l.8 3.3c.1.4 0 .8-.3 1.1l-1.5 1.5a15.8 15.8 0 0 0 4.8 4.8l1.5-1.5c.3-.3.7-.4 1.1-.3l3.3.8c.4.1.7.5.7.9v2.4c0 .5-.4 1-.9 1.1-.8.1-1.5.2-2.3.2C10.2 20.5 3.5 13.8 3.5 5.7c0-.8.1-1.5.2-2.3.1-.5.5-.9 1.1-.9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.5 2" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,_#071120_0%,_#040914_100%)] text-white">
      <Container className="py-10 pb-24 sm:py-16 sm:pb-16">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div className="max-w-sm">
            <div className="inline-flex rounded-[20px] bg-white p-2.5 shadow-[0_18px_48px_rgba(0,0,0,0.2)] sm:rounded-[24px] sm:p-4">
              <Image
                src="/logo-akira.jpg"
                alt="Logo PT Akira Prima Karya"
                width={320}
                height={140}
                className="h-auto w-[126px] sm:w-[240px]"
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-white/72 sm:mt-6 sm:text-base sm:leading-7">
              PT Akira Prima Karya adalah perusahaan yang bergerak di bidang advertising, signage, dan custom acrylic
              fabrication untuk kebutuhan bisnis, retail, F&amp;B, dan area komersial.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/48 sm:mt-4">
              Berdiri sejak 2017
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/84">Quick Links</h3>
            <nav className="mt-3 grid gap-2.5 sm:mt-5 sm:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/68 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/84">Kontak</h3>
            <div className="mt-3 grid gap-4 text-sm text-white/72 sm:mt-5 sm:gap-5">
              <div>
                <div className="flex items-center gap-3 text-white">
                  <PhoneIcon />
                  <span className="font-medium">WhatsApp</span>
                </div>
                <div className="mt-2.5 grid gap-1.5 pl-7 sm:mt-3 sm:gap-2">
                  <Link
                    href="https://wa.me/6285655558573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words cursor-pointer transition hover:text-white"
                  >
                    085655558573
                  </Link>
                  <Link
                    href="https://wa.me/6285786584482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words cursor-pointer transition hover:text-white"
                  >
                    085786584482
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-white">
                  <MailIcon />
                  <span className="font-medium">Email</span>
                </div>
                <Link
                  href="mailto:akiraprimakarya@gmail.com"
                  className="mt-2.5 inline-block break-words pl-7 transition hover:text-white sm:mt-3"
                >
                  akiraprimakarya@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/84">Workshop</h3>
            <div className="mt-3 grid gap-4 text-sm text-white/72 sm:mt-5 sm:gap-5">
              <div>
                <div className="flex items-center gap-3 text-white">
                  <LocationIcon />
                  <span className="font-medium">Alamat</span>
                </div>
                <p className="mt-2.5 break-words pl-7 leading-6 sm:mt-3 sm:leading-7">
                  Jl. Dusun Ngaglik, RT.4/RW.1,
                  <br />
                  Cerme Lor, Cerme Kidul,
                  <br />
                  Kec. Cerme,
                  <br />
                  Kabupaten Gresik,
                  <br />
                  Jawa Timur 61171
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-white">
                  <ClockIcon />
                  <span className="font-medium">Jam Operasional</span>
                </div>
                <p className="mt-2.5 pl-7 leading-6 sm:mt-3 sm:leading-7">
                  Senin - Sabtu
                  <br />
                  08.00 - 16.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
          <p className="text-sm text-white/54">{"\u00A9"} 2026 PT Akira Prima Karya. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
