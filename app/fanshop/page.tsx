import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanshop",
  description: "Offizieller Fanshop der Iserlohn Roosters — Trikots, Schals, Mützen und Fanartikel online und am Spieltag.",
};

const CATEGORIES = [
  { name: "Trikots", desc: "Heim- und Auswärtstrikots der aktuellen Saison 2025/26 — auch mit Wunschnamen.", icon: "M12 4.5v15m7.5-7.5h-15" },
  { name: "Schals & Mützen", desc: "Zeig Farbe mit unseren offiziellen Fan-Schals und Mützen für jede Jahreszeit.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { name: "T-Shirts & Hoodies", desc: "Casual Wear mit Roosters-Logo für den Alltag — bequem und in vielen Größen.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
  { name: "Accessoires", desc: "Tassen, Aufkleber, Schlüsselanhänger, Pins und mehr für echte Fans.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { name: "Kids-Kollektion", desc: "Fanartikel speziell für die kleinsten Roosters-Fans — ab Größe 104.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "Saisonartikel", desc: "Limitierte Sondereditions und Saisonkollektion — nur solange der Vorrat reicht.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function FanshopPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Shop</p>
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
                <div className="w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} /></svg>
                </div>
                <h3 className="font-bold uppercase text-primary mb-2">{c.name}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-black uppercase mb-4">Jetzt shoppen</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Besuche unseren Online-Shop und sichere dir die neuesten Fanartikel.
              An Spieltagen auch direkt in der Eissporthalle am Seilersee erhältlich.
            </p>
            <a href="https://shop.iserlohn-roosters.de" target="_blank" rel="noopener noreferrer" className="btn btn-accent text-lg px-8">
              Zum Online-Shop
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6">
              <h4 className="font-bold uppercase text-primary text-sm mb-2">Online-Shop</h4>
              <p className="text-gray-500 text-sm">
                24/7 verfügbar — versandkostenfrei ab 50 € Bestellwert. Lieferung innerhalb von 3–5 Werktagen.
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6">
              <h4 className="font-bold uppercase text-primary text-sm mb-2">Spieltag-Shop</h4>
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
