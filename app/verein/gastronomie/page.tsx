import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastronomie",
  description: "Gastronomie in der Balver Zinn Arena am Seilersee — Speisen, Getränke und VIP-Catering an Spieltagen der Iserlohn Roosters.",
};

const SPEISEN = [
  { name: "Bratwurst", price: "3,80 €", desc: "Der Stadionklassiker — frisch vom Grill an mehreren Ständen in der Halle." },
  { name: "Currywurst mit Pommes", price: "6,70 €", desc: "Für den großen Hunger vor dem Spiel oder in der Drittelpause." },
  { name: "Steakbrötchen", price: "6,00 €", desc: "Saftiges Steak im frischen Brötchen — beliebt bei allen Fans." },
  { name: "Leberkäse im Brötchen", price: "4,50 €", desc: "Der herzhafte Snack für zwischendurch." },
];

const GETRAENKE = [
  { name: "Krombacher Pils (0,5l)", price: "6,00 €", desc: "Vom Fass — frisch gezapft vom Hauptgetränkesponsor." },
  { name: "Roosters Goass", price: "7,40 €", desc: "Das Spezialgetränk der Roosters — ein Muss für jeden Fan." },
  { name: "Softdrinks", price: "4,30–5,20 €", desc: "Cola, Fanta, Wasser und weitere alkoholfreie Getränke." },
  { name: "Likör-Shots", price: "2,90 €", desc: "Für die Extra-Portion Stimmung." },
];

const BEREICHE = [
  { name: "Halleninneres", desc: "Mehrere Getränke- und Imbissstände auf allen Ebenen der Arena." },
  { name: "Sportsbar & Pistenbar", desc: "Bars im Innenbereich mit Sitzgelegenheiten und Blick aufs Eis." },
  { name: "Hühnerstall", desc: "Zusätzlicher Gastro-Bereich hinter der Halle — beliebt vor und nach dem Spiel." },
  { name: "VIP-Lounges", desc: "Keuco-Lounge, Huckschlag-Lounge, Mercedes-Jürgens Lounge — exklusives Catering mit warmen und kalten Speisen, Premium-Getränke." },
];

export default function GastronomiePage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Spieltag</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Gastronomie</h1>
          <p className="text-white/50 mt-2">Essen & Trinken in der Balver Zinn Arena am Seilersee</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-cta/10 border border-cta/20 rounded-2xl p-6 mb-10 text-center">
            <p className="text-primary font-bold text-lg mb-1">Komplett bargeldlos</p>
            <p className="text-gray-500 text-sm">Bezahlung per Girokarte (EC), Kreditkarte oder der aufladbaren IEC-Karte (PayPal-Aufladung möglich).</p>
          </div>

          <h2 className="section-title">Speisen</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {SPEISEN.map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm uppercase text-primary">{s.name}</h3>
                  <span className="text-accent font-black text-sm">{s.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">Getränke</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {GETRAENKE.map((g) => (
              <div key={g.name} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm uppercase text-primary">{g.name}</h3>
                  <span className="text-accent font-black text-sm">{g.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">Gastro-Bereiche in der Arena</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {BEREICHE.map((b) => (
              <div key={b.name} className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-bold text-sm uppercase text-primary mb-1">{b.name}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black uppercase text-white mb-2">Getränkesponsor</h3>
            <p className="text-white/50 mb-4">Die Krombacher Brauerei ist stolzer Hauptgetränkesponsor der Iserlohn Roosters.</p>
            <a href="mailto:info@iserlohn-roosters.de" className="btn btn-accent">Catering-Partner werden</a>
          </div>
        </div>
      </section>
    </>
  );
}
