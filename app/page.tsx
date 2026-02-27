"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { NEWS as ALL_NEWS } from "@/lib/data";

/* ── Data (echte Inhalte von iserlohn-roosters.de, Stand 27.02.2026) ── */
const NEXT_GAME = {
  home: { name: "Iserlohn Roosters", short: "IR" },
  away: { name: "Augsburger Panther", short: "AP" },
  date: "So. 01.03.2026",
  time: "14:00 Uhr",
  venue: "Eissporthalle am Seilersee",
  ticketUrl: "https://tickets.iec.de/",
  info: "Fast ausverkauft — nur noch 600 Tickets bis zum Rekord!",
};

const NEWS = ALL_NEWS.slice(0, 4);

const SPONSORS = [
  "Raab Karcher",
  "Märkische Bank",
  "Krombacher",
  "Böhm Kabel",
  "Kirchhoff Gruppe",
  "Stadtwerke Iserlohn",
  "Huckschlag Transporte",
  "Platzmann Federn",
  "J.D. von Hagen AG",
];

const QUICK_LINKS = [
  { label: "Ticketshop", href: "https://tickets.iec.de/", icon: "🎫", external: true },
  { label: "Fanshop", href: "https://shop.iec.de/", icon: "🛍️", external: true },
  { label: "Spielplan", href: "/spielplan", icon: "📅", external: false },
  { label: "Tabelle", href: "/tabelle", icon: "📊", external: false },
  { label: "Kader", href: "/team/kader", icon: "👥", external: false },
  { label: "Newsletter", href: "/fanzone/newsletter", icon: "📧", external: false },
];

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple number counter animation
    const counters = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0");
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current.toLocaleString("de-DE");
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue/20 rounded-full blur-[100px]" />

        <div className="relative z-10 container py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">
                DEL Saison 2025/26
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-white mb-6">
              Iserlohn
              <br />
              <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                Roosters
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Eishockey aus dem Herzen des Sauerlands. Leidenschaft, Tradition
              und Kampfgeist &mdash; seit 1959 am Seilersee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tickets.iec.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                Tickets sichern
              </a>
              <a
                href="https://shop.iec.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-base px-8 py-4"
              >
                Fanshop
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══ NEXT GAME ═══ */}
      <section className="relative -mt-16 z-20 pb-8">
        <div className="container">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple">
                Nächstes Spiel
              </p>
              <span className="text-xs text-gray-400 font-medium">
                {NEXT_GAME.venue}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Home Team */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-navy rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                  <span className="text-gold font-black text-xl md:text-3xl">
                    {NEXT_GAME.home.short}
                  </span>
                </div>
                <p className="font-bold text-sm md:text-base uppercase tracking-wide">
                  {NEXT_GAME.home.name}
                </p>
              </div>

              {/* Match Info */}
              <div className="text-center px-4 md:px-8">
                <p className="text-sm text-gray-400 font-medium mb-1">{NEXT_GAME.date}</p>
                <p className="text-3xl md:text-5xl font-black text-navy leading-none">VS</p>
                <p className="text-sm font-bold text-navy mt-1">{NEXT_GAME.time}</p>
              </div>

              {/* Away Team */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-gray-600 font-black text-xl md:text-3xl">
                    {NEXT_GAME.away.short}
                  </span>
                </div>
                <p className="font-bold text-sm md:text-base uppercase tracking-wide">
                  {NEXT_GAME.away.name}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={NEXT_GAME.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Tickets kaufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWS ═══ */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">
                Aktuelles
              </p>
              <h2 className="section-title mb-0">Neuigkeiten</h2>
            </div>
            <Link
              href="/news"
              className="hidden md:inline-flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-wider hover:text-purple transition-colors"
            >
              Alle News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS.map((article, i) => (
              <Link href={`/news/${article.id}`} key={article.id} className={`group ${i === 0 ? "md:col-span-2" : ""}`}>
                <article className="card h-full flex flex-col">
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-navy to-purple" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs text-gray-400 mb-2">{article.date}</span>
                    <h3 className="font-bold text-base uppercase leading-tight mb-2 group-hover:text-purple transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mt-auto">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/news" className="btn btn-secondary">
              Alle News
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ QUICK LINKS ═══ */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {QUICK_LINKS.map((link) => {
              const Tag = link.external ? "a" : Link;
              const extraProps = link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={link.label}
                  href={link.href}
                  {...extraProps}
                  className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <span className="text-3xl block mb-2">{link.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-navy group-hover:text-purple transition-colors">
                    {link.label}
                  </span>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS / IMPACT ═══ */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 1959, label: "Gegründet", suffix: "" },
              { value: 52, label: "DEL Spielzeiten", suffix: "" },
              { value: 4500, label: "Fans pro Heimspiel", suffix: "+" },
              { value: 27, label: "Spieler im Kader", suffix: "" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-5xl font-black text-gold leading-none mb-2">
                  <span data-count={stat.value}>0</span>
                  {stat.suffix}
                </p>
                <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPONSORS MARQUEE ═══ */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mb-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
            Unsere Hauptsponsoren
          </p>
        </div>
        <div className="relative">
          <div ref={marqueeRef} className="flex animate-marquee whitespace-nowrap">
            {[...SPONSORS, ...SPONSORS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center justify-center px-10 py-4 text-gray-400 hover:text-navy font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer mx-2"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ═══ MEMBERSHIP CTA ═══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue to-purple" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight">
            Werde Teil der
            <br />
            <span className="text-gold">Roosters-Familie</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">
            Sichere dir deine Dauerkarte, werde Mitglied oder unterstütze uns
            als Sponsor. Gemeinsam sind wir stärker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/verein/mitgliedschaft" className="btn btn-gold text-base px-8 py-4">
              Mitglied werden
            </Link>
            <Link href="/sponsoring" className="btn btn-outline text-base px-8 py-4">
              Sponsor werden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
