import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geschäftsstelle",
  description: "Geschäftsstelle der Iserlohn Roosters — Adresse, Öffnungszeiten und Kontaktdaten.",
};

const OEFFNUNGSZEITEN = [
  { tag: "Montag – Freitag", zeit: "09:00 – 17:00 Uhr" },
  { tag: "Spieltag", zeit: "Ab 2 Stunden vor Spielbeginn" },
  { tag: "Samstag & Sonntag", zeit: "Geschlossen (außer Spieltag)" },
];

export default function GeschaeftsstellePage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Geschäftsstelle</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Adresse */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-black uppercase text-navy mb-4">Adresse</h2>
              <address className="text-gray-600 not-italic space-y-1 text-sm">
                <p className="font-bold text-navy">Iserlohn Roosters GmbH</p>
                <p>Eissporthalle am Seilersee</p>
                <p>Seilerseestraße 105</p>
                <p>58636 Iserlohn</p>
              </address>
              <div className="mt-6 space-y-2 text-sm">
                <p><span className="text-gray-400">Telefon:</span> <a href="tel:+4923719519510" className="text-navy font-medium hover:text-purple transition-colors">02371 / 951 95 10</a></p>
                <p><span className="text-gray-400">Fax:</span> <span className="text-gray-600">02371 / 951 95 19</span></p>
                <p><span className="text-gray-400">E-Mail:</span> <a href="mailto:info@iserlohn-roosters.de" className="text-navy font-medium hover:text-purple transition-colors">info@iserlohn-roosters.de</a></p>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-black uppercase text-navy mb-4">Öffnungszeiten</h2>
              <div className="space-y-4">
                {OEFFNUNGSZEITEN.map((o) => (
                  <div key={o.tag} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{o.tag}</span>
                    <span className="text-sm text-navy font-bold">{o.zeit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 font-bold uppercase text-sm mb-1">Karte</p>
              <p className="text-gray-300 text-xs">Eissporthalle am Seilersee, 58636 Iserlohn</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
