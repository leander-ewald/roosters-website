import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ehrenamt",
  description: "Ehrenamtlich bei den Iserlohn Roosters mithelfen — Spieltag-Support, Events und mehr. Werde Teil des Teams!",
};

const BEREICHE = [
  { title: "Einlass & Ordnung", desc: "Kontrolle der Tickets am Eingang, Platzanweisung und Sicherheit im Stadion. Einweisung wird gestellt.", time: "Ab 1,5h vor Spielbeginn" },
  { title: "Gastronomie-Support", desc: "Unterstützung an den Getränke- und Imbissständen. Ausgabe von Speisen und Getränken an die Fans.", time: "Ab 2h vor Spielbeginn" },
  { title: "Merchandising-Verkauf", desc: "Betreuung des Fanshop-Stands an Spieltagen. Beratung und Verkauf von Trikots, Schals und mehr.", time: "Ab 1h vor Spielbeginn" },
  { title: "Event-Organisation", desc: "Mithilfe bei Sonderevents wie Saisoneröffnung, Kids-Day, Autogrammstunden und Familientagen.", time: "Nach Bedarf" },
  { title: "Kids Club Betreuung", desc: "Begleitung der Einlaufkinder, Organisation der Kids-Corner am Spieltag und Unterstützung bei Kids Club Events.", time: "Ab 1h vor Spielbeginn" },
  { title: "Medien & Social Media", desc: "Fotografieren, Social-Media-Posts erstellen, Spieltag-Content für die Roosters-Kanäle.", time: "Gesamter Spieltag" },
];

export default function EhrenamtPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Ehrenamt</h1>
          <p className="text-white/50 mt-2">Ohne euch läuft kein Spieltag</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Werde Teil des Teams!</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Über 100 ehrenamtliche Helferinnen und Helfer sorgen an jedem Spieltag dafür, dass in der Eissporthalle am Seilersee alles reibungslos läuft.
              Ohne sie wäre kein Heimspiel möglich.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {BEREICHE.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-sm uppercase text-primary mb-1">{b.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{b.desc}</p>
                <p className="text-accent text-xs font-bold uppercase tracking-wider">{b.time}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-black uppercase text-primary mb-3 text-center">Was du bekommst</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Kostenloser Eintritt zu allen Heimspielen",
                "Verpflegung am Spieltag",
                "Ehrenamts-Ausweis & Roosters-Kleidung",
                "Einladung zu exklusiven Helfer-Events",
                "Teil einer einzigartigen Gemeinschaft",
                "Dankeschön-Aktion am Saisonende",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-4">Interesse? Schreib uns einfach — wir melden uns bei dir!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:ehrenamt@iserlohn-roosters.de" className="btn btn-primary">Per E-Mail melden</a>
              <Link href="/kontakt" className="btn btn-ghost">Kontaktformular</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
