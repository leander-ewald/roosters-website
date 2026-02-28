import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner & Sponsoren",
  description: "Alle Sponsoren und Partner der Iserlohn Roosters — Hauptsponsoren, Medienpartner und Business-Partner.",
};

const HAUPTSPONSOREN = [
  { name: "Raab Karcher", logo: "/sponsors/raab-karcher.png", url: "https://raabkarcher.de" },
  { name: "Märkische Bank eG", logo: "/sponsors/maerkische-bank.png", url: "https://maerkische-bank.de" },
  { name: "Krombacher", logo: "/sponsors/krombacher.png", url: "https://krombacher.de" },
  { name: "Böhm Kabel", logo: "/sponsors/boehm-kabel.png", url: "https://boehm-kabel.de" },
  { name: "Kirchhoff Gruppe", logo: "/sponsors/kirchhoff.png", url: "https://kirchhoff-gruppe.de" },
  { name: "Stadtwerke Iserlohn", logo: "/sponsors/stadtwerke-iserlohn.png", url: "https://stadtwerke-iserlohn.de" },
  { name: "Huckschlag Transporte", logo: "/sponsors/huckschlag.png", url: "https://huckschlag-transporte.de" },
  { name: "Platzmann Federn", logo: "/sponsors/platzmann-federn.png", url: "https://platzmann.de" },
  { name: "J.D. von Hagen AG", logo: "/sponsors/jd-von-hagen.png", url: "https://jdvonhagen.de" },
];

const MEDIENPARTNER = [
  { name: "MagentaSport", url: "https://magentasport.de" },
  { name: "PENNY DEL", url: "https://penny-del.org" },
  { name: "Radio MK", url: "https://radio-mk.de" },
];

export default function PartnerPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Sponsoring</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Unsere Partner</h1>
          <p className="text-white/50 mt-2">Die Unterstützer der Iserlohn Roosters</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="mb-14">
            <h2 className="text-xl font-black uppercase text-primary mb-6 border-b-2 border-primary pb-2">Hauptsponsoren</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {HAUPTSPONSOREN.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all group h-24">
                  <Image src={s.logo} alt={s.name} width={140} height={42} className="h-10 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-xl font-black uppercase text-primary mb-6 border-b-2 border-primary pb-2">Medienpartner</h2>
            <div className="grid grid-cols-3 gap-4">
              {MEDIENPARTNER.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <p className="font-bold text-sm uppercase text-primary group-hover:text-accent transition-colors">{s.name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-xl font-black uppercase text-primary mb-6 border-b-2 border-primary pb-2">Arena-Namenssponsor</h2>
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">Balver Zinn Arena am Seilersee</h3>
              <p className="text-gray-500 text-sm">Seit 2022 trägt die Eissporthalle am Seilersee den Namen Balver Zinn Arena — benannt nach dem Iserlohner Traditionsunternehmen Balver Zinn.</p>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black uppercase text-white mb-2">Partner werden?</h3>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">Werden Sie Teil der Roosters-Familie — als Sponsor, Business-Partner oder VIP-Gast.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/sponsoring" className="btn btn-accent">Sponsoring-Pakete</Link>
              <a href="mailto:sponsoring@iserlohn-roosters.de" className="btn btn-outline">Kontakt aufnehmen</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
