import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs & Karriere",
  description: "Stellenangebote bei den Iserlohn Roosters — Karriere im professionellen Eishockey. Ehrenamt, Teilzeit und Vollzeit.",
};

const BENEFITS = [
  "Arbeiten im professionellen Sport-Umfeld",
  "Freikarten für alle Heimspiele",
  "Teamevents & Weihnachtsfeier",
  "Flexible Arbeitszeiten (je nach Position)",
  "Flache Hierarchien & kurze Entscheidungswege",
  "Engagiertes, leidenschaftliches Team",
];

const BEREICHE = [
  { title: "Geschäftsstelle", desc: "Verwaltung, Finanzen, Ticketing und allgemeine Organisation des Spielbetriebs." },
  { title: "Marketing & Kommunikation", desc: "Social Media, Content Creation, Pressearbeit und Markenführung." },
  { title: "Vertrieb & Sponsoring", desc: "Akquise und Betreuung von Sponsoren, VIP-Hospitality und Partnerschaften." },
  { title: "Spieltag-Organisation", desc: "Event-Management, Einlass, Sicherheit und Fan-Betreuung an Spieltagen." },
  { title: "Nachwuchs & Young Roosters", desc: "Jugendarbeit, Trainerteam und Organisation des Nachwuchsbereichs." },
  { title: "Technik & Arena", desc: "Eispflege, Haustechnik und technischer Betrieb der Balver Zinn Arena." },
];

export default function JobsPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Jobs & Karriere</h1>
          <p className="text-white/50 mt-2">Werde Teil des Teams hinter dem Team</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Arbeiten bei den Roosters</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Die Iserlohn Roosters sind mehr als ein Eishockey-Club. Rund 30 Mitarbeiter und über 100 ehrenamtliche Helfer sorgen dafür,
              dass jeder Spieltag ein Erlebnis wird.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white mb-10">
            <h3 className="text-xl font-black uppercase mb-6">Was wir bieten</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-white/80">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="section-title text-xl mb-6">Unsere Arbeitsbereiche</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {BEREICHE.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm uppercase text-primary mb-1">{b.title}</h4>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-black uppercase text-primary mb-6">Aktuelle Stellenangebote</h3>
          <div className="bg-primary/5 rounded-2xl p-8 text-center mb-8">
            <p className="text-gray-500 mb-2">Derzeit sind keine offenen Stellen ausgeschrieben.</p>
            <p className="text-gray-400 text-sm">Initiativbewerbungen sind jederzeit willkommen.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h4 className="font-bold uppercase text-primary text-sm mb-2">Initiativbewerbung</h4>
              <p className="text-gray-500 text-sm mb-4">Schick uns deinen Lebenslauf — wir melden uns, wenn eine passende Stelle frei wird.</p>
              <a href="mailto:bewerbung@iserlohn-roosters.de" className="btn btn-primary text-sm">Bewerbung senden</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h4 className="font-bold uppercase text-primary text-sm mb-2">Ehrenamt</h4>
              <p className="text-gray-500 text-sm mb-4">Du möchtest ehrenamtlich helfen? Wir suchen immer engagierte Fans!</p>
              <Link href="/fanzone/ehrenamt" className="btn btn-ghost text-sm">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
