"use client";

import Image from "next/image";
import Link from "next/link";
import FlagIcon from "@/components/FlagIcon";

export interface Player {
  number: number;
  name: string;
  position: "Torwart" | "Verteidiger" | "Stürmer";
  nationality: string;
  flag: string;
  image?: string;
  slug?: string;
}

const POS_COLORS = {
  Torwart: "bg-accent text-primary",
  Verteidiger: "bg-primary-light text-white",
  Stürmer: "bg-cta text-white",
};

export default function PlayerCard({ player }: { player: Player }) {
  const imageUrl = player.image || null;
  const slug = player.slug || player.name.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <Link href={`/team/kader/${slug}`} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
      {/* Photo */}
      <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={player.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-top"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] font-black text-white/5 leading-none">
              {player.number}
            </span>
          </div>
        )}
        {/* Number badge */}
        <div className="absolute top-3 right-3 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-primary font-black text-xl">{player.number}</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Profil ansehen</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${POS_COLORS[player.position]}`}>
            {player.position}
          </span>
          <FlagIcon code={player.flag} size={18} />
        </div>
        <h3 className="font-bold text-base uppercase leading-tight truncate">
          {player.name}
        </h3>
      </div>
    </Link>
  );
}
