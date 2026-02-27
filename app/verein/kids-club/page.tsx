import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roosters Kids Club",
  description: "Der Roosters Kids Club — Für alle jungen Eishockey-Fans in Iserlohn. Erlebnisse, Events und mehr.",
};

export default function KidsClubPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Roosters Kids Club</h1>
          <p className="text-white/50 mt-2">Für alle Nachwuchs-Fans bis 14 Jahre</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-black uppercase text-navy mb-4">Was bietet der Kids Club?</h2>
            <ul className="space-y-3 text-gray-700">
              {["Kostenlose Mitgliedschaft für alle Kinder bis 14 Jahre", "Exklusiver Kids Club Ausweis", "Einlaufkinder bei Heimspielen", "Besondere Autogrammstunden mit den Spielern", "Kids Club Aktionstage (Eislaufen mit den Profis)", "Geburtstagsaktion: Gratis Eintrittskarte", "Regelmäßiger Newsletter mit Rätseln und Gewinnspielen"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold text-xl">⭐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Link href="/kontakt" className="btn btn-primary text-base px-8 py-4">Jetzt anmelden</Link>
          </div>
        </div>
      </section>
    </>
  );
}
