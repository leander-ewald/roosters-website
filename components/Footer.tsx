import Link from "next/link";
import Image from "next/image";

const SPONSORS = [
  { name: "Raab Karcher", url: "https://raabkarcher.de" },
  { name: "Märkische Bank", url: "https://maerkische-bank.de" },
  { name: "Krombacher", url: "https://krombacher.de" },
  { name: "Böhm Kabel", url: "https://boehm-kabel.de" },
  { name: "Kirchhoff Gruppe", url: "https://kirchhoff-gruppe.de" },
  { name: "Stadtwerke Iserlohn", url: "https://stadtwerke-iserlohn.de" },
  { name: "Huckschlag Transporte", url: "https://huckschlag-transporte.de" },
  { name: "Platzmann Federn", url: "https://platzmann.de" },
  { name: "J.D. von Hagen AG", url: "https://jdvonhagen.de" },
];

const LINKS = [
  {
    title: "Saison",
    items: [
      { label: "News", href: "/news" },
      { label: "Spielplan", href: "/spielplan" },
      { label: "Tabelle", href: "/tabelle" },
      { label: "Statistik", href: "/statistik" },
    ],
  },
  {
    title: "Team",
    items: [
      { label: "Kader", href: "/team/kader" },
      { label: "Staff", href: "/team/staff" },
      { label: "Organisation", href: "/team/organisation" },
    ],
  },
  {
    title: "Verein",
    items: [
      { label: "Historie", href: "/verein/historie" },
      { label: "Mitgliedschaft", href: "/verein/mitgliedschaft" },
      { label: "Kids Club", href: "/verein/kids-club" },
      { label: "Gastronomie", href: "/verein/gastronomie" },
      { label: "Jobs", href: "/verein/jobs" },
    ],
  },
  {
    title: "Fans & Partner",
    items: [
      { label: "Fanclubs", href: "/fanzone/fanclubs" },
      { label: "Ehrenamt", href: "/fanzone/ehrenamt" },
      { label: "Newsletter", href: "/fanzone/newsletter" },
      { label: "Sponsor werden", href: "/sponsoring" },
    ],
  },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/IserlohnRoosters/", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", href: "https://instagram.com/iserlohnroosters_official/", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "YouTube", href: "https://youtube.com/channel/UCpXrhQmaIxM49gVAPas8S6Q", d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "TikTok", href: "https://tiktok.com/@iserlohn_roosters", d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { label: "LinkedIn", href: "https://linkedin.com/company/iserlohn-roosters/", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Accent divider */}
      <div className="section-divider" />

      {/* Sponsors strip */}
      <div className="border-b border-white/5 py-8">
        <div className="container">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">
            Unsere Partner & Sponsoren
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {SPONSORS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 px-5 bg-white/[0.03] border border-white/[0.06] rounded hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                title={s.name}
              >
                <span className="text-white/30 hover:text-white/60 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/roosters-logo-white.png"
                alt="Iserlohn Roosters"
                width={160}
                height={46}
                className="h-11 w-auto opacity-80"
              />
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-5 max-w-xs">
              Eishockey am Seilersee — Leidenschaft, Tradition und Kampfgeist seit 1959.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/30 hover:bg-accent hover:text-primary transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors inline-block py-1.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact strip */}
      <div className="border-t border-white/5">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/25">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <span>Iserlohn Roosters GmbH</span>
              <span className="hidden md:inline">·</span>
              <span>Seilerseestraße 15, 58636 Iserlohn</span>
              <span className="hidden md:inline">·</span>
              <span>info@iserlohn-roosters.de</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://tickets.iec.de/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white font-bold uppercase tracking-wider transition-colors">
                Tickets
              </a>
              <a href="https://shop.iec.de/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white font-bold uppercase tracking-wider transition-colors">
                Fanshop
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 safe-bottom">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px]">
            &copy; {new Date().getFullYear()} Iserlohn Roosters GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/impressum" className="text-white/20 hover:text-white/50 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-white/20 hover:text-white/50 transition-colors">Datenschutz</Link>
            <Link href="/kontakt" className="text-white/20 hover:text-white/50 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
