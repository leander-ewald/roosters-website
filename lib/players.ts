/* ══════════════════════════════════════════════════════
   Spieler-Profile — Iserlohn Roosters 2025/26
   Vollständige Daten für Profilseiten
   ══════════════════════════════════════════════════════ */

const IR = "https://iserlohn-roosters.de/wp-content/uploads";

export interface PlayerStats {
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  penaltyMinutes: number;
  plusMinus: number;
}

export interface GoalieProfileStats {
  gamesPlayed: number;
  wins: number;
  losses: number;
  goalsAgainstAverage: number;
  savePercentage: number;
}

export interface PlayerProfile {
  number: number;
  firstName: string;
  lastName: string;
  fullName: string;
  slug: string;
  position: "Torwart" | "Verteidiger" | "Stürmer";
  birthday: string;
  age: number;
  height: number;
  weight: number;
  shoots: "L" | "R";
  nationality: string;
  flag: string;
  birthplace: string;
  image: string;
  stats?: PlayerStats;
  goalieStats?: GoalieProfileStats;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PLAYERS: PlayerProfile[] = [
  // ── Torhüter ──
  {
    number: 32, firstName: "Hendrik", lastName: "Hane", fullName: "Hendrik Hane", slug: "hendrik-hane",
    position: "Torwart", birthday: "18.09.2000", age: 25, height: 178, weight: 74, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Düsseldorf",
    image: `${IR}/2024/08/Hane_vor_schwarz_mit_Kontur-480x480.jpg`,
    goalieStats: { gamesPlayed: 20, wins: 6, losses: 14, goalsAgainstAverage: 2.86, savePercentage: 90.32 },
  },
  {
    number: 35, firstName: "Finn", lastName: "Becker", fullName: "Finn Becker", slug: "finn-becker",
    position: "Torwart", birthday: "23.09.2003", age: 22, height: 192, weight: 84, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Iserlohn",
    image: `${IR}/2020/12/Becker_vor_schwarz_mit_Kontur-480x480.jpg`,
    goalieStats: { gamesPlayed: 0, wins: 0, losses: 0, goalsAgainstAverage: 0, savePercentage: 0 },
  },
  {
    number: 92, firstName: "Andreas", lastName: "Jenike", fullName: "Andreas Jenike", slug: "andreas-jenike",
    position: "Torwart", birthday: "14.07.1988", age: 37, height: 180, weight: 80, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Hamburg",
    image: `${IR}/2019/05/Jenike_vor_schwarz_mit_Kontur-480x480.jpg`,
    goalieStats: { gamesPlayed: 26, wins: 11, losses: 15, goalsAgainstAverage: 2.79, savePercentage: 89.82 },
  },

  // ── Verteidiger ──
  {
    number: 3, firstName: "Kyle", lastName: "Wood", fullName: "Kyle Wood", slug: "kyle-wood",
    position: "Verteidiger", birthday: "04.05.1996", age: 29, height: 200, weight: 101, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "Waterloo, ON",
    image: `${IR}/2025/08/Wood_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 40, goals: 4, assists: 16, points: 20, penaltyMinutes: 10, plusMinus: 4 },
  },
  {
    number: 4, firstName: "Nils", lastName: "Elten", fullName: "Nils Elten", slug: "nils-elten",
    position: "Verteidiger", birthday: "12.06.2003", age: 22, height: 190, weight: 89, shoots: "R",
    nationality: "Deutschland", flag: "de", birthplace: "Iserlohn",
    image: `${IR}/2020/12/Elten_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 17, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: 0 },
  },
  {
    number: 7, firstName: "Gordejs", lastName: "Radionovs", fullName: "Gordejs Radionovs", slug: "gordejs-radionovs",
    position: "Verteidiger", birthday: "02.02.2007", age: 19, height: 181, weight: 83, shoots: "L",
    nationality: "Deutschland / Lettland", flag: "de", birthplace: "Riga",
    image: `${IR}/2025/08/Radionovs_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 26, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: -1 },
  },
  {
    number: 15, firstName: "Matias", lastName: "Lassen", fullName: "Matias Lassen", slug: "matias-lassen",
    position: "Verteidiger", birthday: "15.03.1996", age: 29, height: 182, weight: 82, shoots: "L",
    nationality: "Dänemark", flag: "dk", birthplace: "Rødovre",
    image: `${IR}/2025/08/Lassen_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 35, goals: 2, assists: 9, points: 11, penaltyMinutes: 8, plusMinus: -1 },
  },
  {
    number: 20, firstName: "Macoy", lastName: "Erkamps", fullName: "Macoy Erkamps", slug: "macoy-erkamps",
    position: "Verteidiger", birthday: "02.02.1995", age: 31, height: 183, weight: 89, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "Delta, BC",
    image: `${IR}/2025/08/Erkamps_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 35, goals: 1, assists: 1, points: 2, penaltyMinutes: 38, plusMinus: -8 },
  },
  {
    number: 26, firstName: "Lua", lastName: "Niehus", fullName: "Lua Niehus", slug: "lua-niehus",
    position: "Verteidiger", birthday: "26.03.2005", age: 20, height: 176, weight: 73, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Utzenstorf",
    image: `${IR}/2025/11/Lua_Niehus_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 38, goals: 1, assists: 4, points: 5, penaltyMinutes: 16, plusMinus: -11 },
  },
  {
    number: 55, firstName: "Johannes", lastName: "Huß", fullName: "Johannes Huß", slug: "johannes-huss",
    position: "Verteidiger", birthday: "09.08.1998", age: 27, height: 185, weight: 87, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Bad Tölz",
    image: `${IR}/2024/08/Huss_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 37, goals: 0, assists: 4, points: 4, penaltyMinutes: 10, plusMinus: -17 },
  },
  {
    number: 56, firstName: "Robin", lastName: "Norell", fullName: "Robin Norell", slug: "robin-norell",
    position: "Verteidiger", birthday: "18.02.1995", age: 31, height: 180, weight: 87, shoots: "L",
    nationality: "Schweden", flag: "se", birthplace: "Stockholm",
    image: `${IR}/2025/08/Norell_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 45, goals: 2, assists: 8, points: 10, penaltyMinutes: 22, plusMinus: -19 },
  },
  {
    number: 77, firstName: "Colton", lastName: "Jobke", fullName: "Colton Jobke", slug: "colton-jobke",
    position: "Verteidiger", birthday: "20.04.1992", age: 33, height: 185, weight: 90, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "Kanada",
    image: `${IR}/2024/08/Jobke_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 13, goals: 0, assists: 2, points: 2, penaltyMinutes: 4, plusMinus: -1 },
  },
  {
    number: 79, firstName: "Colin", lastName: "Ugbekile", fullName: "Colin Ugbekile", slug: "colin-ugbekile",
    position: "Verteidiger", birthday: "24.09.1999", age: 26, height: 187, weight: 90, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Solingen",
    image: `${IR}/2022/05/Ugbekile_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 46, goals: 7, assists: 27, points: 34, penaltyMinutes: 18, plusMinus: 3 },
  },

  // ── Stürmer ──
  {
    number: 8, firstName: "Daniel", lastName: "Geiger", fullName: "Daniel Geiger", slug: "daniel-geiger",
    position: "Stürmer", birthday: "13.09.2006", age: 19, height: 176, weight: 76, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Steinfurt",
    image: `${IR}/2025/08/Geiger_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 33, goals: 0, assists: 1, points: 1, penaltyMinutes: 8, plusMinus: -5 },
  },
  {
    number: 10, firstName: "Tyler", lastName: "Boland", fullName: "Tyler Boland", slug: "tyler-boland",
    position: "Stürmer", birthday: "12.09.1996", age: 29, height: 183, weight: 88, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "St. John's, NL",
    image: `${IR}/2023/08/Boland_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 45, goals: 9, assists: 9, points: 18, penaltyMinutes: 12, plusMinus: -5 },
  },
  {
    number: 11, firstName: "Henrik", lastName: "Törnqvist", fullName: "Henrik Törnqvist", slug: "henrik-toernqvist",
    position: "Stürmer", birthday: "25.08.1996", age: 29, height: 186, weight: 85, shoots: "R",
    nationality: "Schweden", flag: "se", birthplace: "Motala",
    image: `${IR}/2025/08/Toernqvist_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 41, goals: 7, assists: 2, points: 9, penaltyMinutes: 8, plusMinus: -5 },
  },
  {
    number: 14, firstName: "Noel", lastName: "Saffran", fullName: "Noel Saffran", slug: "noel-saffran",
    position: "Stürmer", birthday: "30.04.2004", age: 21, height: 187, weight: 91, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Duisburg",
    image: `${IR}/2024/08/Saffran_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 20, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: -8 },
  },
  {
    number: 17, firstName: "Eirik", lastName: "Salsten", fullName: "Eirik Salsten", slug: "eirik-salsten",
    position: "Stürmer", birthday: "17.06.1994", age: 31, height: 184, weight: 88, shoots: "L",
    nationality: "Norwegen", flag: "no", birthplace: "Oslo",
    image: `${IR}/2025/08/Salsten_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 46, goals: 6, assists: 9, points: 15, penaltyMinutes: 10, plusMinus: -17 },
  },
  {
    number: 18, firstName: "Eric", lastName: "Cornel", fullName: "Eric Cornel", slug: "eric-cornel",
    position: "Stürmer", birthday: "11.04.1996", age: 29, height: 188, weight: 90, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "Kemptville, ON",
    image: `${IR}/2021/07/Cornel_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 44, goals: 11, assists: 20, points: 31, penaltyMinutes: 6, plusMinus: -3 },
  },
  {
    number: 22, firstName: "Daniel", lastName: "Neumann", fullName: "Daniel Neumann", slug: "daniel-neumann",
    position: "Stürmer", birthday: "22.02.2002", age: 24, height: 185, weight: 80, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Freiburg",
    image: `${IR}/2025/08/Neumann_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 46, goals: 3, assists: 0, points: 3, penaltyMinutes: 2, plusMinus: -12 },
  },
  {
    number: 27, firstName: "Christian", lastName: "Thomas", fullName: "Christian Thomas", slug: "christian-thomas",
    position: "Stürmer", birthday: "26.05.1992", age: 33, height: 177, weight: 82, shoots: "R",
    nationality: "Kanada", flag: "ca", birthplace: "Toronto",
    image: `${IR}/2025/01/Thomas_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 45, goals: 17, assists: 14, points: 31, penaltyMinutes: 8, plusMinus: -10 },
  },
  {
    number: 29, firstName: "Jakub", lastName: "Borzecki", fullName: "Jakub Borzecki", slug: "jakub-borzecki",
    position: "Stürmer", birthday: "17.01.2002", age: 24, height: 186, weight: 90, shoots: "R",
    nationality: "Deutschland / Polen", flag: "de", birthplace: "Syracuse, NY",
    image: `${IR}/2025/08/Borzecki_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 31, goals: 0, assists: 0, points: 0, penaltyMinutes: 2, plusMinus: -10 },
  },
  {
    number: 36, firstName: "Anthony", lastName: "Camara", fullName: "Anthony Camara", slug: "anthony-camara",
    position: "Stürmer", birthday: "04.09.1993", age: 32, height: 184, weight: 89, shoots: "L",
    nationality: "Kanada", flag: "ca", birthplace: "Toronto",
    image: `${IR}/2025/11/Anthony_Camara_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 29, goals: 10, assists: 13, points: 23, penaltyMinutes: 36, plusMinus: 3 },
  },
  {
    number: 40, firstName: "Bence", lastName: "Farkas", fullName: "Bence Farkas", slug: "bence-farkas",
    position: "Stürmer", birthday: "29.01.2006", age: 20, height: 187, weight: 87, shoots: "R",
    nationality: "Deutschland / Ungarn", flag: "de", birthplace: "Budapest",
    image: `${IR}/2025/08/Farkas_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 6, goals: 0, assists: 0, points: 0, penaltyMinutes: 0, plusMinus: -1 },
  },
  {
    number: 41, firstName: "Maximilian", lastName: "Eisenmenger", fullName: "Maximilian Eisenmenger", slug: "maximilian-eisenmenger",
    position: "Stürmer", birthday: "21.08.1998", age: 27, height: 189, weight: 88, shoots: "L",
    nationality: "Deutschland / Schweden", flag: "de", birthplace: "Münster",
    image: `${IR}/2026/01/Max_Eisenmenger_Herobild_2025-480x480.jpg`,
    stats: { gamesPlayed: 18, goals: 2, assists: 4, points: 6, penaltyMinutes: 6, plusMinus: -4 },
  },
  {
    number: 63, firstName: "Manuel", lastName: "Alberg", fullName: "Manuel Alberg", slug: "manuel-alberg",
    position: "Stürmer", birthday: "06.03.2001", age: 24, height: 177, weight: 79, shoots: "R",
    nationality: "Deutschland", flag: "de", birthplace: "Köln",
    image: `${IR}/2024/09/Alberg_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 14, goals: 0, assists: 0, points: 0, penaltyMinutes: 4, plusMinus: -2 },
  },
  {
    number: 71, firstName: "Daniel", lastName: "Fischbuch", fullName: "Daniel Fischbuch", slug: "daniel-fischbuch",
    position: "Stürmer", birthday: "19.08.1993", age: 32, height: 180, weight: 81, shoots: "R",
    nationality: "Deutschland", flag: "de", birthplace: "Heilbronn",
    image: `${IR}/2025/08/Fischbuch_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 44, goals: 17, assists: 25, points: 42, penaltyMinutes: 53, plusMinus: 0 },
  },
  {
    number: 75, firstName: "Julian", lastName: "Napravnik", fullName: "Julian Napravnik", slug: "julian-napravnik",
    position: "Stürmer", birthday: "06.05.1997", age: 28, height: 180, weight: 79, shoots: "L",
    nationality: "Deutschland", flag: "de", birthplace: "Bad Nauheim",
    image: `${IR}/2025/08/Napravnik_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 43, goals: 10, assists: 18, points: 28, penaltyMinutes: 6, plusMinus: -9 },
  },
  {
    number: 90, firstName: "Taro", lastName: "Jentzsch", fullName: "Taro Jentzsch", slug: "taro-jentzsch",
    position: "Stürmer", birthday: "11.06.2000", age: 25, height: 188, weight: 80, shoots: "R",
    nationality: "Deutschland", flag: "de", birthplace: "Berlin",
    image: `${IR}/2023/10/Jentzsch_vor_schwarz_mit_Kontur-480x480.jpg`,
    stats: { gamesPlayed: 34, goals: 3, assists: 8, points: 11, penaltyMinutes: 8, plusMinus: -9 },
  },
];

/* ── Lookup helpers ── */
const slugMap = new Map(PLAYERS.map((p) => [p.slug, p]));

export function getPlayerBySlug(slug: string): PlayerProfile | undefined {
  return slugMap.get(slug);
}

export function getAllPlayerSlugs(): string[] {
  return PLAYERS.map((p) => p.slug);
}
