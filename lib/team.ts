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
  image?: string;
}

export const STAFF: StaffMember[] = [
  // Sportliche Verantwortung
  { name: "Franz-David Fritzmeier", role: "Sportdirektor", category: "coaching", image: `${IR}/2025/08/Fritzmeier_Herobild_2025.jpg` },
  { name: "Stefan Nyman", role: "Headcoach", category: "coaching", image: `${IR}/2025/04/Nyman_Herobild_2025_New.jpg` },
  { name: "Janne Kujala", role: "Assistant- und Performance-Coach", category: "coaching", image: `${IR}/2025/08/Kujala_Herobild_2025Neu.jpg` },
  { name: "Santeri Hilli", role: "Goalie- und Videocoach", category: "coaching", image: `${IR}/2025/08/Santeri_Herobild_2025_Neu.jpg` },
  { name: "Tony Zabel", role: "Assistant- und Development-Coach", category: "coaching", image: `${IR}/2025/08/Zabel_Herobild_2025.jpg` },

  // Medizin
  { name: "Tobias Schütze", role: "Physiotherapeut", category: "medical", image: `${IR}/2020/12/Schuetze_Herobild_2025.jpg` },
  { name: "Dr. Jochen Veit", role: "Mannschaftsarzt", category: "medical", image: `${IR}/2019/08/Veit_vor_schwarz_seitlich_Herobild.jpg` },
  { name: "Dr. Dirk Mallmann", role: "Mannschaftsarzt", category: "medical", image: `${IR}/2019/08/Mallmann_Herobild_2025.jpg` },
  { name: "Prof. Dr. Stefan Esenwein", role: "Chefarzt Orthopädie", category: "medical", image: `${IR}/2022/09/Prof_Eisenwein_Herobild_2025.jpg` },
  { name: "Dr. Dominik Schöne", role: "Facharzt Innere Medizin", category: "medical", image: `${IR}/2022/09/Unbenannt-767.png` },

  // Equipment & Support
  { name: "Toto Weber", role: "Zeugwart", category: "equipment", image: `${IR}/2018/09/Weber_Herobild_2025.jpg` },
  { name: "Anton Paulusson", role: "Zeugwart", category: "equipment", image: `${IR}/2025/07/Paulusson_Herobild_2025_New.jpg` },
  { name: "Klaus Spelsberg", role: "People Logistics Manager", category: "equipment", image: `${IR}/2020/12/Spelsberg_Herobild_2025.jpg` },
  { name: "Jonas Brockmann", role: "Teamfotograf", category: "equipment", image: `${IR}/2020/12/Jonas_Brockmann_WEB.jpg` },
];

/* ── Organisation / Geschäftsstelle ── */
export interface OrgMember {
  name: string;
  role: string;
  department: string;
  image?: string;
}

export const ORGANISATION: OrgMember[] = [
  // Geschäftsführung
  { name: "Wolfgang Brück", role: "Geschäftsführender Gesellschafter", department: "Geschäftsführung", image: `${IR}/2018/09/Brück-Kachelbild-480x480.jpg` },
  { name: "Josef Jost", role: "Geschäftsführender Gesellschafter", department: "Geschäftsführung", image: `${IR}/2018/09/Jost-Kachelbild-480x480.jpg` },

  // Geschäftsstelle
  { name: "Bernd Schutzeigel", role: "Prokurist / Geschäftsstellenleitung", department: "Geschäftsstelle", image: `${IR}/2018/09/Schutzeigel_Kachelbild_25-480x480.jpg` },
  { name: "Axel Müffeler", role: "Head of Development / Manager Sport", department: "Sport", image: `${IR}/2025/09/Mueffeler_vor_weiss-480x480.jpg` },

  // Ticketing & Marketing
  { name: "Tim Burck", role: "Ticketing / Mitgliederverwaltung / Marketing", department: "Ticketing & Marketing", image: `${IR}/2018/09/Burck_Kachelbild_25-480x480.jpg` },
  { name: "Marc Licha", role: "Nachhaltigkeit / Ticketing / Kids Club", department: "Ticketing & Marketing", image: `${IR}/2022/11/Licha_Kachelbild_25-480x480.jpg` },
  { name: "Felix Dötsch", role: "Öffentlichkeitsarbeit", department: "Kommunikation", image: `${IR}/2019/07/Doetsch_Kachelbild_25-480x480.jpg` },
  { name: "Niklas Tillmanns", role: "PR-Content Manager", department: "Kommunikation", image: `${IR}/2024/08/Tillmanns_Kachelbild_25-480x480.jpg` },
  { name: "Danai Kopitz", role: "Social Media", department: "Kommunikation", image: `${IR}/2025/09/D_Kopitz_vor_weiss-480x480.jpg` },
  { name: "Konstantin Kühn", role: "Grafikdesign", department: "Kommunikation", image: `${IR}/2019/04/Kuehn_vor_weiss-2-480x480.jpg` },

  // Sponsoring
  { name: "Frank Richter", role: "Sponsoring / Marketing", department: "Sponsoring", image: `${IR}/2020/05/Richter_Kachelbild_25-480x480.jpg` },
  { name: "Marcello Sinesi", role: "Sponsoring", department: "Sponsoring", image: `${IR}/2021/07/Sinesi_Kachelbild_25-480x480.jpg` },
  { name: "Lasse Kopitz", role: "Sponsoring", department: "Sponsoring", image: `${IR}/2025/11/Kopitz_vor_weiss-480x480.jpg` },

  // Operations
  { name: "Jan Röhrig", role: "Merchandising", department: "Operations", image: `${IR}/2019/06/Roehrig_Kachelbild_25-480x480.jpg` },
  { name: "Luca Heinze", role: "Gastronomie & Veranstaltungen", department: "Operations", image: `${IR}/2021/08/Heinze_Kachelbild_25-480x480.jpg` },
  { name: "Dirk Sommer", role: "Facility Manager", department: "Operations", image: `${IR}/2018/09/Sommer_Kachelbild_25-480x480.jpg` },
  { name: "Heike Polter", role: "Front Office", department: "Operations", image: `${IR}/2024/08/Polter_Kachelbild_25-480x480.jpg` },
];
