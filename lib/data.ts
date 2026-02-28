/* ══════════════════════════════════════════════════════
   Zentrale Daten-Datei — Iserlohn Roosters
   Stand: 27.02.2026, Spieltag 45
   ══════════════════════════════════════════════════════ */

/* ── News ── */
export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export const NEWS: Article[] = [
  {
    id: "dauerkarten-rechnungsversand-2627",
    title: "Informationen zum Rechnungsversand der Dauerkarten 26/27",
    date: "26.02.2026",
    category: "Tickets",
    excerpt: "Der Rechnungsversand für die Dauerkarten der Saison 2026/27 hat begonnen. Alle wichtigen Informationen zum Ablauf und den Fristen.",
    image: "/images/hockey-tickets.webp",
    content: `Der Rechnungsversand für die Saisonkarten 2026/27 hat begonnen. Bestehende Dauerkarteninhaber erhalten ihre Rechnung per E-Mail und Post. Bitte beachtet folgende Fristen:

**Frühbucher-Preis:** Zahlung bis 31.03.2026
**Regulärer Preis:** ab 01.04.2026

Wer seine Dauerkarte nicht verlängern möchte, teilt uns dies bitte bis zum 15.03.2026 mit. Alle nicht abgemeldeten Karten werden automatisch verlängert.

Bei Fragen steht euch die Geschäftsstelle unter tickets@iserlohn-roosters.de zur Verfügung.`,
  },
  {
    id: "4-1-nuernberg-klassenerhalt",
    title: "4:1 in Nürnberg — Klassenerhalt gesichert!",
    date: "25.02.2026",
    category: "Spielbericht",
    excerpt: "Die Iserlohn Roosters sicherten sich mit einem starken 4:1-Auswärtssieg bei den Nürnberg Ice Tigers vorzeitig den Klassenerhalt in der DEL.",
    image: "/images/game-action.webp",
    content: `**Nürnberg Ice Tigers 1:4 Iserlohn Roosters** (Spieltag 45)

Ein historischer Abend für die Roosters: Mit dem deutlichen 4:1-Auswärtssieg in Nürnberg ist der Klassenerhalt in der Deutschen Eishockey Liga vorzeitig gesichert.

**Tore:**
- 0:1 Roosters (8. Min.)
- 0:2 Roosters (22. Min., PP)
- 1:2 Nürnberg (31. Min.)
- 1:3 Roosters (48. Min.)
- 1:4 Roosters (57. Min., EN)

Die Mannschaft zeigte von Beginn an eine konzentrierte Leistung und ließ dem Gegner kaum Chancen. Mit nun 49 Punkten auf dem Konto ist der Vorsprung auf die Abstiegsränge komfortabel.`,
  },
  {
    id: "augsburg-fast-ausverkauft",
    title: "Partie gegen Augsburg vorzeitig ausverkauft",
    date: "25.02.2026",
    category: "Tickets",
    excerpt: "Das Heimspiel gegen Augsburg ist fast ausverkauft — nur noch rund 600 Tickets fehlen bis zum neuen Zuschauerrekord am Seilersee!",
    image: "/images/arena-rink.webp",
    content: `Das Heimspiel am Sonntag gegen die Augsburger Panther (01.03.2026, 14:00 Uhr) ist nahezu ausverkauft. Aktuell fehlen nur noch rund 600 Karten bis zum neuen Zuschauerrekord in der Eissporthalle am Seilersee.

Wer live dabei sein möchte, sollte sich schnell Tickets sichern. Restkarten sind über den Ticketshop und an der Tageskasse erhältlich.

Lasst uns gemeinsam Geschichte schreiben und den Seilersee zum Beben bringen!`,
  },
  {
    id: "interview-fritzmeier-strategie",
    title: "Interview: Sportdirektor Fritzmeier zur strategischen Positionierung",
    date: "24.02.2026",
    category: "Verein",
    excerpt: "Sportdirektor Franz-David Fritzmeier spricht über die strategische Ausrichtung der Roosters und die Planungen für die kommende Saison.",
    image: "/images/hockey-player.webp",
    content: `Im exklusiven Interview gibt Sportdirektor Franz-David Fritzmeier Einblicke in die strategische Planung der Iserlohn Roosters.

**Über die aktuelle Saison:**
"Wir haben unser primäres Ziel, den Klassenerhalt, erreicht. Das ist die Basis, auf der wir aufbauen wollen."

**Über die Kaderplanung:**
"Wir arbeiten bereits intensiv an der Zusammenstellung des Kaders für die nächste Saison. Dabei setzen wir auf eine Mischung aus erfahrenen Spielern und jungen Talenten."

**Über die Zukunftsvision:**
"Iserlohn soll ein fester Bestandteil der DEL bleiben. Wir wollen schrittweise wachsen und unseren Fans eine Mannschaft bieten, auf die sie stolz sein können."`,
  },
  {
    id: "testspiel-bremerhaven",
    title: "2:5-Testspielniederlage in Bremerhaven",
    date: "20.02.2026",
    category: "Spielbericht",
    excerpt: "Die Roosters mussten sich im Testspiel bei den Pinguins Bremerhaven mit 2:5 geschlagen geben.",
    image: "/images/hockey-news.webp",
    content: `Im Testspiel bei den Fischtown Pinguins Bremerhaven mussten die Roosters eine 2:5-Niederlage hinnehmen. Trainer nutzte die Gelegenheit, um verschiedene Formationen zu testen und jüngeren Spielern Eiszeit zu geben.

"Testspiele dienen der Vorbereitung und dem Ausprobieren. Das Ergebnis ist zweitrangig", so der Coach nach dem Spiel.`,
  },
  {
    id: "spieltag-45-vorschau",
    title: "Spieltag 45: Roosters @ Nürnberg",
    date: "25.02.2026",
    category: "Vorschau",
    excerpt: "Vorschau auf das Auswärtsspiel bei den Nürnberg Ice Tigers am Spieltag 45 der DEL Saison 2025/26.",
    image: "/images/hero-hockey.webp",
    content: `**Vorschau Spieltag 45: Nürnberg Ice Tigers vs. Iserlohn Roosters**

Die Roosters reisen zum vorletzten Auswärtsspiel der Saison nach Nürnberg. Ein Sieg würde den Klassenerhalt endgültig besiegeln.

**Anstoß:** Dienstag, 25.02.2026, 19:30 Uhr
**Ort:** Arena Nürnberger Versicherung

Die Ice Tigers stehen auf Platz 10 der Tabelle und kämpfen noch um die Playoff-Teilnahme.`,
  },
];

