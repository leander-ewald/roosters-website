import type { Player } from "@/components/PlayerCard";

/* ══════════════════════════════════════════════════════
   Kader — Iserlohn Roosters 2025/26 (echte Daten)
   ══════════════════════════════════════════════════════ */

const IR = "https://iserlohn-roosters.de/wp-content/uploads";

export const ROSTER: Player[] = [
  // Torhüter
  { number: 32, name: "Hendrik Hane", position: "Torwart", nationality: "Deutschland", flag: "de", image: `${IR}/2024/08/Hane_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 35, name: "Finn Becker", position: "Torwart", nationality: "Deutschland", flag: "de", image: `${IR}/2020/12/Becker_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 92, name: "Andreas Jenike", position: "Torwart", nationality: "Deutschland", flag: "de", image: `${IR}/2019/05/Jenike_vor_schwarz_mit_Kontur-480x480.jpg` },

  // Verteidiger
  { number: 3, name: "Kyle Wood", position: "Verteidiger", nationality: "Kanada", flag: "ca", image: `${IR}/2025/08/Wood_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 4, name: "Nils Elten", position: "Verteidiger", nationality: "Deutschland", flag: "de", image: `${IR}/2020/12/Elten_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 7, name: "Gordejs Radionovs", position: "Verteidiger", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Radionovs_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 15, name: "Matias Lassen", position: "Verteidiger", nationality: "Dänemark", flag: "dk", image: `${IR}/2025/08/Lassen_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 20, name: "Macoy Erkamps", position: "Verteidiger", nationality: "Kanada", flag: "ca", image: `${IR}/2025/08/Erkamps_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 26, name: "Lua Niehus", position: "Verteidiger", nationality: "Deutschland", flag: "de", image: `${IR}/2025/11/Lua_Niehus_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 55, name: "Johannes Huß", position: "Verteidiger", nationality: "Deutschland", flag: "de", image: `${IR}/2024/08/Huss_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 56, name: "Robin Norell", position: "Verteidiger", nationality: "Schweden", flag: "se", image: `${IR}/2025/08/Norell_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 77, name: "Colton Jobke", position: "Verteidiger", nationality: "Kanada", flag: "ca", image: `${IR}/2024/08/Jobke_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 79, name: "Colin Ugbekile", position: "Verteidiger", nationality: "Deutschland", flag: "de", image: `${IR}/2022/05/Ugbekile_vor_schwarz_mit_Kontur-480x480.jpg` },

  // Stürmer
  { number: 8, name: "Daniel Geiger", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Geiger_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 10, name: "Tyler Boland", position: "Stürmer", nationality: "Kanada", flag: "ca", image: `${IR}/2023/08/Boland_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 11, name: "Henrik Törnqvist", position: "Stürmer", nationality: "Schweden", flag: "se", image: `${IR}/2025/08/Toernqvist_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 14, name: "Noel Saffran", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2024/08/Saffran_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 17, name: "Eirik Salsten", position: "Stürmer", nationality: "Norwegen", flag: "no", image: `${IR}/2025/08/Salsten_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 18, name: "Eric Cornel", position: "Stürmer", nationality: "Kanada", flag: "ca", image: `${IR}/2021/07/Cornel_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 22, name: "Daniel Neumann", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Neumann_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 27, name: "Christian Thomas", position: "Stürmer", nationality: "Kanada", flag: "ca", image: `${IR}/2025/01/Thomas_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 29, name: "Jakub Borzecki", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Borzecki_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 36, name: "Anthony Camara", position: "Stürmer", nationality: "Kanada", flag: "ca", image: `${IR}/2025/11/Anthony_Camara_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 40, name: "Bence Farkas", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Farkas_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 41, name: "Maximilian Eisenmenger", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2026/01/Max_Eisenmenger_Herobild_2025-480x480.jpg` },
  { number: 63, name: "Manuel Alberg", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2024/09/Alberg_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 71, name: "Daniel Fischbuch", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Fischbuch_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 75, name: "Julian Napravnik", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2025/08/Napravnik_vor_schwarz_mit_Kontur-480x480.jpg` },
  { number: 90, name: "Taro Jentzsch", position: "Stürmer", nationality: "Deutschland", flag: "de", image: `${IR}/2023/10/Jentzsch_vor_schwarz_mit_Kontur-480x480.jpg` },
];

