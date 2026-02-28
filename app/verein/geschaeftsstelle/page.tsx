import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Geschäftsstelle",
  description: "Geschäftsstelle der Iserlohn Roosters in der Balver Zinn Arena am Seilersee — Adresse, Öffnungszeiten, Anfahrt und Kontakt.",
};

const OEFFNUNGSZEITEN = [
  { tag: "Montag – Freitag", zeit: "09:00 – 17:00 Uhr" },
  { tag: "Spieltag", zeit: "Ab 2 Stunden vor Spielbeginn" },
  { tag: "Samstag & Sonntag", zeit: "Geschlossen (außer Spieltag)" },
];

export default function GeschaeftsstellePage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Geschäftsstelle</h1>
          <p className="text-white/50 mt-2">Balver Zinn Arena am Seilersee</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-black uppercase text-primary mb-4">Adresse</h2>
              <address className="text-gray-600 not-italic space-y-1 text-sm">
                <p className="font-bold text-primary">Iserlohn Roosters GmbH</p>
                <p>Balver Zinn Arena am Seilersee</p>
                <p>Seilerseestraße 105</p>
                <p>58636 Iserlohn</p>
              </address>
              <div className="mt-6 space-y-2 text-sm">
                <p><span className="text-gray-400">Telefon:</span> <a href="tel:+4923719519510" className="text-primary font-medium hover:text-accent transition-colors">02371 / 951 95 10</a></p>
                <p><span className="text-gray-400">Fax:</span> <span className="text-gray-600">02371 / 951 95 19</span></p>
                <p><span className="text-gray-400">E-Mail:</span> <a href="mailto:info@iserlohn-roosters.de" className="text-primary font-medium hover:text-accent transition-colors">info@iserlohn-roosters.de</a></p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-black uppercase text-primary mb-4">Öffnungszeiten</h2>
              <div className="space-y-4 mb-6">
                {OEFFNUNGSZEITEN.map((o) => (
                  <div key={o.tag} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{o.tag}</span>
                    <span className="text-sm text-primary font-bold">{o.zeit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 rounded-lg p-3">
                <p className="text-xs text-gray-600">An Spieltagen ist die Geschäftsstelle auch am Wochenende geöffnet — Ticketverkauf, Mitgliedschaft und allgemeine Anfragen.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-black uppercase text-primary mb-4">Anfahrt</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/5 rounded-xl p-4">
                <h3 className="font-bold text-xs uppercase text-primary mb-1">Mit dem Auto</h3>
                <p className="text-gray-500 text-sm">A46, Ausfahrt Iserlohn-Seilersee. Kostenlose Parkplätze direkt am Stadion.</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4">
                <h3 className="font-bold text-xs uppercase text-primary mb-1">Mit dem Bus</h3>
                <p className="text-gray-500 text-sm">Buslinie 1 bis Haltestelle &quot;Seilersee&quot;. Fußweg ca. 2 Minuten.</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4">
                <h3 className="font-bold text-xs uppercase text-primary mb-1">Mit der Bahn</h3>
                <p className="text-gray-500 text-sm">Iserlohn Hbf, dann Buslinie 1 Richtung Seilersee (ca. 10 Min.).</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d7.6944!3d51.3747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b939fdd1c5cd65%3A0x4c1eb4e5da1b31a4!2sEissporthalle%20am%20Seilersee!5e0!3m2!1sde!2sde!4v1709000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eissporthalle am Seilersee — Iserlohn Roosters"
            />
          </div>

          <div className="mt-8 bg-primary/5 rounded-2xl p-6">
            <h3 className="font-bold text-sm uppercase text-primary mb-3">Über die Arena</h3>
            <div className="grid sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Kapazität", value: "4.999" },
                { label: "Stehplätze", value: "3.297" },
                { label: "Sitzplätze", value: "1.166" },
                { label: "Eröffnet", value: "1971" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/kontakt" className="btn btn-primary">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
