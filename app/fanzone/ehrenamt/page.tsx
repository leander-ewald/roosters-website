import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ehrenamt",
  description: "Ehrenamtlich bei den Iserlohn Roosters mithelfen — Spieltag-Support, Events und mehr.",
};

export default function EhrenamtPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Ehrenamt</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="section-title">Werde Teil des Teams!</h2>
          <p className="text-gray-500 text-lg mb-8">
            Ohne unsere ehrenamtlichen Helferinnen und Helfer wäre kein Spieltag möglich. Wir suchen immer engagierte Menschen, die uns an Spieltagen und bei Events unterstützen.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {["Einlass & Ordnung", "Gastronomie-Support", "Merchandising-Verkauf", "Event-Organisation", "Kids Club Betreuung", "Social Media Unterstützung"].map((task) => (
              <div key={task} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center text-gold">✓</span>
                <span className="font-medium text-sm">{task}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/kontakt" className="btn btn-primary">Jetzt melden</Link>
          </div>
        </div>
      </section>
    </>
  );
}
