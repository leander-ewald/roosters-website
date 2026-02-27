import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastronomie",
  description: "Gastronomie in der Eissporthalle am Seilersee — Speisen, Getränke und Catering an Spieltagen.",
};

const ANGEBOTE = [
  { name: "Bratwurst & Pommes", desc: "Der Klassiker am Spieltag — frisch zubereitet an mehreren Ständen in der Halle.", icon: "🌭" },
  { name: "Bier & Getränke", desc: "Krombacher vom Fass, Softdrinks, Kaffee und Heißgetränke an allen Verkaufspunkten.", icon: "🍺" },
  { name: "VIP-Catering", desc: "Exklusives Buffet in der VIP-Lounge — warme und kalte Speisen, Premium-Getränke.", icon: "🍽️" },
  { name: "Pizza & Snacks", desc: "Frische Pizza, Nachos und weitere Snacks für den schnellen Hunger zwischendurch.", icon: "🍕" },
];

export default function GastronomiePage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Gastronomie</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="section-title">Essen & Trinken am Spieltag</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto text-center">
            In der Eissporthalle am Seilersee versorgen wir euch an zahlreichen Ständen mit
            Speisen und Getränken — vom Stadionklassiker bis zum VIP-Catering.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {ANGEBOTE.map((a) => (
              <div key={a.name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">{a.icon}</span>
                <h3 className="font-bold text-lg uppercase text-navy mb-2">{a.name}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy/5 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black uppercase text-navy mb-2">Catering-Partner werden?</h3>
            <p className="text-gray-500 mb-4">
              Sie möchten als Gastronom an Spieltagen dabei sein? Kontaktieren Sie uns für eine Zusammenarbeit.
            </p>
            <a href="mailto:info@iserlohn-roosters.de" className="btn btn-primary">Kontakt aufnehmen</a>
          </div>
        </div>
      </section>
    </>
  );
}
