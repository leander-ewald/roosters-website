import type { Metadata } from "next";
import { DEL_TABLE } from "@/lib/data";

export const metadata: Metadata = {
  title: "DEL Tabelle",
  description: "Aktuelle Tabelle der Deutschen Eishockey Liga (DEL) — Saison 2025/26. Platzierung der Iserlohn Roosters.",
};

export default function TabellePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Saison 2025/26
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            DEL Tabelle
          </h1>
          <p className="text-white/50 mt-2">Stand: Spieltag 45</p>
        </div>
      </section>

      {/* Table */}
      <section className="section">
        <div className="container">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400 w-12">#</th>
                  <th className="text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">Team</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Sp</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">S</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">OTS</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">OTN</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">N</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Tore</th>
                  <th className="text-center py-3 px-2 text-xs font-bold uppercase tracking-wider text-gray-400">Diff</th>
                  <th className="text-center py-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">Pkt</th>
                </tr>
              </thead>
              <tbody>
                {DEL_TABLE.map((team, i) => {
                  const diff = team.gf - team.ga;
                  const isPlayoff = team.rank <= 10;
                  return (
                    <tr
                      key={team.short}
                      className={`border-b border-gray-100 transition-colors ${
                        team.isRoosters
                          ? "bg-navy/5 font-bold"
                          : "hover:bg-gray-50"
                      } ${i === 9 ? "border-b-2 border-red/30" : ""}`}
                    >
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          team.isRoosters
                            ? "bg-navy text-gold"
                            : isPlayoff
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {team.rank}
                        </span>
                      </td>
                      <td className={`py-3 px-3 ${team.isRoosters ? "text-navy" : ""}`}>
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-500 shrink-0">
                            {team.short}
                          </span>
                          <span className="text-sm">{team.team}</span>
                          {team.isRoosters && (
                            <span className="text-[10px] bg-gold text-navy px-1.5 py-0.5 rounded font-bold ml-1">
                              WIR
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="text-center py-3 px-2 text-sm text-gray-600">{team.gp}</td>
                      <td className="text-center py-3 px-2 text-sm text-green-600 font-medium">{team.w}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-600">{team.otw}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-600">{team.otl}</td>
                      <td className="text-center py-3 px-2 text-sm text-red font-medium">{team.l}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-600">{team.gf}:{team.ga}</td>
                      <td className={`text-center py-3 px-2 text-sm font-medium ${
                        diff > 0 ? "text-green-600" : diff < 0 ? "text-red" : "text-gray-500"
                      }`}>
                        {diff > 0 ? `+${diff}` : diff}
                      </td>
                      <td className={`text-center py-3 px-3 text-sm font-black ${
                        team.isRoosters ? "text-navy text-lg" : ""
                      }`}>
                        {team.pts}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-50 border border-green-200 rounded-full" />
              Plätze 1-10: Playoffs
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red/10 border border-red/30 rounded-full" />
              Plätze 13-14: Abstieg
            </span>
            <span className="flex items-center gap-2">
              S = Siege | OTS = Overtime-Siege | OTN = Overtime-Niederlagen | N = Niederlagen
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
