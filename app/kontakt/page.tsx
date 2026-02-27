import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu den Iserlohn Roosters — Schreib uns eine Nachricht oder ruf an.",
};

const KONTAKT_INFO = [
  { label: "Telefon", value: "02371 / 951 95 10", href: "tel:+4923719519510" },
  { label: "Fax", value: "02371 / 951 95 19", href: null },
  { label: "E-Mail", value: "info@iserlohn-roosters.de", href: "mailto:info@iserlohn-roosters.de" },
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
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
              <h2 className="text-xl font-black uppercase text-navy mb-6">Nachricht senden</h2>
              <form className="space-y-4" action="#">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input id="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-sm" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                    <input id="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-sm" placeholder="max@beispiel.de" />
                  </div>
                </div>
                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                  <input id="betreff" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-sm" placeholder="Worum geht es?" />
                </div>
                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                  <textarea id="nachricht" required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-sm resize-none" placeholder="Deine Nachricht..." />
                </div>
                <button type="submit" className="btn btn-primary w-full py-4">Nachricht senden</button>
                <p className="text-xs text-gray-400 text-center">
                  Mit dem Absenden stimmst du unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg uppercase text-navy mb-4">Kontaktdaten</h3>
                <address className="not-italic text-sm space-y-1 text-gray-600 mb-6">
                  <p className="font-bold text-navy">Iserlohn Roosters GmbH</p>
                  <p>Seilerseestraße 105</p>
                  <p>58636 Iserlohn</p>
                </address>
                <div className="space-y-3">
                  {KONTAKT_INFO.map((k) => (
                    <div key={k.label} className="flex justify-between text-sm">
                      <span className="text-gray-400">{k.label}</span>
                      {k.href ? (
                        <a href={k.href} className="text-navy font-medium hover:text-purple transition-colors">{k.value}</a>
                      ) : (
                        <span className="text-gray-600">{k.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy/5 rounded-2xl p-6">
                <h3 className="font-bold text-sm uppercase text-navy mb-2">Öffnungszeiten</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Mo – Fr: 09:00 – 17:00 Uhr</p>
                  <p>Spieltag: Ab 2h vor Spielbeginn</p>
                  <p>Sa & So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
