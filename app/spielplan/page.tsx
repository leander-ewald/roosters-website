import type { Metadata } from "next";
import { SCHEDULE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Spielplan",
  description: "Spielplan der Iserlohn Roosters — Alle Spiele der DEL Saison 2025/26 mit Ergebnissen und Terminen.",
};

export default function SpielplanPage() {
  const today = new Date("2026-02-27");

  // Group games by month
  const grouped = SCHEDULE.reduce((acc, game) => {
    const [d, m, y] = game.date.split(".");
    const key = `${y}-${m}`;
    if (!acc[key]) acc[key] = { label: getMonthLabel(parseInt(m), parseInt(y)), games: [] };
    acc[key].games.push(game);
    return acc;
  }, {} as Record<string, { label: string; games: typeof SCHEDULE }>);

  function getMonthLabel(month: number, year: number) {
    const months = ["", "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    return `${months[month]} ${year}`;
  }

  function isPast(dateStr: string) {
    const [d, m, y] = dateStr.split(".").map(Number);
    return new Date(y, m - 1, d) < today;
  }

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
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        isHomeGame ? "bg-primary/5 hover:bg-primary/10" : "bg-gray-50 hover:bg-gray-100"
                      } ${past ? "" : "border-l-4 border-accent"}`}
                    >
                      {/* Date */}
                      <div className="w-20 shrink-0 text-center">
                        <p className="text-sm font-bold text-primary">{game.date.slice(0, 6)}</p>
                        <p className="text-xs text-gray-400">{game.time}</p>
                      </div>

                      {/* Badge */}
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                        isHomeGame ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                      }`}>
                        {isHomeGame ? "Heim" : "Ausw."}
                      </span>

                      {/* Teams */}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate">
                          <span className={game.home === "Iserlohn Roosters" ? "text-primary" : ""}>
                            {game.home}
                          </span>
                          <span className="text-gray-300 mx-2">vs</span>
                          <span className={game.away === "Iserlohn Roosters" ? "text-primary" : ""}>
                            {game.away}
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 truncate">{game.venue}</p>
                      </div>

                      {/* Score */}
                      <div className="w-16 text-center shrink-0">
                        {game.homeScore !== undefined ? (
                          <span className={`text-lg font-black ${
                            (game.isHome && game.homeScore > (game.awayScore || 0)) ||
                            (!game.isHome && (game.awayScore || 0) > game.homeScore)
                              ? "text-green-600"
                              : "text-cta"
                          }`}>
                            {game.homeScore}:{game.awayScore}
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-primary uppercase">{game.time}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
