import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FlagIcon from "@/components/FlagIcon";
import { PLAYERS, getPlayerBySlug, getAllPlayerSlugs } from "@/lib/players";

/* ── Static params for SSG ── */
export function generateStaticParams() {
  return getAllPlayerSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata ── */
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const player = getPlayerBySlug(slug);
    if (!player) return { title: "Spieler nicht gefunden" };
    return {
      title: `${player.fullName} #${player.number}`,
      description: `${player.fullName} — ${player.position} der Iserlohn Roosters. Rückennummer ${player.number}, Saison 2025/26.`,
    };
  });
}

const POS_COLORS = {
  Torwart: "bg-accent text-primary",
  Verteidiger: "bg-primary-light text-white",
  "Stürmer": "bg-cta text-primary",
};

export default async function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  if (!player) notFound();

  const isGoalie = player.position === "Torwart";
  const stats = player.stats;
  const goalieStats = player.goalieStats;

  /* Find prev/next players for navigation */
  const idx = PLAYERS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PLAYERS[idx - 1] : null;
  const next = idx < PLAYERS.length - 1 ? PLAYERS[idx + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-8">
        <div className="container">
          <Link
            href="/team/kader"
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-bold uppercase tracking-wider transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zum Kader
          </Link>
        </div>
      </section>

      {/* Player Header */}
      <section className="bg-primary pb-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-end">
            {/* Photo */}
            <div className="w-56 h-72 md:w-64 md:h-80 relative rounded-xl overflow-hidden shadow-2xl shrink-0 bg-gradient-to-br from-primary-light to-primary-dark">
              <Image
                src={player.image}
                alt={player.fullName}
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover object-top"
                unoptimized
                priority
              />
              <div className="absolute top-3 right-3 w-14 h-14 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary font-black text-2xl">{player.number}</span>
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left pb-2">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${POS_COLORS[player.position]}`}>
                  {player.position}
                </span>
                <FlagIcon code={player.flag} size={22} />
                <span className="text-white/40 text-sm">{player.nationality}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-none">
                <span className="text-white/50">{player.firstName}</span>{" "}
                {player.lastName}
              </h1>
              <p className="text-accent text-lg font-bold mt-2">#{player.number}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {isGoalie && goalieStats ? (
              <>
                <QuickStat value={goalieStats.gamesPlayed} label="Spiele" />
                <QuickStat value={goalieStats.wins} label="Siege" />
                <QuickStat value={goalieStats.losses} label="Niederlagen" />
                <QuickStat value={goalieStats.goalsAgainstAverage.toFixed(2)} label="GAA" />
                <QuickStat value={`${goalieStats.savePercentage}%`} label="Fangquote" />
              </>
            ) : stats ? (
              <>
                <QuickStat value={stats.gamesPlayed} label="Spiele" />
                <QuickStat value={stats.goals} label="Tore" />
                <QuickStat value={stats.assists} label="Assists" />
                <QuickStat value={stats.points} label="Punkte" highlight />
                <QuickStat value={stats.plusMinus > 0 ? `+${stats.plusMinus}` : String(stats.plusMinus)} label="+/-" />
                <QuickStat value={stats.penaltyMinutes} label="Strafmin." />
              </>
            ) : null}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="card p-6">
              <h2 className="font-bold text-lg uppercase text-primary mb-4 border-b-2 border-primary pb-2">
                Persönliche Daten
              </h2>
              <dl className="space-y-3">
                <InfoRow label="Geburtstag" value={player.birthday} />
                <InfoRow label="Alter" value={`${player.age} Jahre`} />
                <InfoRow label="Geburtsort" value={player.birthplace} />
                <InfoRow label="Nationalität" value={player.nationality} />
                <InfoRow label="Größe" value={`${player.height} cm`} />
                <InfoRow label="Gewicht" value={`${player.weight} kg`} />
                <InfoRow label={isGoalie ? "Fanghand" : "Schusshand"} value={player.shoots === "L" ? "Links" : "Rechts"} />
              </dl>
            </div>

            {/* Season Stats */}
            <div className="card p-6">
              <h2 className="font-bold text-lg uppercase text-primary mb-4 border-b-2 border-primary pb-2">
                Saison 2025/26
              </h2>
              {isGoalie && goalieStats ? (
                <dl className="space-y-3">
                  <InfoRow label="Spiele" value={String(goalieStats.gamesPlayed)} />
                  <InfoRow label="Siege" value={String(goalieStats.wins)} />
                  <InfoRow label="Niederlagen" value={String(goalieStats.losses)} />
                  <InfoRow label="Gegentorschnitt (GAA)" value={goalieStats.goalsAgainstAverage.toFixed(2)} />
                  <InfoRow label="Fangquote (SV%)" value={`${goalieStats.savePercentage}%`} />
                </dl>
              ) : stats ? (
                <dl className="space-y-3">
                  <InfoRow label="Spiele" value={String(stats.gamesPlayed)} />
                  <InfoRow label="Tore" value={String(stats.goals)} />
                  <InfoRow label="Assists" value={String(stats.assists)} />
                  <InfoRow label="Punkte" value={String(stats.points)} highlight />
                  <InfoRow label="+/-" value={stats.plusMinus > 0 ? `+${stats.plusMinus}` : String(stats.plusMinus)} />
                  <InfoRow label="Strafminuten" value={String(stats.penaltyMinutes)} />
                </dl>
              ) : (
                <p className="text-gray-400 text-sm">Keine Statistiken verfügbar.</p>
              )}
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
            {prev ? (
              <Link
                href={`/team/kader/${prev.slug}`}
                className="flex items-center gap-3 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Vorheriger</p>
                  <p className="font-bold text-sm group-hover:text-accent transition-colors">{prev.fullName}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/team/kader/${next.slug}`}
                className="flex items-center gap-3 group"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Nächster</p>
                  <p className="font-bold text-sm group-hover:text-accent transition-colors">{next.fullName}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Helper components ── */
function QuickStat({ value, label, highlight }: { value: string | number; label: string; highlight?: boolean }) {
  return (
    <div className="text-center">
      <p className={`text-2xl md:text-3xl font-black ${highlight ? "text-accent" : "text-primary"}`}>{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{label}</p>
    </div>
  );
}

function InfoRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
      <dt className="text-sm text-gray-400">{label}</dt>
      <dd className={`text-sm font-bold ${highlight ? "text-accent" : "text-primary"}`}>{value}</dd>
    </div>
  );
}
