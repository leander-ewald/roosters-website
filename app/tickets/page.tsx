import type { Metadata } from "next";
import Link from "next/link";
import { SCHEDULE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tickets",
  description: "Tickets für die Iserlohn Roosters — Tageskarten, Dauerkarten und VIP-Pakete für alle Heimspiele in der Balver Zinn Arena.",
};

const TICKET_TYPES = [
  {
    name: "Tageskarte Stehplatz",
    price: "ab 16€",
    features: ["Freie Platzwahl Stehbereich", "Ermäßigung für Schüler, Studenten & Rentner", "Kinder bis 6 Jahre frei"],
  },
  {
    name: "Tageskarte Sitzplatz",
    price: "ab 25€",
    features: ["Reservierter Sitzplatz", "Verschiedene Kategorien verfügbar", "Ermäßigung für Schüler, Studenten & Rentner"],
  },
  {
    name: "Dauerkarte",
    price: "ab 350€",
    features: ["Alle regulären Heimspiele", "Bis zu 30% Ersparnis", "Garantierter Stammplatz", "Vorkaufsrecht für Playoffs"],
  },
  {
    name: "VIP-Loge",
    price: "auf Anfrage",
    features: ["10 Personen pro Loge", "Premium Catering inkl.", "Exklusiver Lounge-Zugang", "Parkplatz direkt an der Halle"],
    highlight: true,
  },
];

const UPCOMING_HOME = SCHEDULE.filter(
  (g) => g.isHome && g.homeScore === undefined
);

export default function TicketsPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Ticketshop</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Tickets</h1>
          <p className="text-white/50 mt-2">Sichere dir jetzt dein Ticket für das nächste Heimspiel</p>
        </div>
      </section>

      {/* Upcoming Home Games */}
      {UPCOMING_HOME.length > 0 && (
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container py-6">
            <h2 className="text-sm font-black uppercase text-primary mb-4">Nächste Heimspiele</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {UPCOMING_HOME.map((game) => (
                <a
                  key={game.date}
                  href="https://tickets.iec.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-accent transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary">{game.date}</span>
                    <span className="text-[10px] text-gray-400">{game.time} Uhr</span>
                  </div>
                  <p className="font-bold text-sm text-primary mb-1">vs {game.away}</p>
                  <p className="text-xs text-gray-400">{game.venue}</p>
                  <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                    Tickets sichern
                    <svg className="w-3 h-3 inline ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          {/* Ticket types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {TICKET_TYPES.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  t.highlight
                    ? "bg-primary text-white ring-2 ring-gold"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h3 className={`font-bold text-sm uppercase mb-2 ${t.highlight ? "text-accent" : "text-primary"}`}>
                  {t.name}
                </h3>
                <p className={`text-2xl font-black mb-4 ${t.highlight ? "text-white" : "text-primary"}`}>
                  {t.price}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${t.highlight ? "text-white/70" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlight ? "text-accent" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://tickets.iec.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full text-center ${t.highlight ? "btn-accent" : "btn-primary"}`}
                >
                  Tickets kaufen
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Detail */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-title text-center mb-8">Preisübersicht</h2>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white text-xs uppercase tracking-wider">
                    <th className="text-left py-3 px-4 font-bold">Kategorie</th>
                    <th className="text-center py-3 px-4 font-bold">Erwachsene</th>
                    <th className="text-center py-3 px-4 font-bold">Ermäßigt</th>
                    <th className="text-center py-3 px-4 font-bold">Kinder (7-14)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Stehplatz", full: "16,00 €", reduced: "12,00 €", kids: "8,00 €" },
                    { cat: "Sitzplatz Kategorie 3", full: "25,00 €", reduced: "20,00 €", kids: "12,00 €" },
                    { cat: "Sitzplatz Kategorie 2", full: "30,00 €", reduced: "25,00 €", kids: "15,00 €" },
                    { cat: "Sitzplatz Kategorie 1", full: "35,00 €", reduced: "30,00 €", kids: "18,00 €" },
                  ].map((row) => (
                    <tr key={row.cat} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-primary">{row.cat}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.full}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.reduced}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.kids}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Ermäßigung für Schüler, Studenten, Rentner und Schwerbehinderte (mit Ausweis). Kinder bis 6 Jahre frei.
            </p>
          </div>

          {/* Info boxes */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Abendkasse</h4>
              <p className="text-gray-500 text-xs">Öffnet 90 Min. vor Spielbeginn an der Balver Zinn Arena am Seilersee</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Online-Vorverkauf</h4>
              <p className="text-gray-500 text-xs">Tickets bequem über tickets.iec.de bestellen — E-Ticket oder Print@Home</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <svg className="w-8 h-8 text-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Gruppenangebote</h4>
              <p className="text-gray-500 text-xs">Ab 10 Personen Sonderkonditionen — ideal für Vereine, Firmen und Schulklassen</p>
            </div>
          </div>

          {/* Dauerkarten CTA */}
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-center text-white max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-black uppercase mb-3">Dauerkarten 2026/27</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-6">
              Der Rechnungsversand für die Dauerkarten der Saison 2026/27 hat begonnen.
              Frühbucher-Preis bis 31.03.2026 — danach regulärer Preis.
            </p>
            <a href="mailto:tickets@iserlohn-roosters.de?subject=Dauerkarten-Anfrage" className="btn btn-accent">Infos anfordern</a>
          </div>

          {/* Arena Info */}
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-6">
            <h3 className="font-bold text-sm uppercase text-primary mb-3">Balver Zinn Arena am Seilersee</h3>
            <div className="grid sm:grid-cols-4 gap-4 text-center mb-4">
              {[
                { label: "Kapazität", value: "4.999" },
                { label: "Stehplätze", value: "3.297" },
                { label: "Sitzplätze", value: "1.166" },
                { label: "VIP-Plätze", value: "536" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm text-center">
              Seilerseestraße 105, 58636 Iserlohn — Anfahrt: A46, Ausfahrt Iserlohn-Seilersee. Kostenlose Parkplätze am Stadion.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">Fragen zu Tickets?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:tickets@iserlohn-roosters.de" className="btn btn-primary">tickets@iserlohn-roosters.de</a>
              <Link href="/kontakt" className="btn btn-secondary">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
