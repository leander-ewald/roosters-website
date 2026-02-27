import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Roosters Newsletter abonnieren — News, Spielberichte und exklusive Aktionen direkt ins Postfach.",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Newsletter</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="section-title">Immer auf dem Laufenden</h2>
          <p className="text-gray-500 mb-8">
            Erhalte News, Spielberichte, Ticket-Angebote und exklusive Aktionen direkt in dein Postfach.
          </p>
          <form className="space-y-4" action="#">
            <input type="email" placeholder="Deine E-Mail-Adresse" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none" />
            <button type="submit" className="btn btn-primary w-full py-4">Newsletter abonnieren</button>
            <p className="text-xs text-gray-400">Mit der Anmeldung stimmst du unserer Datenschutzerklärung zu. Du kannst dich jederzeit abmelden.</p>
          </form>
        </div>
      </section>
    </>
  );
}