/* ── Coaching Staff ── */
export interface StaffMember {
  name: string;
  role: string;
  category: "coaching" | "medical" | "equipment" | "management";
}

export const STAFF: StaffMember[] = [
  // Sportliche Verantwortung
  { name: "Franz-David Fritzmeier", role: "Sportdirektor", category: "coaching" },
  { name: "Stefan Nyman", role: "Headcoach", category: "coaching" },
  { name: "Janne Kujala", role: "Assistant- und Performance-Coach", category: "coaching" },
  { name: "Santeri Hilli", role: "Goalie- und Videocoach", category: "coaching" },
  { name: "Tony Zabel", role: "Assistant- und Development-Coach", category: "coaching" },

  // Medizin
  { name: "Tobias Schütze", role: "Physiotherapeut", category: "medical" },
  { name: "Dr. Jochen Veit", role: "Mannschaftsarzt", category: "medical" },
  { name: "Dr. Dirk Mallmann", role: "Mannschaftsarzt", category: "medical" },
  { name: "Prof. Dr. Stefan Esenwein", role: "Chefarzt Orthopädie", category: "medical" },
  { name: "Dr. Dominik Schöne", role: "Facharzt Innere Medizin", category: "medical" },

  // Equipment & Support
  { name: "Toto Weber", role: "Zeugwart", category: "equipment" },
  { name: "Anton Paulusson", role: "Zeugwart", category: "equipment" },
  { name: "Klaus Spelsberg", role: "People Logistics Manager", category: "equipment" },
  { name: "Jonas Brockmann", role: "Teamfotograf", category: "equipment" },
];

/* ── Organisation / Geschäftsstelle ── */
export interface OrgMember {
  name: string;
  role: string;
  department: string;
}

export const ORGANISATION: OrgMember[] = [
  // Geschäftsführung
  { name: "Wolfgang Brück", role: "Geschäftsführender Gesellschafter", department: "Geschäftsführung" },
  { name: "Josef Jost", role: "Geschäftsführender Gesellschafter", department: "Geschäftsführung" },

  // Geschäftsstelle
  { name: "Bernd Schutzeigel", role: "Prokurist / Geschäftsstellenleitung", department: "Geschäftsstelle" },
  { name: "Axel Müffeler", role: "Head of Development / Manager Sport", department: "Sport" },

  // Ticketing & Marketing
  { name: "Tim Burck", role: "Ticketing / Mitgliederverwaltung / Marketing", department: "Ticketing & Marketing" },
  { name: "Marc Licha", role: "Nachhaltigkeit / Ticketing / Kids Club", department: "Ticketing & Marketing" },
  { name: "Felix Dötsch", role: "Öffentlichkeitsarbeit", department: "Kommunikation" },
  { name: "Niklas Tillmanns", role: "PR-Content Manager", department: "Kommunikation" },
  { name: "Danai Kopitz", role: "Social Media", department: "Kommunikation" },
  { name: "Konstantin Kühn", role: "Grafikdesign", department: "Kommunikation" },

  // Sponsoring
  { name: "Frank Richter", role: "Sponsoring / Marketing", department: "Sponsoring" },
  { name: "Marcello Sinesi", role: "Sponsoring", department: "Sponsoring" },
  { name: "Lasse Kopitz", role: "Sponsoring", department: "Sponsoring" },

  // Operations
  { name: "Jan Röhrig", role: "Merchandising", department: "Operations" },
  { name: "Luca Heinze", role: "Gastronomie & Veranstaltungen", department: "Operations" },
  { name: "Dirk Sommer", role: "Facility Manager", department: "Operations" },
  { name: "Heike Polter", role: "Front Office", department: "Operations" },
];
