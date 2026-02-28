import type { Metadata } from "next";
import { PLAYER_STATS, GOALIE_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Statistik",
  description: "Spielerstatistiken der Iserlohn Roosters — Top-Scorer, Torhüter und mehr aus der DEL Saison 2025/26.",
};

export default function StatistikPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Saison 2025/26
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            Statistik
          </h1>
          <p className="text-white/50 mt-2">Stand: Spieltag 45</p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { value: "110", label: "Erzielte Tore" },
              { value: "141", label: "Gegentore" },
              { value: "12", label: "Siege (reg.)" },
              { value: "3", label: "OT-Siege" },
              { value: "49", label: "Punkte" },
              { value: `${(110 / 45).toFixed(1)}`, label: "Tore/Spiel" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-primary">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Scorer */}
      <section className="section">
        <div className="container">
          <h2 className="section-title mb-8">Top Scorer</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400 w-12">#</th>
                  <th className="text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">Spieler</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Pos</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Sp</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Tore</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Assists</th>
                  <th className="text-center py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">Punkte</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">SM</th>
                </tr>
              </thead>
              <tbody>
                {PLAYER_STATS.map((player, i) => (
                  <tr
                    key={player.name}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      i < 3 ? "bg-accent/5" : ""
                    }`}
                  >
                    <td className="py-3 px-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        i === 0
                          ? "bg-accent text-primary"
                          : i === 1
                          ? "bg-gray-300 text-gray-700"
                          : i === 2
                          ? "bg-orange-200 text-orange-800"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-accent font-black text-sm">#{player.number}</span>
                        </div>
                        <span className="font-bold text-sm">{player.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        player.position === "VT"
                          ? "bg-primary-light/10 text-primary-light"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {player.position}
                      </span>
                    </td>
                    <td className="text-center py-3 px-2 text-sm text-gray-600">{player.gp}</td>
                    <td className="text-center py-3 px-2 text-sm font-bold text-cta">{player.goals}</td>
                    <td className="text-center py-3 px-2 text-sm font-bold text-primary-light">{player.assists}</td>
                    <td className="text-center py-3 px-3">
                      <span className="text-lg font-black text-primary">{player.points}</span>
                    </td>
                    <td className="text-center py-3 px-2 text-sm text-gray-400">{player.pim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Goalie Stats */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title mb-8">Torhüter</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {GOALIE_STATS.map((goalie) => (
              <div key={goalie.name} className="card p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-accent font-black text-lg">#{goalie.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg uppercase">{goalie.name}</h3>
                    <p className="text-gray-400 text-sm">Torhüter</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Spiele", value: goalie.gp },
                    { label: "Siege", value: goalie.wins },
                    { label: "Niederl.", value: goalie.losses },
                    { label: "GAA", value: goalie.gaa.toFixed(2) },
                    { label: "SV%", value: `${goalie.svPct}%` },
                    { label: "Shutouts", value: goalie.so },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl font-black text-primary">{stat.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
