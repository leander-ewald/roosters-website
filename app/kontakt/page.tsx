import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu den Iserlohn Roosters — Geschäftsstelle, Tickets, Presse und Sponsoring. Alle Ansprechpartner auf einen Blick.",
};

const ABTEILUNGEN = [
  { name: "Tickets & Dauerkarten", email: "tickets@iserlohn-roosters.de", desc: "Fragen zu Eintrittskarten, Dauerkarten und Gruppenbestellungen" },
  { name: "Presse & Medien", email: "presse@iserlohn-roosters.de", desc: "Akkreditierung, Presseanfragen und Interviewwünsche" },
  { name: "Sponsoring & VIP", email: "sponsoring@iserlohn-roosters.de", desc: "Sponsoring-Pakete, VIP-Hospitality und Werbemöglichkeiten" },
  { name: "Fanbeauftragte", email: "fans@iserlohn-roosters.de", desc: "Fanclubs, Ehrenamt und Community-Themen" },
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Kontakt</h1>
          <p className="text-white/50 mt-2">Wir freuen uns auf deine Nachricht</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="text-xl font-black uppercase text-primary mb-6">Nachricht senden</h2>
              <form className="space-y-4" action="mailto:info@iserlohn-roosters.de" method="POST" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" placeholder="max@beispiel.de" />
                  </div>
                </div>
                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                  <select id="betreff" name="betreff" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm">
                    <option value="">Bitte wählen...</option>
                    <option value="Tickets">Tickets & Dauerkarten</option>
                    <option value="Mitgliedschaft">Mitgliedschaft</option>
                    <option value="Sponsoring">Sponsoring & VIP</option>
                    <option value="Presse">Presse & Medien</option>
                    <option value="Fanclub">Fanclub & Ehrenamt</option>
                    <option value="Kids Club">Kids Club</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                  <textarea id="nachricht" name="nachricht" required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none" placeholder="Deine Nachricht..." />
                </div>
                <button type="submit" className="btn btn-primary w-full py-4">Nachricht senden</button>
                <p className="text-xs text-gray-400 text-center">
                  Mit dem Absenden stimmst du unserer <Link href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</Link> zu.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg uppercase text-primary mb-4">Geschäftsstelle</h3>
                <address className="not-italic text-sm space-y-1 text-gray-600 mb-5">
                  <p className="font-bold text-primary">Iserlohn Roosters GmbH</p>
                  <p>Seilerseestraße 105</p>
                  <p>58636 Iserlohn</p>
                </address>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Telefon</span>
                    <a href="tel:+4923719519510" className="text-primary font-medium hover:text-accent transition-colors">02371 / 951 95 10</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fax</span>
                    <span className="text-gray-600">02371 / 951 95 19</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">E-Mail</span>
                    <a href="mailto:info@iserlohn-roosters.de" className="text-primary font-medium hover:text-accent transition-colors">info@iserlohn-roosters.de</a>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-bold text-sm uppercase text-primary mb-2">Öffnungszeiten</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Mo – Fr: 09:00 – 17:00 Uhr</p>
                  <p>Spieltag: Ab 2h vor Spielbeginn</p>
                  <p>Sa & So: Geschlossen (außer Spieltag)</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-bold text-sm uppercase text-primary mb-2">Anfahrt</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Auto:</strong> A46, Ausfahrt Iserlohn-Seilersee</p>
                  <p><strong>ÖPNV:</strong> Buslinie 1 bis Haltestelle Seilersee</p>
                  <p><strong>Parken:</strong> Kostenlose Parkplätze am Stadion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container max-w-4xl">
          <h2 className="section-title text-center mb-8">Direktkontakte</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ABTEILUNGEN.map((a) => (
              <div key={a.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-sm uppercase text-primary mb-1">{a.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{a.desc}</p>
                <a href={`mailto:${a.email}`} className="text-accent text-sm font-bold hover:text-primary transition-colors">{a.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
