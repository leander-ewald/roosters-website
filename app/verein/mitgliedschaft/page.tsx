import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitgliedschaft",
  description: "Werde Mitglied bei den Iserlohn Roosters — Alle Infos zu Beiträgen, Vorteilen und Anmeldung.",
};

const PLANS = [
  {
    name: "Einzelmitglied",
    price: "60",
    period: "Jahr",
    features: ["Mitgliederausweis", "10% Rabatt im Fanshop", "Vorkaufsrecht Saisonkarten", "Einladung zur Jahreshauptversammlung", "Mitglieder-Newsletter"],
    highlighted: false,
  },
  {
    name: "Familienmitglied",
    price: "90",
    period: "Jahr",
    features: ["Alles aus Einzelmitglied", "Für die ganze Familie", "Kinder unter 14 kostenlos", "Familien-Events", "Gratis Kids Club Zugang"],
    highlighted: true,
  },
  {
    name: "Lebenslange Mitgliedschaft",
    price: "750",
    period: "einmalig",
    features: ["Alle Vorteile dauerhaft", "Exklusiver Pin", "Name auf der Ehrenwand", "VIP-Einladungen", "Besondere Urkunde"],
    highlighted: false,
  },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Verein</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Mitgliedschaft</h1>
          <p className="text-white/50 mt-2">Werde Teil der Roosters-Familie</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-lg mb-6">
              Als Mitglied des Iserlohner EC e.V. unterstützt du den Verein hinter den Roosters — den Trägerverein,
              der seit 1959 Eishockey im Sauerland ermöglicht. Aktuell zählt der IEC über 2.500 Mitglieder.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "2.500+", label: "Mitglieder" },
                { value: "65+", label: "Jahre Tradition" },
                { value: "10%", label: "Fanshop-Rabatt" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-8">Mitgliedschafts-Modelle</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 ${plan.highlighted ? "bg-primary text-white ring-2 ring-gold scale-105" : "bg-white border border-gray-200"}`}>
                {plan.highlighted && (
                  <span className="inline-block bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Beliebt</span>
                )}
                <h3 className={`font-bold text-lg uppercase mb-2 ${plan.highlighted ? "text-white" : "text-primary"}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlighted ? "text-accent" : "text-primary"}`}>{plan.price}€</span>
                  <span className={`text-sm ml-1 ${plan.highlighted ? "text-white/50" : "text-gray-400"}`}>/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className={`btn w-full ${plan.highlighted ? "btn-accent" : "btn-primary"}`}>
                  Mitglied werden
                </Link>
              </div>
            ))}
          </div>

          {/* Why join */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="section-title text-center mb-8">Warum Mitglied werden?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Stimmrecht", desc: "Du hast eine Stimme bei der Jahreshauptversammlung und bestimmst die Zukunft des Vereins mit." },
                { title: "Exklusive Events", desc: "Mitglieder werden zu besonderen Veranstaltungen wie Saisonabschluss, Meet & Greet und Trainingsbesuch eingeladen." },
                { title: "Fanshop-Rabatt", desc: "10% Rabatt auf alle Artikel im offiziellen Fanshop — online und am Spieltag." },
                { title: "Dauerkarten-Vorkauf", desc: "Mitglieder haben Vorkaufsrecht auf Dauerkarten und erhalten diese vor dem öffentlichen Verkaufsstart." },
              ].map((b) => (
                <div key={b.title} className="bg-primary/5 rounded-xl p-5">
                  <h4 className="font-bold text-sm uppercase text-primary mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Anmeldung */}
          <div className="max-w-3xl mx-auto mt-12 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-black uppercase mb-3">Jetzt Mitglied werden</h3>
            <p className="text-white/60 mb-6">
              Die Anmeldung erfolgt über die Geschäftsstelle oder per E-Mail. Du erhältst deinen Mitgliedsausweis
              innerhalb von 14 Tagen per Post.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:mitglied@iserlohn-roosters.de?subject=Mitgliedschafts-Anfrage" className="btn btn-accent">Per E-Mail anmelden</a>
              <a href="tel:+4923719519510" className="btn btn-outline">02371 / 951 95 10</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