/* ── DEL Tabelle ── */
export interface TeamStanding {
  rank: number;
  team: string;
  short: string;
  gp: number;
  w: number;
  otw: number;
  otl: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
  isRoosters?: boolean;
}

export const DEL_TABLE: TeamStanding[] = [
  { rank: 1, team: "Kölner Haie", short: "KEC", gp: 45, w: 32, otw: 0, otl: 3, l: 10, gf: 175, ga: 114, pts: 104 },
  { rank: 2, team: "Adler Mannheim", short: "MA", gp: 45, w: 26, otw: 1, otl: 3, l: 15, gf: 159, ga: 108, pts: 90 },
  { rank: 3, team: "EHC Red Bull München", short: "MUC", gp: 45, w: 26, otw: 2, otl: 1, l: 16, gf: 153, ga: 111, pts: 87 },
  { rank: 4, team: "Straubing Tigers", short: "STR", gp: 45, w: 27, otw: 1, otl: 1, l: 16, gf: 156, ga: 125, pts: 86 },
  { rank: 5, team: "ERC Ingolstadt", short: "ING", gp: 45, w: 25, otw: 3, otl: 2, l: 15, gf: 176, ga: 126, pts: 85 },
  { rank: 6, team: "Pinguins Bremerhaven", short: "BHV", gp: 45, w: 20, otw: 3, otl: 1, l: 21, gf: 138, ga: 140, pts: 70 },
  { rank: 7, team: "Eisbären Berlin", short: "BER", gp: 45, w: 17, otw: 4, otl: 2, l: 22, gf: 145, ga: 143, pts: 67 },
  { rank: 8, team: "Grizzlys Wolfsburg", short: "WOB", gp: 45, w: 18, otw: 2, otl: 0, l: 25, gf: 134, ga: 127, pts: 64 },
  { rank: 9, team: "Schwenninger Wild Wings", short: "SWW", gp: 45, w: 17, otw: 0, otl: 3, l: 25, gf: 126, ga: 137, pts: 60 },
  { rank: 10, team: "Nürnberg Ice Tigers", short: "NIT", gp: 45, w: 17, otw: 2, otl: 0, l: 26, gf: 139, ga: 151, pts: 59 },
  { rank: 11, team: "Augsburger Panther", short: "AEV", gp: 45, w: 12, otw: 4, otl: 2, l: 27, gf: 128, ga: 157, pts: 56 },
  { rank: 12, team: "Iserlohn Roosters", short: "IR", gp: 45, w: 12, otw: 3, otl: 2, l: 28, gf: 110, ga: 141, pts: 49, isRoosters: true },
  { rank: 13, team: "Löwen Frankfurt", short: "FRA", gp: 45, w: 12, otw: 2, otl: 0, l: 31, gf: 110, ga: 170, pts: 45 },
  { rank: 14, team: "Dresdner Eislöwen", short: "DRS", gp: 45, w: 5, otw: 1, otl: 1, l: 38, gf: 88, ga: 187, pts: 23 },
];

/* ── Spielplan ── */
export interface Game {
  date: string;
  time: string;
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
  isHome: boolean;
}

