"use client";

import { useState } from "react";
import Image from "next/image";
import type { Game } from "@/lib/data";
import { getTeamLogo } from "@/lib/teams";

type Filter = "Alle" | "Heim" | "Auswärts";

function getMonthLabel(month: number, year: number) {
  const months = ["", "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  return `${months[month]} ${year}`;
}

export default function SpielplanView({ schedule }: { schedule: Game[] }) {
  const [filter, setFilter] = useState<Filter>("Alle");
  const today = new Date("2026-02-27");

  const filtered = filter === "Alle"
    ? schedule
    : filter === "Heim"
    ? schedule.filter((g) => g.isHome)
    : schedule.filter((g) => !g.isHome);

  // Season summary stats
  const played = schedule.filter((g) => g.homeScore !== undefined);
  const heimSpiele = played.filter((g) => g.isHome);
  const auswaertsSpiele = played.filter((g) => !g.isHome);
  const heimSiege = heimSpiele.filter((g) => g.homeScore! > g.awayScore!).length;
  const auswaertsSiege = auswaertsSpiele.filter((g) => g.awayScore! > g.homeScore!).length;

  // Group games by month
  const grouped = filtered.reduce((acc, game) => {
    const [d, m, y] = game.date.split(".");
    const key = `${y}-${m}`;
    if (!acc[key]) acc[key] = { label: getMonthLabel(parseInt(m), parseInt(y)), games: [] };
    acc[key].games.push(game);
    return acc;
  }, {} as Record<string, { label: string; games: Game[] }>);

  function isPast(dateStr: string) {
    const [d, m, y] = dateStr.split(".").map(Number);
    return new Date(y, m - 1, d) < today;
  }

  return (
    <>
      {/* Filter + Bilanz */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-16 lg:top-[72px] z-[30]">
        <div className="container py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex gap-2">
              {(["Alle", "Heim", "Auswärts"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    filter === f
                      ? "bg-primary text-white"
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {f}
                  <span className="ml-1.5 text-[11px] opacity-60">
                    ({f === "Alle" ? schedule.length : f === "Heim" ? schedule.filter(g => g.isHome).length : schedule.filter(g => !g.isHome).length})
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Heim: <strong className="text-primary">{heimSiege}S</strong> / {heimSpiele.length - heimSiege}N</span>
              <span>Ausw.: <strong className="text-primary">{auswaertsSiege}S</strong> / {auswaertsSpiele.length - auswaertsSiege}N</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section">
        <div className="container max-w-4xl">
          {Object.entries(grouped).map(([key, { label, games }]) => (
            <div key={key} className="mb-10">
              <h2 className="text-xl font-black uppercase text-primary mb-4 border-b-2 border-primary pb-2">
                {label}
              </h2>
              <div className="space-y-3">
                {games.map((game, i) => {
                  const past = isPast(game.date);
                  const isHomeGame = game.isHome;
                  const roostersWon = isHomeGame
                    ? (game.homeScore ?? 0) > (game.awayScore ?? 0)
                    : (game.awayScore ?? 0) > (game.homeScore ?? 0);
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors ${
                        isHomeGame ? "bg-primary/5 hover:bg-primary/10" : "bg-gray-50 hover:bg-gray-100"
                      } ${past ? "" : "border-l-4 border-accent"}`}
                    >
                      {/* Date */}
                      <div className="w-14 sm:w-20 shrink-0 text-center">
                        <p className="text-xs sm:text-sm font-bold text-primary">{game.date.slice(0, 6)}</p>
                        <p className="text-[11px] sm:text-xs text-gray-400">{game.time}</p>
                      </div>

                      {/* Badge */}
                      <span className={`hidden sm:inline text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                        isHomeGame ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                      }`}>
                        {isHomeGame ? "Heim" : "Ausw."}
                      </span>

                      {/* Teams */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-2">
                          {getTeamLogo(game.home) && (
                            <Image src={getTeamLogo(game.home)} alt={game.home} width={24} height={24} className="hidden sm:block h-6 w-6 object-contain shrink-0" />
                          )}
                          <span className={`font-bold text-xs sm:text-sm truncate ${game.home === "Iserlohn Roosters" ? "text-primary" : ""}`}>
                            {game.home}
                          </span>
                          <span className="text-gray-300 mx-0.5 sm:mx-1 shrink-0">vs</span>
                          {getTeamLogo(game.away) && (
                            <Image src={getTeamLogo(game.away)} alt={game.away} width={24} height={24} className="hidden sm:block h-6 w-6 object-contain shrink-0" />
                          )}
                          <span className={`font-bold text-xs sm:text-sm truncate ${game.away === "Iserlohn Roosters" ? "text-primary" : ""}`}>
                            {game.away}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-400 truncate mt-0.5">{game.venue}</p>
                      </div>

                      {/* Score */}
                      <div className="w-12 sm:w-16 text-center shrink-0">
                        {game.homeScore !== undefined ? (
                          <span className={`text-base sm:text-lg font-black ${roostersWon ? "text-green-600" : "text-gray-400"}`}>
                            {game.homeScore}:{game.awayScore}
                          </span>
                        ) : (
                          <span className="text-[11px] sm:text-xs font-bold text-accent uppercase">{game.time}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Keine Spiele in dieser Kategorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
