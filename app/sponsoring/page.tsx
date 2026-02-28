import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsoring & VIP Hospitality",
  description: "Sponsor der Iserlohn Roosters werden — VIP & Hospitality, Bandenwerbung, Trikotsponsoring und exklusive Hospitality-Pakete in der Balver Zinn Arena.",
};

const PACKAGES = [
  { name: "Unterstützerclub", price: "ab 500 EUR", features: ["Logo auf der Website", "Nennung bei Heimspielen", "2 Saisonkarten", "Netzwerk-Events"] },
  { name: "Business-Partner", price: "ab 2.500 EUR", features: ["Bandenwerbung", "Logo auf der Website", "4 Saisonkarten", "VIP-Lounge Zugang", "Social Media Präsenz"] },
  { name: "Premium-Sponsor", price: "auf Anfrage", features: ["Trikot-/Helmwerbung", "LED-Bandenwerbung", "VIP-Loge (10 Personen)", "Exklusive Events", "Full-Service Betreuung", "Individuelle Pakete"] },
];

const VIP_PACKAGES = [
  {
    name: "Roosters Club",
    subtitle: "Premium-Lounge-Erlebnis",
    features: [
      "Zugang zu einer der drei exklusiven Lounges (Keuco-Lounge, Huckschlag-Lounge, Mercedes-Jürgens-Lounge)",
      "Buffet vor dem Spiel, in den Drittelpausen und nach Spielende",
      "Getränke: Krombacher Bier, Wein, Prosecco, Softdrinks, Kaffeespezialitäten",
      "VIP-Balkon oder Sitzplatz Nordtribüne (Block T)",
      "Netzwerken mit Business-Partnern",
    ],
    highlight: true,
  },
  {
    name: "Roosters Treff",
    subtitle: "Rustikale Hospitality",
    features: [
      "Zugang über den VIP-Eingang",
      "Buffet vor dem Spiel, in den Drittelpausen und nach Spielende",
      "Krombacher Bier, Wein, Prosecco, Softdrinks und Heißgetränke",
      "Sitzplatz Südtribüne (Block Z)",
      "Netzwerken in entspannter Atmosphäre",
    ],
    highlight: false,
  },
  {
    name: "Beutler Box",
    subtitle: "Privat-Suite für bis zu 12 Personen",
    features: [
      "Private Loge mit exklusivem Ambiente",
      "Umfangreiches Catering: Vorspeisen, Hauptgänge, Desserts",
      "Getränke nach Wahl inklusive",
      "Bester Blick aufs Eis aus der eigenen Loge",
      "Ideal für Geschäftskunden und besondere Anlässe",
    ],
    highlight: false,
  },
];

