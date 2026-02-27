import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs & Karriere",
  description: "Stellenangebote bei den Iserlohn Roosters — Karriere im professionellen Eishockey.",
};

const BENEFITS = [
  "Arbeiten im professionellen Sport-Umfeld",
  "Freikarten für alle Heimspiele",
  "Teamevents & Weihnachtsfeier",
  "Flexible Arbeitszeiten (je nach Position)",
  "Flache Hierarchien & kurze Entscheidungswege",
  "Engagiertes, leidenschaftliches Team",
];

export default function JobsPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Jobs & Karriere</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="section-title">Arbeiten bei den Roosters</h2>
          <p className="text-gray-500 text-lg mb-10 text-center">
            Die Iserlohn Roosters sind mehr als ein Eishockey-Club — wir sind ein Team hinter dem Team.
            Entdecke unsere aktuellen Stellenangebote.
          </p>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white mb-12">
            <h3 className="text-xl font-black uppercase mb-6">Was wir bieten</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span className="text-sm text-white/80">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open positions */}
          <h3 className="text-xl font-black uppercase text-primary mb-6">Aktuelle Stellenangebote</h3>
          <div className="bg-primary/5 rounded-2xl p-8 text-center mb-8">
            <p className="text-gray-500 mb-2">Derzeit sind keine offenen Stellen ausgeschrieben.</p>
            <p className="text-gray-400 text-sm">
              Initiativbewerbungen sind jederzeit willkommen — schreib uns einfach!
            </p>
          </div>

          <div className="text-center">
            <Link href="/kontakt" className="btn btn-primary">Initiativbewerbung senden</Link>
          </div>
        </div>
      </section>
    </>
  );
}