export const SCHEDULE: Game[] = [
  // Februar 2026
  { date: "07.02.2026", time: "19:30", home: "Iserlohn Roosters", away: "Schwenninger Wild Wings", homeScore: 3, awayScore: 2, venue: "Seilersee", isHome: true },
  { date: "09.02.2026", time: "17:00", home: "Adler Mannheim", away: "Iserlohn Roosters", homeScore: 4, awayScore: 1, venue: "SAP Arena", isHome: false },
  { date: "13.02.2026", time: "19:30", home: "Iserlohn Roosters", away: "Grizzlys Wolfsburg", homeScore: 2, awayScore: 3, venue: "Seilersee", isHome: true },
  { date: "15.02.2026", time: "14:00", home: "Löwen Frankfurt", away: "Iserlohn Roosters", homeScore: 1, awayScore: 4, venue: "Eissporthalle", isHome: false },
  { date: "20.02.2026", time: "19:30", home: "Iserlohn Roosters", away: "ERC Ingolstadt", homeScore: 2, awayScore: 5, venue: "Seilersee", isHome: true },
  { date: "22.02.2026", time: "17:00", home: "Kölner Haie", away: "Iserlohn Roosters", homeScore: 3, awayScore: 1, venue: "Lanxess Arena", isHome: false },
  { date: "25.02.2026", time: "19:30", home: "Nürnberg Ice Tigers", away: "Iserlohn Roosters", homeScore: 1, awayScore: 4, venue: "Arena Nürnberger Vers.", isHome: false },
  { date: "27.02.2026", time: "19:30", home: "Eisbären Berlin", away: "Iserlohn Roosters", venue: "Mercedes-Benz Arena", isHome: false },
  // März 2026
  { date: "01.03.2026", time: "14:00", home: "Iserlohn Roosters", away: "Augsburger Panther", venue: "Seilersee", isHome: true },
  { date: "06.03.2026", time: "19:30", home: "Iserlohn Roosters", away: "Dresdner Eislöwen", venue: "Seilersee", isHome: true },
  { date: "08.03.2026", time: "17:00", home: "Straubing Tigers", away: "Iserlohn Roosters", venue: "Eisstadion am Pulverturm", isHome: false },
  { date: "13.03.2026", time: "19:30", home: "Iserlohn Roosters", away: "Pinguins Bremerhaven", venue: "Seilersee", isHome: true },
  { date: "15.03.2026", time: "14:00", home: "EHC Red Bull München", away: "Iserlohn Roosters", venue: "SAP Garden", isHome: false },
];

/* ── Spielerstatistiken ── */
export interface PlayerStat {
  rank: number;
  name: string;
  number: number;
  position: string;
  gp: number;
  goals: number;
  assists: number;
  points: number;
  pim: number;
}

export const PLAYER_STATS: PlayerStat[] = [
  { rank: 1, name: "Sven Ziegler", number: 91, position: "ST", gp: 44, goals: 18, assists: 24, points: 42, pim: 22 },
  { rank: 2, name: "Taro Jentzsch", number: 19, position: "ST", gp: 45, goals: 15, assists: 22, points: 37, pim: 14 },
  { rank: 3, name: "Michael Dal Colle", number: 72, position: "ST", gp: 43, goals: 14, assists: 20, points: 34, pim: 18 },
  { rank: 4, name: "Ryan O'Connor", number: 4, position: "VT", gp: 45, goals: 8, assists: 25, points: 33, pim: 30 },
  { rank: 5, name: "Brandt Clarke", number: 55, position: "VT", gp: 40, goals: 10, assists: 18, points: 28, pim: 16 },
  { rank: 6, name: "Erik Hain", number: 71, position: "ST", gp: 42, goals: 12, assists: 14, points: 26, pim: 24 },
  { rank: 7, name: "Colin Blackwell", number: 43, position: "ST", gp: 38, goals: 11, assists: 13, points: 24, pim: 12 },
  { rank: 8, name: "Tim Fleischer", number: 17, position: "ST", gp: 44, goals: 9, assists: 14, points: 23, pim: 10 },
  { rank: 9, name: "Lean Bergmann", number: 95, position: "ST", gp: 41, goals: 10, assists: 11, points: 21, pim: 28 },
  { rank: 10, name: "Kaspars Daugavins", number: 16, position: "ST", gp: 39, goals: 8, assists: 12, points: 20, pim: 8 },
];

export interface GoalieStat {
  name: string;
  number: number;
  gp: number;
  wins: number;
  losses: number;
  gaa: number;
  svPct: number;
  so: number;
}

export const GOALIE_STATS: GoalieStat[] = [
  { name: "Hannibal Weitzmann", number: 35, gp: 30, wins: 9, losses: 18, gaa: 2.89, svPct: 91.2, so: 1 },
  { name: "Andreas Jenike", number: 29, gp: 18, wins: 6, losses: 10, gaa: 3.12, svPct: 89.8, so: 0 },
];
