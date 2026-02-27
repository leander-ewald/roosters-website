"use client";

import { useState } from "react";
import PlayerCard from "@/components/PlayerCard";
import { ROSTER } from "@/lib/team";

type Position = "Alle" | "Torwart" | "Verteidiger" | "Stürmer";

const POSITIONS: Position[] = ["Alle", "Torwart", "Verteidiger", "Stürmer"];
const POS_BADGE = {
  Alle: "bg-primary text-white",
  Torwart: "bg-accent text-primary",
  Verteidiger: "bg-primary-light text-white",
  Stürmer: "bg-cta text-white",
};

export default function KaderPage() {
  const [filter, setFilter] = useState<Position>("Alle");

  const filtered = filter === "Alle"
    ? ROSTER
    : ROSTER.filter((p) => p.position === filter);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Team
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            Kader 2025/26
          </h1>
          <p className="text-white/50 mt-2">{ROSTER.length} Spieler</p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-16 md:top-20 z-[30]">
        <div className="container py-3">
          <div className="flex gap-2">
            {POSITIONS.map((pos) => (
              <button
                key={pos}
                onClick={() => setFilter(pos)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  filter === pos ? POS_BADGE[pos] : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {pos}
                <span className="ml-1.5 text-[10px] opacity-60">
                  ({pos === "Alle" ? ROSTER.length : ROSTER.filter((p) => p.position === pos).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filtered.map((player) => (
              <PlayerCard key={player.number} player={player} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
