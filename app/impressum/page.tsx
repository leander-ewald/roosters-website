import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Iserlohn Roosters GmbH — Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Impressum</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-xl font-black uppercase text-navy mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="text-sm text-gray-600 space-y-1 mb-8">
            <p className="font-bold text-navy text-base">Iserlohn Roosters GmbH</p>
            <p>Seilerseestraße 105</p>
            <p>58636 Iserlohn</p>
          </div>

          <h3 className="text-lg font-bold text-navy mb-2">Kontakt</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-8">
            <p>Telefon: 02371 / 951 95 10</p>
            <p>Fax: 02371 / 951 95 19</p>
            <p>E-Mail: info@iserlohn-roosters.de</p>
          </div>

          <h3 className="text-lg font-bold text-navy mb-2">Vertretungsberechtigter Geschäftsführer</h3>
          <p className="text-sm text-gray-600 mb-8">Wolfgang Brück</p>

          <h3 className="text-lg font-bold text-navy mb-2">Registereintrag</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-8">
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: Amtsgericht Iserlohn</p>
            <p>Registernummer: HRB 6556</p>
          </div>

          <h3 className="text-lg font-bold text-navy mb-2">Umsatzsteuer-ID</h3>
          <p className="text-sm text-gray-600 mb-8">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: wird nachgereicht.
          </p>

          <h3 className="text-lg font-bold text-navy mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-8">
            <p>Wolfgang Brück</p>
            <p>Seilerseestraße 105</p>
            <p>58636 Iserlohn</p>
          </div>

          <h3 className="text-lg font-bold text-navy mb-2">Haftungsausschluss</h3>
          <h4 className="text-sm font-bold text-navy mb-1">Haftung für Inhalte</h4>
          <p className="text-sm text-gray-600 mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <h4 className="text-sm font-bold text-navy mb-1">Haftung für Links</h4>
          <p className="text-sm text-gray-600 mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>

          <h4 className="text-sm font-bold text-navy mb-1">Urheberrecht</h4>
          <p className="text-sm text-gray-600">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>
    </>
  );
}
