import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tickets",
  description: "Tickets für die Iserlohn Roosters — Tageskarten, Dauerkarten und VIP-Pakete für alle Heimspiele.",
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
                  href="https://www.etix.com/ticket/v/26367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full text-center ${t.highlight ? "btn-accent" : "btn-primary"}`}
                >
                  Tickets kaufen
                </a>
              </div>
            ))}
          </div>

          {/* Info boxes */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Abendkasse</h4>
              <p className="text-gray-500 text-xs">Öffnet 90 Min. vor Spielbeginn</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Vorverkauf</h4>
              <p className="text-gray-500 text-xs">Online und an der Geschäftsstelle</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <h4 className="font-bold uppercase text-primary text-sm mb-1">Gruppenangebote</h4>
              <p className="text-gray-500 text-xs">Ab 10 Personen Sonderkonditionen</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Fragen zu Tickets? Kontaktiere uns!</p>
            <Link href="/kontakt" className="btn btn-secondary">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
