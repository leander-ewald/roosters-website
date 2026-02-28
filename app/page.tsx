"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NEWS as ALL_NEWS, SCHEDULE, DEL_TABLE } from "@/lib/data";

/* ── static data ── */
const LAST_GAME = (() => {
  const past = SCHEDULE.filter((g) => g.homeScore !== undefined).reverse();
  return past[0] || null;
})();

const NEXT_GAME = (() => {
  const future = SCHEDULE.filter((g) => g.homeScore === undefined);
  return future[0] || null;
})();

const COMING_GAME = (() => {
  const future = SCHEDULE.filter((g) => g.homeScore === undefined);
  return future[1] || null;
})();

const NEWS = ALL_NEWS.slice(0, 5);
const FEATURED = NEWS[0];
const SIDE_NEWS = NEWS.slice(1, 5);

const ROOSTERS_STANDING = DEL_TABLE.find((t) => t.team.includes("Iserlohn"));

const SPONSORS = [
  { name: "Raab Karcher", logo: "/sponsors/raab-karcher.png" },
  { name: "Märkische Bank", logo: "/sponsors/maerkische-bank.png" },
  { name: "Krombacher", logo: "/sponsors/krombacher.png" },
  { name: "Böhm Kabel", logo: "/sponsors/boehm-kabel.png" },
  { name: "Kirchhoff Gruppe", logo: "/sponsors/kirchhoff.png" },
  { name: "Stadtwerke Iserlohn", logo: "/sponsors/stadtwerke-iserlohn.png" },
  { name: "Huckschlag Transporte", logo: "/sponsors/huckschlag.png" },
  { name: "Platzmann Federn", logo: "/sponsors/platzmann-federn.png" },
  { name: "J.D. von Hagen AG", logo: "/sponsors/jd-von-hagen.png" },
];

