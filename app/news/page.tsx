import type { Metadata } from "next";
import { NEWS } from "@/lib/data";
import NewsGrid from "@/components/NewsGrid";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelle Nachrichten der Iserlohn Roosters — Spielberichte, Transfers, Tickets und mehr.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Saison 2025/26
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            News
          </h1>
        </div>
      </section>

      <NewsGrid articles={NEWS} />
    </>
  );
}
