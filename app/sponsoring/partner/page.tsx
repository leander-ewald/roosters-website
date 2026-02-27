import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner & Sponsoren",
  description: "Alle Sponsoren und Partner der Iserlohn Roosters — Hauptsponsoren, Premium-Partner und Business-Partner.",
};

const SPONSOR_TIERS = [
  {
    tier: "Hauptsponsoren",
    sponsors: [
      { name: "Raab Karcher", url: "https://raabkarcher.de" },
      { name: "Märkische Bank eG", url: "https://maerkische-bank.de" },
      { name: "Krombacher", url: "https://krombacher.de" },
      { name: "Böhm Kabel", url: "https://boehm-kabel.de" },
      { name: "Kirchhoff Gruppe", url: "https://kirchhoff-gruppe.de" },
      { name: "Stadtwerke Iserlohn", url: "https://stadtwerke-iserlohn.de" },
      { name: "Huckschlag Transporte", url: "https://huckschlag-transporte.de" },
      { name: "Platzmann Federn", url: "https://platzmann.de" },
      { name: "J.D. von Hagen AG", url: "https://jdvonhagen.de" },
    ],
  },
  {
    tier: "Medienpartner",
    sponsors: [
      { name: "MagentaSport", url: "https://magentasport.de" },
      { name: "DEL", url: "https://del.org" },
      { name: "Radio MK", url: "https://radio-mk.de" },
    ],
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Sponsoring</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Unsere Partner</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.tier} className="mb-12">
              <h2 className="text-xl font-black uppercase text-navy mb-6 border-b-2 border-navy pb-2">
                {tier.tier}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tier.sponsors.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-400 font-bold text-xs uppercase">{s.name.split(" ")[0]}</span>
                    </div>
                    <p className="font-bold text-sm uppercase text-navy group-hover:text-purple transition-colors">
                      {s.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
