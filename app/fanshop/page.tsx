import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanshop",
  description: "Offizieller Fanshop der Iserlohn Roosters — Trikots, Schals, Mützen und Fanartikel.",
};

const CATEGORIES = [
  { name: "Trikots", desc: "Heim- und Auswärtstrikots der aktuellen Saison 2025/26", icon: "👕" },
  { name: "Schals & Mützen", desc: "Zeig Farbe mit unseren offiziellen Fan-Schals und Mützen", icon: "🧣" },
  { name: "T-Shirts & Hoodies", desc: "Casual Wear mit Roosters-Logo für den Alltag", icon: "👔" },
  { name: "Accessoires", desc: "Tassen, Aufkleber, Schlüsselanhänger und mehr", icon: "🏒" },
  { name: "Kids-Kollektion", desc: "Fanartikel speziell für die kleinsten Roosters-Fans", icon: "🧒" },
  { name: "Saisonartikel", desc: "Limitierte Sondereditions und Saisonkollektion", icon: "⭐" },
];

export default function FanshopPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">Shop</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Fanshop</h1>
          <p className="text-white/50 mt-2">Offizielle Fanartikel der Iserlohn Roosters</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Unsere Kategorien</h2>
            <p className="text-gray-500 text-lg">
              Zeig deine Leidenschaft — mit offiziellen Fanartikeln der Iserlohn Roosters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                <span className="text-4xl mb-3 block">{c.icon}</span>
                <h3 className="font-bold uppercase text-navy mb-2">{c.name}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA to external shop */}
          <div className="bg-gradient-to-br from-navy to-purple rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-black uppercase mb-4">Jetzt shoppen</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Besuche unseren Online-Shop und sichere dir die neuesten Fanartikel.
              An Spieltagen auch direkt in der Eissporthalle am Seilersee erhältlich.
            </p>
            <a
              href="https://shop.iserlohn-roosters.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-lg px-8"
            >
              Zum Online-Shop
            </a>
          </div>

          {/* Spieltag-Shop info */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-navy/5 rounded-xl p-6">
              <h4 className="font-bold uppercase text-navy text-sm mb-2">Online-Shop</h4>
              <p className="text-gray-500 text-sm">
                24/7 verfügbar — versandkostenfrei ab 50€ Bestellwert. Lieferung innerhalb von 3-5 Werktagen.
              </p>
            </div>
            <div className="bg-navy/5 rounded-xl p-6">
              <h4 className="font-bold uppercase text-navy text-sm mb-2">Spieltag-Shop</h4>
              <p className="text-gray-500 text-sm">
                An jedem Heimspiel öffnet unser Fanshop-Stand in der Eissporthalle 90 Minuten vor Spielbeginn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
