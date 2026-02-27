import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Iserlohn Roosters GmbH — Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Datenschutz</h1>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-xl font-black uppercase text-primary mb-4">Datenschutzerklärung</h2>

          <div className="space-y-8 text-sm text-gray-600">
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">1. Datenschutz auf einen Blick</h3>
              <p className="mb-2">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
              </p>
              <p>
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">2. Verantwortliche Stelle</h3>
              <div className="space-y-1 mb-4">
                <p className="font-bold text-primary">Iserlohn Roosters GmbH</p>
                <p>Seilerseestraße 105</p>
                <p>58636 Iserlohn</p>
                <p>Telefon: 02371 / 951 95 10</p>
                <p>E-Mail: info@iserlohn-roosters.de</p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">3. Datenerfassung auf unserer Website</h3>
              <h4 className="font-bold text-primary mb-1">Server-Log-Dateien</h4>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
                des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <h4 className="font-bold text-primary mb-1">Kontaktformular</h4>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">4. Cookies</h3>
              <p>
                Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem
                Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser
                Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von
                uns verwendeten Cookies sind sogenannte Session-Cookies. Sie werden nach Ende Ihres
                Besuchs automatisch gelöscht.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">5. Newsletter</h3>
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir
                von Ihnen eine E-Mail-Adresse. Die Verarbeitung der in das Newsletteranmeldeformular
                eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6
                Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten und deren
                Nutzung zum Newsletterversand können Sie jederzeit widerrufen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">6. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit an uns wenden.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6">
              <p className="text-gray-500">
                <strong className="text-primary">Stand:</strong> Februar 2026. Diese Datenschutzerklärung wird regelmäßig
                aktualisiert. Änderungen werden auf dieser Seite veröffentlicht.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
