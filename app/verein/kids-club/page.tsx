import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roosters Kids Club",
  description: "Der Roosters Kids Club — Für alle jungen Eishockey-Fans bis 14 Jahre in Iserlohn. Kostenlose Mitgliedschaft, Events und Erlebnisse.",
};

const VORTEILE = [
  { title: "Kostenlose Mitgliedschaft", desc: "Für alle Kinder bis 14 Jahre — ohne Kosten, ohne Haken." },
  { title: "Exklusiver Kids Club Ausweis", desc: "Dein persönlicher Ausweis als offizielles Roosters-Mitglied." },
  { title: "Einlaufkinder bei Heimspielen", desc: "Lauf mit den Profis aufs Eis — ein unvergessliches Erlebnis." },
  { title: "Autogrammstunden", desc: "Triff deine Lieblingsspieler und hol dir Autogramme und Fotos." },
  { title: "Eislaufen mit den Profis", desc: "Bei Kids Club Aktionstagen gemeinsam mit den Spielern auf dem Eis stehen." },
  { title: "Geburtstagsaktion", desc: "Gratis Eintrittskarte zum Geburtstag — feiere deinen Tag mit den Roosters." },
  { title: "Newsletter mit Rätseln", desc: "Regelmäßige Post mit Rätseln, Gewinnspielen und Neuigkeiten." },
];

export default function KidsClubPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Roosters Kids Club</h1>
          <p className="text-white/50 mt-2">Für alle Nachwuchs-Fans bis 14 Jahre</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Werde Teil des Kids Clubs!</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Der Roosters Kids Club ist das offizielle Fan-Programm für alle jungen Eishockey-Begeisterten.
              Kostenlos anmelden und sofort von exklusiven Vorteilen profitieren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {VORTEILE.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-primary mb-0.5">{v.title}</h3>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center mb-10">
            <h3 className="text-2xl font-black uppercase text-primary mb-2">So meldest du dich an</h3>
            <p className="text-gray-500 mb-2">
              Schick uns einfach eine E-Mail oder komm an Spieltagen an der Geschäftsstelle vorbei.
            </p>
            <p className="text-gray-500 mb-6 text-sm">
              Benötigt: Name und Geburtsdatum des Kindes, E-Mail-Adresse der Eltern.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:kidsclub@iserlohn-roosters.de" className="btn btn-primary">Per E-Mail anmelden</a>
              <Link href="/kontakt" className="btn btn-ghost">Kontakt aufnehmen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