export default function Home() {
  useEffect(() => {
    const counters = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0");
            let current = 0;
            const inc = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += inc;
              if (current >= target) { current = target; clearInterval(timer); }
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
      <section className="relative bg-primary overflow-hidden">
        <Image
          src="/images/hero-hockey.webp"
          alt="Eishockey Action"
          fill
          className="object-cover opacity-60"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary" />

        <div className="relative z-10 container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16 md:py-24 lg:py-28">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <Image
                src="/roosters-logo-white.png"
                alt="Iserlohn Roosters"
                width={300}
                height={84}
                className="h-16 md:h-20 lg:h-24 w-auto mb-6 mx-auto lg:mx-0 drop-shadow-[0_0_25px_rgba(74,143,231,0.4)]"
                priority
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-5">
                Eishockey<br />
                <span className="text-accent">am Seilersee</span>
              </h1>
              <p className="text-white/50 text-base md:text-lg max-w-md mb-8 mx-auto lg:mx-0 leading-relaxed">
                Leidenschaft, Tradition und Kampfgeist — seit 1959. Willkommen bei den Iserlohn Roosters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="https://tickets.iec.de/" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-8 py-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                  Tickets sichern
                </a>
                <Link href="/spielplan" className="btn btn-outline px-8 py-4">Spielplan ansehen</Link>
              </div>
            </div>

            {/* Right: Next Game Card */}
            {NEXT_GAME && (
              <div className="w-full max-w-sm lg:max-w-xs flex-shrink-0">
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg overflow-hidden">
                  <div className="bg-cta px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Nächstes Heimspiel</span>
                    <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-white/40 text-xs font-medium mb-3">{NEXT_GAME.date} — {NEXT_GAME.time}</p>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Image src="/roosters-logo-white.png" alt="IR" width={36} height={36} className="h-8 w-auto" />
                        </div>
                        <p className="text-white text-[11px] font-bold uppercase">{NEXT_GAME.home}</p>
                      </div>
                      <span className="text-white/30 text-2xl font-black">VS</span>
                      <div className="flex-1">
                        <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white/50 font-black text-lg">{NEXT_GAME.away.substring(0, 3).toUpperCase()}</span>
                        </div>
                        <p className="text-white text-[11px] font-bold uppercase">{NEXT_GAME.away}</p>
                      </div>
                    </div>
                    <p className="text-white/30 text-[11px] mb-4">{NEXT_GAME.venue}</p>
                    <a href="https://tickets.iec.de/" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full text-xs py-2.5">
                      Tickets kaufen
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ GAME CENTRE — Belfast-style 3-game bar ═══ */}
      <section className="bg-dark">
        <div className="container">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Letztes Spiel", game: LAST_GAME, type: "result" as const },
              { label: "Nächstes Spiel", game: NEXT_GAME, type: "upcoming" as const },
              { label: "Demnächst", game: COMING_GAME, type: "upcoming" as const },
            ].map(({ label, game, type }) => (
              <div key={label} className="py-5 px-4 md:px-6 text-center">
                <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-3">{label}</p>
                {game ? (
                  <>
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-white text-xs font-bold uppercase truncate max-w-[100px]">{game.home}</span>
                      <span className={`text-lg font-black min-w-[60px] ${type === "result" ? "text-white" : "text-white/30"}`}>
                        {type === "result" && game.homeScore !== undefined ? `${game.homeScore}:${game.awayScore}` : "VS"}
                      </span>
                      <span className="text-white text-xs font-bold uppercase truncate max-w-[100px]">{game.away}</span>
                    </div>
                    <p className="text-white/30 text-[11px]">{game.date}, {game.time}</p>
                    <div className="mt-3">
                      {type === "result" ? (
                        <Link href="/spielplan" className="text-accent text-[11px] font-semibold uppercase tracking-wider hover:text-accent-light transition-colors">Spielbericht</Link>
                      ) : (
                        <a href="https://tickets.iec.de/" target="_blank" rel="noopener noreferrer" className="text-cta text-[11px] font-semibold uppercase tracking-wider hover:text-white transition-colors">Tickets</a>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-white/20 text-sm">Kein Spiel geplant</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWS — Featured + sidebar ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">Neuigkeiten</h2>
            <Link href="/news" className="btn btn-ghost text-xs">
              Alle News
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured article */}
            {FEATURED && (
              <Link href={`/news/${FEATURED.id}`} className="lg:col-span-3 group">
                <div className="relative rounded-lg overflow-hidden aspect-[16/9] bg-gradient-to-br from-primary to-primary-light">
                  <Image src="/images/game-action.webp" alt="Spielszene" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block bg-cta text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3">{FEATURED.category}</span>
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight mb-2 group-hover:text-accent transition-colors">{FEATURED.title}</h3>
                    <p className="text-white/50 text-sm line-clamp-2">{FEATURED.excerpt}</p>
                    <p className="text-white/30 text-xs mt-3">{FEATURED.date}</p>
                  </div>
                </div>
              </Link>
            )}

            {/* Side articles */}
            <div className="lg:col-span-2 flex flex-col gap-1">
              {SIDE_NEWS.map((article, idx) => (
                <Link key={article.id} href={`/news/${article.id}`} className="group flex gap-4 p-3 rounded hover:bg-gray-50 transition-colors">
                  <div className="w-20 h-14 flex-shrink-0 rounded overflow-hidden relative">
                    <Image src={idx % 2 === 0 ? "/images/hockey-player.webp" : "/images/arena-rink.webp"} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-accent transition-colors">{article.title}</h4>
                    <p className="text-gray-400 text-[11px] mt-1">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUICK LINKS — 3 promo boxes like Belfast ═══ */}
      <section className="bg-off-white py-4">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Spielplan & Ergebnisse", desc: "Alle Spiele der DEL Saison 2025/26", href: "/spielplan", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { title: "Kader & Team", desc: "Spieler, Trainer und Organisation", href: "/team/kader", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Mitglied werden", desc: "Werde Teil der Roosters-Familie", href: "/verein/mitgliedschaft", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group bg-primary rounded-lg p-6 flex items-start gap-4 hover:bg-primary-light transition-colors">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TABLE SNAPSHOT + STATS ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Mini table */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0 text-xl">DEL Tabelle</h2>
                <Link href="/tabelle" className="text-accent text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors">Vollständig</Link>
              </div>
              <div className="border border-gray-100 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                      <th className="text-left py-2.5 px-3 font-semibold">#</th>
                      <th className="text-left py-2.5 px-3 font-semibold">Team</th>
                      <th className="text-center py-2.5 px-3 font-semibold">Sp</th>
                      <th className="text-center py-2.5 px-3 font-semibold">Pkt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEL_TABLE.slice(0, 8).map((team) => {
                      const isRoosters = team.team.includes("Iserlohn");
                      return (
                        <tr key={team.rank} className={`border-t border-gray-50 ${isRoosters ? "bg-accent/5 font-bold" : ""}`}>
                          <td className="py-2.5 px-3 text-gray-400 text-xs">{team.rank}</td>
                          <td className={`py-2.5 px-3 ${isRoosters ? "text-primary" : ""}`}>{team.team}</td>
                          <td className="py-2.5 px-3 text-center text-gray-500">{team.gp}</td>
                          <td className="py-2.5 px-3 text-center font-bold">{team.pts}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h2 className="section-title mb-6 text-xl">Saison 25/26 in Zahlen</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: ROOSTERS_STANDING?.w || 12, label: "Siege", suffix: "" },
                  { value: ROOSTERS_STANDING?.gf || 110, label: "Erzielte Tore", suffix: "" },
                  { value: ROOSTERS_STANDING?.pts || 49, label: "Punkte", suffix: "" },
                  { value: ROOSTERS_STANDING?.gp || 45, label: "Spiele", suffix: "" },
                  { value: ROOSTERS_STANDING?.rank || 12, label: "Tabellenplatz", suffix: "." },
                  { value: 4500, label: "Fans / Heimspiel", suffix: "+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-primary rounded-lg p-5 text-center">
                    <p className="text-2xl md:text-3xl font-black text-accent leading-none mb-1">
                      <span data-count={stat.value}>0</span>{stat.suffix}
                    </p>
                    <p className="text-white/40 text-[11px] font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPONSORS ═══ */}
      <section className="py-10 bg-off-white border-t border-gray-100">
        <div className="container">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Hauptsponsoren</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-center h-16 px-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <Image src={sponsor.logo} alt={sponsor.name} width={140} height={42} className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative bg-primary py-16 md:py-20 overflow-hidden">
        <Image src="/images/hockey-news.webp" alt="Eishockey Atmosphäre" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
        <div className="relative z-10 container text-center">
          <Image src="/roosters-logo-white.png" alt="Roosters" width={160} height={45} className="h-12 w-auto mx-auto mb-5 drop-shadow-[0_0_20px_rgba(74,143,231,0.3)]" />
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-3 leading-tight">
            Werde Teil der <span className="text-accent">Roosters-Familie</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-8 text-sm">
            Sichere dir deine Dauerkarte, werde Mitglied oder unterstütze uns als Sponsor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/verein/mitgliedschaft" className="btn btn-accent px-8 py-3.5">Mitglied werden</Link>
            <Link href="/sponsoring" className="btn btn-outline px-8 py-3.5">Sponsor werden</Link>
          </div>
        </div>
      </section>
    </>
  );
}
