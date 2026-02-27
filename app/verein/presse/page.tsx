import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Presse",
  description: "Presseinformationen der Iserlohn Roosters — Akkreditierung, Pressemitteilungen und Medienkontakt.",
};

export default function PressePage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Presse</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="section-title">Medien & Presse</h2>
          <p className="text-gray-500 text-lg mb-10 text-center">
            Hier finden Medienvertreter alle wichtigen Informationen rund um die Iserlohn Roosters.
          </p>

          <div className="space-y-6 mb-12">
            {/* Akkreditierung */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-navy mb-2">Akkreditierung</h3>
              <p className="text-gray-500 text-sm mb-4">
                Journalisten und Fotografen können sich für Heimspiele der Iserlohn Roosters akkreditieren lassen.
                Bitte senden Sie Ihre Anfrage mindestens 48 Stunden vor Spielbeginn an unsere Pressestelle.
              </p>
              <a href="mailto:presse@iserlohn-roosters.de" className="text-navy font-bold text-sm hover:text-purple transition-colors">
                presse@iserlohn-roosters.de →
              </a>
            </div>

            {/* Downloads */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-navy mb-2">Pressematerial</h3>
              <p className="text-gray-500 text-sm mb-4">
                Logos, Mannschaftsfotos und Factsheets stehen zum Download bereit.
                Für exklusive Anfragen wenden Sie sich bitte direkt an die Pressestelle.
              </p>
              <Link href="/kontakt" className="text-navy font-bold text-sm hover:text-purple transition-colors">
                Kontakt aufnehmen →
              </Link>
            </div>

            {/* Ansprechpartner */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg uppercase text-navy mb-2">Pressekontakt</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-bold text-navy">Iserlohn Roosters — Pressestelle</p>
                <p>Telefon: <a href="tel:+4923719519510" className="text-navy hover:text-purple transition-colors">02371 / 951 95 10</a></p>
                <p>E-Mail: <a href="mailto:presse@iserlohn-roosters.de" className="text-navy hover:text-purple transition-colors">presse@iserlohn-roosters.de</a></p>
              </div>
            </div>
          </div>

          <div className="bg-navy/5 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black uppercase text-navy mb-2">Aktuelle Meldungen</h3>
            <p className="text-gray-500 mb-4">Alle News und Pressemitteilungen finden Sie in unserem News-Bereich.</p>
            <Link href="/news" className="btn btn-primary">Zu den News</Link>
          </div>
        </div>
      </section>
    </>
  );
}
