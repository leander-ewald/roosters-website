/* DEL Team Logo Mapping — Maps full team names to logo paths */

const TEAM_LOGOS: Record<string, string> = {
  "Iserlohn Roosters": "/logos/ir.png",
  "Kölner Haie": "/logos/kec.png",
  "Adler Mannheim": "/logos/ma.png",
  "EHC Red Bull München": "/logos/muc.png",
  "Straubing Tigers": "/logos/str.png",
  "ERC Ingolstadt": "/logos/ing.png",
  "Pinguins Bremerhaven": "/logos/bhv.png",
  "Eisbären Berlin": "/logos/ber.png",
  "Grizzlys Wolfsburg": "/logos/wob.png",
  "Schwenninger Wild Wings": "/logos/sww.png",
  "Nürnberg Ice Tigers": "/logos/nit.png",
  "Augsburger Panther": "/logos/aev.png",
  "Löwen Frankfurt": "/logos/fra.png",
  "Dresdner Eislöwen": "/logos/drs.png",
};

export function getTeamLogo(teamName: string): string {
  return TEAM_LOGOS[teamName] || "";
}
