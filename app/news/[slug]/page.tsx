import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return NEWS.map((a) => ({ slug: a.id }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = NEWS.find((a) => a.id === slug);
    if (!article) return { title: "Nicht gefunden" };
    return {
      title: article.title,
      description: article.excerpt,
    };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS.find((a) => a.id === slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-12 pb-16">
        <div className="container max-w-3xl">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/50 text-sm mb-6 hover:text-gold transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Zurück zu News
          </Link>
          <span className="inline-block bg-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-white/50 mt-4">{article.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="font-bold text-xl uppercase text-navy mt-8 mb-4">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 my-4">
                    {para.split("\n").map((line, j) => (
                      <li key={j} className="text-gray-600">{line.replace(/^- /, "").replace(/\*\*/g, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para.split("**").map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-gray-900">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </div>

          {/* Share + Back */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link href="/news" className="btn btn-secondary">
              Alle News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
