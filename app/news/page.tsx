import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelle Nachrichten der Iserlohn Roosters — Spielberichte, Transfers, Tickets und mehr.",
};

const CATEGORIES = ["Alle", "Spielbericht", "Tickets", "Verein", "Kader", "Vorschau"];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Saison 2025/26
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            News
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-16 md:top-20 z-[30]">
        <div className="container py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                  cat === "Alle"
                    ? "bg-navy text-white"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id} className="group">
                <article className="card h-full flex flex-col">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy to-purple group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white/60 text-xs">
                      {article.date}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="font-bold text-lg uppercase leading-tight mb-3 group-hover:text-purple transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-3 mt-auto">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 text-navy font-bold text-sm uppercase tracking-wider group-hover:text-purple transition-colors inline-flex items-center gap-1">
                      Weiterlesen
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
