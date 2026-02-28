import type { Metadata } from "next";
import { SCHEDULE } from "@/lib/data";
import SpielplanView from "@/components/SpielplanView";

export const metadata: Metadata = {
  title: "Spielplan",
  description: "Spielplan der Iserlohn Roosters — Alle Spiele der DEL Saison 2025/26 mit Ergebnissen und Terminen.",
};

export default function SpielplanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Saison 2025/26
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            Spielplan
          </h1>
        </div>
      </section>

      <SpielplanView schedule={SCHEDULE} />
    </>
  );
}
