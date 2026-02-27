"use client";

export interface Player {
  number: number;
  name: string;
  position: "Torwart" | "Verteidiger" | "Stürmer";
  nationality: string;
  flag: string;
}

const POS_COLORS = {
  Torwart: "bg-gold text-navy",
  Verteidiger: "bg-blue text-white",
  Stürmer: "bg-red text-white",
};

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Photo placeholder */}
      <div className="aspect-[3/4] bg-gradient-to-br from-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[120px] font-black text-white/5 leading-none">
            {player.number}
          </span>
        </div>
        {/* Number badge */}
        <div className="absolute top-3 right-3 w-12 h-12 bg-gold rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-navy font-black text-xl">{player.number}</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Profil ansehen</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${POS_COLORS[player.position]}`}>
            {player.position}
          </span>
          <span className="text-sm" title={player.nationality}>{player.flag}</span>
        </div>
        <h3 className="font-bold text-base uppercase leading-tight truncate">
          {player.name}
        </h3>
      </div>
    </div>
  );
}
