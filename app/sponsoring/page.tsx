import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsoring",
  description: "Sponsor der Iserlohn Roosters werden — VIP & Hospitality, Bandenwerbung, Trikotsponsoring und mehr.",
};

const PACKAGES = [
  { name: "Unterstützerclub", price: "ab 500€", features: ["Logo auf der Website", "Nennung bei Heimspielen", "2 Saisonkarten", "Netzwerk-Events"] },
  { name: "Business-Partner", price: "ab 2.500€", features: ["Bandenwerbung", "Logo auf der Website", "4 Saisonkarten", "VIP-Lounge Zugang", "Social Media Präsenz"] },
  { name: "Premium-Sponsor", price: "auf Anfrage", features: ["Trikot-/Helmwerbung", "LED-Bandenwerbung", "VIP-Loge (10 Personen)", "Exklusive Events", "Full-Service Betreuung", "Individuelle Pakete"] },
];

export default function SponsoringPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">Sponsoring</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Sponsoring</h1>
          <p className="text-white/50 mt-2">Werden Sie Partner der Iserlohn Roosters</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Warum Roosters-Sponsor?</h2>
            <p className="text-gray-500 text-lg">
              Über 4.500 Zuschauer pro Heimspiel, starke Social-Media-Reichweite und eine
              leidenschaftliche Community im Sauerland — die Roosters bieten eine einzigartige
              Plattform für Ihre Marke.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.name} className={`rounded-2xl p-6 ${i === 2 ? "bg-navy text-white ring-2 ring-gold" : "bg-white border border-gray-200"}`}>
                <h3 className={`font-bold text-lg uppercase mb-2 ${i === 2 ? "text-gold" : "text-navy"}`}>{pkg.name}</h3>
                <p className={`text-2xl font-black mb-6 ${i === 2 ? "text-white" : "text-navy"}`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${i === 2 ? "text-white/70" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${i === 2 ? "text-gold" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className={`btn w-full ${i === 2 ? "btn-gold" : "btn-primary"}`}>
                  Kontakt aufnehmen
                </Link>
              </div>
            ))}
          </div>

          {/* VIP */}
          <div id="vip" className="bg-gradient-to-br from-navy to-purple rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto scroll-mt-24">
            <h2 className="text-3xl font-black uppercase mb-4">VIP & Hospitality</h2>
            <p className="text-white/60 mb-6 max-w-xl">
              Erleben Sie DEL-Eishockey hautnah aus unserer VIP-Lounge. Exklusives
              Catering, beste Sicht und eine einzigartige Atmosphäre für Ihre
              Geschäftspartner und Kunden.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {["VIP-Loge für 10 Personen", "Premium Catering & Getränke", "Meet & Greet mit Spielern"].map((item) => (
                <div key={item} className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/kontakt" className="btn btn-gold">Anfrage stellen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
