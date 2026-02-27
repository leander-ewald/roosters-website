import type { Player } from "@/components/PlayerCard";

/* ══════════════════════════════════════════════════════
   Kader — Iserlohn Roosters 2025/26
   ══════════════════════════════════════════════════════ */

export const ROSTER: Player[] = [
  // Torhüter
  { number: 35, name: "Hannibal Weitzmann", position: "Torwart", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 29, name: "Andreas Jenike", position: "Torwart", nationality: "Deutschland", flag: "🇩🇪" },

  // Verteidiger
  { number: 4, name: "Ryan O'Connor", position: "Verteidiger", nationality: "Kanada", flag: "🇨🇦" },
  { number: 55, name: "Brandt Clarke", position: "Verteidiger", nationality: "Kanada", flag: "🇨🇦" },
  { number: 6, name: "Torsten Ankert", position: "Verteidiger", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 3, name: "Hubert Labrie", position: "Verteidiger", nationality: "Kanada", flag: "🇨🇦" },
  { number: 44, name: "Tim Bender", position: "Verteidiger", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 57, name: "Nick Seeler", position: "Verteidiger", nationality: "USA", flag: "🇺🇸" },
  { number: 7, name: "Erik Buschmann", position: "Verteidiger", nationality: "Deutschland", flag: "🇩🇪" },

  // Stürmer
  { number: 91, name: "Sven Ziegler", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 19, name: "Taro Jentzsch", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 72, name: "Michael Dal Colle", position: "Stürmer", nationality: "Kanada", flag: "🇨🇦" },
  { number: 71, name: "Erik Hain", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 43, name: "Colin Blackwell", position: "Stürmer", nationality: "USA", flag: "🇺🇸" },
  { number: 17, name: "Tim Fleischer", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 95, name: "Lean Bergmann", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 16, name: "Kaspars Daugavins", position: "Stürmer", nationality: "Lettland", flag: "🇱🇻" },
  { number: 22, name: "Chris Brown", position: "Stürmer", nationality: "USA", flag: "🇺🇸" },
  { number: 12, name: "Brent Aubin", position: "Stürmer", nationality: "Kanada", flag: "🇨🇦" },
  { number: 86, name: "Lukas Schmitz", position: "Stürmer", nationality: "Deutschland", flag: "🇩🇪" },
  { number: 28, name: "John Broda", position: "Stürmer", nationality: "Kanada", flag: "🇨🇦" },
];

/* ── Staff ── */
export interface StaffMember {
  name: string;
  role: string;
  category: "coaching" | "medical" | "equipment" | "management";
}

export const STAFF: StaffMember[] = [
  { name: "Doug Shedden", role: "Cheftrainer", category: "coaching" },
  { name: "Pierre Allard", role: "Co-Trainer", category: "coaching" },
  { name: "Jari Kurrri", role: "Co-Trainer", category: "coaching" },

  { name: "Dr. Michael Schöffl", role: "Mannschaftsarzt", category: "medical" },
  { name: "Thomas Pflug", role: "Physiotherapeut", category: "medical" },
  { name: "Matthias Klein", role: "Athletiktrainer", category: "medical" },

  { name: "Marco Sill", role: "Zeugwart", category: "equipment" },
  { name: "Frank Hübner", role: "Equipment Manager", category: "equipment" },
];

/* ── Organisation ── */
export interface OrgMember {
  name: string;
  role: string;
  department: string;
}

export const ORGANISATION: OrgMember[] = [
  { name: "Wolfgang Brück", role: "Geschäftsführer", department: "Geschäftsleitung" },
  { name: "Franz-David Fritzmeier", role: "Sportdirektor", department: "Sport" },
  { name: "Andreas Dötsch", role: "Kaufmännischer Leiter", department: "Geschäftsleitung" },
  { name: "Sabine Müller", role: "Leiterin Marketing & Kommunikation", department: "Marketing" },
  { name: "Christian Hommel", role: "Leiter Ticketing", department: "Ticketing" },
  { name: "Stefan Kalt", role: "Leiter Sponsoring", department: "Sponsoring" },
  { name: "Melanie Fischer", role: "Sekretariat & Verwaltung", department: "Verwaltung" },
];
