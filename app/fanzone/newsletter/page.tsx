import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Roosters Newsletter abonnieren — News, Spielberichte, Ticket-Angebote und exklusive Aktionen direkt ins Postfach.",
};

const INHALTE = [
  "Spielberichte & Ergebnisse nach jedem Spieltag",
  "Ticket-Vorverkauf & Sonderangebote",
  "Exklusive Interviews mit Spielern und Trainern",
  "Kids Club & Fan-Events",
  "Merchandise-Neuheiten & Aktionen",
  "Saisonvorbereitungs-Updates",
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Newsletter</h1>
          <p className="text-white/50 mt-2">Immer auf dem Laufenden — direkt in dein Postfach</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title text-xl">Das erwartet dich</h2>
              <p className="text-gray-500 mb-6">
                Unser Newsletter erscheint regelmäßig während der Saison und hält dich über alles Wichtige rund um die Iserlohn Roosters auf dem Laufenden.
              </p>
              <ul className="space-y-3">
                {INHALTE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-primary mb-4">Jetzt anmelden</h3>
              <form className="space-y-4" action="mailto:newsletter@iserlohn-roosters.de" method="POST" encType="text/plain">
                <div>
                  <label htmlFor="nl-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input id="nl-name" name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="Max Mustermann" />
                </div>
                <div>
                  <label htmlFor="nl-email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail-Adresse *</label>
                  <input id="nl-email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="max@beispiel.de" />
                </div>
                <button type="submit" className="btn btn-primary w-full py-3">Newsletter abonnieren</button>
                <p className="text-xs text-gray-400 text-center">
                  Mit der Anmeldung stimmst du unserer <Link href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</Link> zu.
                  Du kannst dich jederzeit abmelden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