const VIP_INCLUDES = [
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Einlass 90 Min. vor Spielbeginn", desc: "Alle VIP-Bereiche öffnen 90 Minuten vor dem Faceoff" },
  { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", label: "Premium Catering", desc: "Buffet und Getränke vor, während und nach dem Spiel" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Business-Networking", desc: "Kontakte knüpfen mit Partnern aus der Region" },
  { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", label: "Beste Sicht aufs Eis", desc: "Exklusive Plätze mit perfektem Blickwinkel" },
  { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Exklusive Atmosphäre", desc: "Erleben Sie DEL-Eishockey in besonderem Ambiente" },
  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Events & Sonderveranstaltungen", desc: "VIP-Bereiche auch für Firmenevents ab 25 Personen" },
];

export default function SponsoringPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Sponsoring</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Sponsoring & VIP</h1>
          <p className="text-white/50 mt-2">Werden Sie Partner der Iserlohn Roosters</p>
        </div>
      </section>

      {/* Sponsoring Pakete */}
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
              <div key={pkg.name} className={`rounded-2xl p-6 ${i === 2 ? "bg-primary text-white ring-2 ring-gold" : "bg-white border border-gray-200"}`}>
                <h3 className={`font-bold text-lg uppercase mb-2 ${i === 2 ? "text-accent" : "text-primary"}`}>{pkg.name}</h3>
                <p className={`text-2xl font-black mb-6 ${i === 2 ? "text-white" : "text-primary"}`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${i === 2 ? "text-white/70" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${i === 2 ? "text-accent" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:sponsoring@iserlohn-roosters.de" className={`btn w-full text-center ${i === 2 ? "btn-accent" : "btn-primary"}`}>
                  Kontakt aufnehmen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP & Hospitality */}
      <section id="vip" className="bg-gray-50 py-16 scroll-mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Exklusiv</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-4">VIP & Hospitality</h2>
            <p className="text-gray-500 text-lg">
              Erleben Sie DEL-Eishockey in der Balver Zinn Arena am Seilersee aus einer
              exklusiven Perspektive. Fünf individuell gestaltete Hospitality-Bereiche
              verbinden spannenden Sport mit erstklassigem Business-Networking.
            </p>
          </div>

          {/* VIP Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
            {VIP_INCLUDES.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-sm uppercase text-primary mb-1">{item.label}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* VIP Packages */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-black uppercase text-primary mb-6 text-center">Unsere Hospitality-Pakete</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {VIP_PACKAGES.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-6 flex flex-col ${pkg.highlight ? "bg-primary text-white ring-2 ring-accent" : "bg-white border border-gray-200"}`}>
                  <h4 className={`font-bold text-lg uppercase mb-1 ${pkg.highlight ? "text-accent" : "text-primary"}`}>{pkg.name}</h4>
                  <p className={`text-sm mb-4 ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>{pkg.subtitle}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${pkg.highlight ? "text-white/80" : "text-gray-600"}`}>
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlight ? "text-accent" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className={`text-2xl font-black mb-4 ${pkg.highlight ? "text-white" : "text-primary"}`}>auf Anfrage</p>
                  <a href="mailto:tickets@iec.de?subject=VIP-Anfrage%20{pkg.name}" className={`btn w-full text-center ${pkg.highlight ? "btn-accent" : "btn-primary"}`}>
                    Anfrage stellen
                  </a>
                </div>
              ))}
            </div>

            {/* Lounges Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-lg uppercase text-primary mb-4">Die drei exklusiven Lounges</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Keuco-Lounge", desc: "Elegantes Ambiente mit direktem Blick auf die Eisfläche. Modernes Design und erstklassiger Service." },
                  { name: "Huckschlag-Lounge", desc: "Großzügige Lounge mit Business-Atmosphäre. Ideal für Firmenkunden und Geschäftspartner." },
                  { name: "Mercedes-Jürgens-Lounge", desc: "Premium-Bereich mit exklusivem Charakter. Perfekt für besondere Anlässe und Kundenevents." },
                ].map((l) => (
                  <div key={l.name} className="bg-primary/5 rounded-xl p-4">
                    <h5 className="font-bold text-sm text-primary mb-1">{l.name}</h5>
                    <p className="text-gray-500 text-xs">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events CTA */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-black uppercase mb-3">Firmenevents in der Arena</h3>
              <p className="text-white/60 max-w-lg mx-auto mb-6">
                Unsere VIP-Bereiche stehen auch für Firmenevents, Kundenveranstaltungen und
                Teambuildings zur Verfügung — ab 25 Personen, auch an spielfreien Tagen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:tickets@iec.de?subject=VIP-Anfrage" className="btn btn-accent">VIP-Anfrage senden</a>
                <a href="tel:+4923719519510" className="btn btn-outline">02371 / 951 95 10</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="section">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title">Unsere Partner</h2>
          <p className="text-gray-500 mb-8">Über 50 Unternehmen aus der Region vertrauen auf die Roosters als Partner.</p>
          <Link href="/sponsoring/partner" className="btn btn-primary">Alle Partner ansehen</Link>
        </div>
      </section>
    </>
  );
}
