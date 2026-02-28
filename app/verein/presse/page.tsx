import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Presse",
  description: "Presseinformationen der Iserlohn Roosters — Akkreditierung, Pressematerial, Medienkontakt und Vereinsdaten.",
};

const VEREINSDATEN = [
  { label: "Offizieller Name", value: "Iserlohn Roosters GmbH" },
  { label: "Gegründet", value: "28. Februar 1959 (als EC Deilinghofen)" },
  { label: "Liga", value: "PENNY Deutsche Eishockey Liga (DEL)" },
  { label: "Arena", value: "Balver Zinn Arena am Seilersee (4.999 Plätze)" },
  { label: "Farben", value: "Blau, Weiß" },
  { label: "Geschäftsführer", value: "Wolfgang Brück, Josef Jost" },
  { label: "Sportdirektor", value: "Karsten Mende" },
  { label: "Trainer", value: "Stefan Nyman" },
  { label: "Kapitän", value: "Daniel Fischbuch" },
];

export default function PressePage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Presse</h1>
          <p className="text-white/50 mt-2">Informationen für Medienvertreter</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-primary mb-3">Akkreditierung</h3>
              <p className="text-gray-500 text-sm mb-4">
                Journalisten und Fotografen können sich für Heimspiele akkreditieren.
                Anfragen bitte mindestens 48 Stunden vor Spielbeginn an die Pressestelle.
              </p>
              <p className="text-sm text-gray-500 mb-3">Benötigt: Presseausweis, Redaktionsnachweis, Name der Publikation.</p>
              <a href="mailto:presse@iserlohn-roosters.de" className="text-accent font-bold text-sm hover:text-primary transition-colors">
                presse@iserlohn-roosters.de
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-primary mb-3">Pressekontakt</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p className="font-bold text-primary">Pressestelle Iserlohn Roosters</p>
                <p>Seilerseestraße 105, 58636 Iserlohn</p>
                <p>Tel: <a href="tel:+4923719519510" className="text-primary hover:text-accent transition-colors">02371 / 951 95 10</a></p>
                <p>E-Mail: <a href="mailto:presse@iserlohn-roosters.de" className="text-primary hover:text-accent transition-colors">presse@iserlohn-roosters.de</a></p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-primary mb-3">Pressematerial</h3>
              <p className="text-gray-500 text-sm mb-3">
                Logos, Mannschaftsfotos, Spielerporträts und Factsheets für redaktionelle Verwendung.
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Für hochauflösendes Material kontaktieren Sie bitte die Pressestelle direkt.
              </p>
              <a href="mailto:presse@iserlohn-roosters.de?subject=Pressematerial-Anfrage" className="text-accent font-bold text-sm hover:text-primary transition-colors">
                Material anfragen
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-primary mb-3">TV & Livestream</h3>
              <p className="text-gray-500 text-sm mb-3">
                Alle DEL-Spiele live auf MagentaSport. Ausgewählte Spiele im Free-TV auf Sport1.
              </p>
              <p className="text-gray-500 text-sm">
                Lokale Berichterstattung durch Radio MK und die lokale Presse (IKZ, WA).
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-lg uppercase text-primary mb-4">Vereinsdaten (Factsheet)</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {VEREINSDATEN.map((d) => (
                <div key={d.label} className="flex justify-between py-2 border-b border-gray-200 text-sm">
                  <span className="text-gray-400">{d.label}</span>
                  <span className="text-primary font-medium text-right">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black uppercase text-white mb-2">Aktuelle Meldungen</h3>
            <p className="text-white/50 mb-4">Alle News und Pressemitteilungen im Überblick.</p>
            <Link href="/news" className="btn btn-accent">Zu den News</Link>
          </div>
        </div>
      </section>
    </>
  );
}
