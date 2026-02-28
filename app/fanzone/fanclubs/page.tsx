import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanclubs",
  description: "Alle offiziellen Fanclubs der Iserlohn Roosters — über 25 Fanclubs aus dem Sauerland und darüber hinaus.",
};

const FANCLUBS = [
  { name: "Bauernpower Iserlohn '87", year: 1987, location: "Iserlohn" },
  { name: "EFC Bully-Express 1989 e.V.", year: 1989, location: "Iserlohn" },
  { name: "Powerplay Südsauerland", year: 1990, location: "Attendorn" },
  { name: "Die Sitzplatzkanacken", year: 1996, location: "Iserlohn" },
  { name: "Sauerländer Schlittenhunde", year: 1997, location: "Neheim-Hüsten" },
  { name: "EFC Börde-Roosters e.V.", year: 1999, location: "Werl" },
  { name: "Ghostbusters Balve", year: 2001, location: "Balve" },
  { name: "Unschuldsengel-Iserlohn e.V.", year: 2001, location: "Iserlohn" },
  { name: "Iserlohn Blue Liners", year: 2002, location: "Iserlohn" },
  { name: "Blue-Roosters", year: 2003, location: "Iserlohn" },
  { name: "Hellweg Roosters", year: 2003, location: "Erwitte" },
  { name: "IEC-Fans Ihnetal", year: 2004, location: "Meinerzhagen" },
  { name: "Iserlohn-Outsiders", year: 2006, location: "Letmathe" },
  { name: "Rauten-Roosters", year: 2012, location: "München" },
  { name: "Sauerländer Knallketten", year: 2014, location: "Menden" },
  { name: "Die Exklusiven Stehplätze", year: 2014, location: "Sauerland" },
  { name: "Sektion Siegerland", year: 2014, location: "Siegerland" },
  { name: "Sauerländer Bauerntölpel", year: 2015, location: "Hemer" },
  { name: "Seseke-Säcke", year: 2016, location: "Kamen" },
  { name: "Dauerblau Iserlohn", year: 2017, location: "Iserlohn" },
  { name: "Dithmarscher Sauerländer", year: 2017, location: "Überregional" },
  { name: "Stumpfe Kufe Iserlohn", year: 2018, location: "Lüdenscheid" },
  { name: "IEC-Fanclub Kufencracks", year: 2022, location: "Iserlohn" },
  { name: "Stockbeißer", year: 2022, location: "Iserlohn" },
  { name: "Bierhähne Iserlohn", year: 2024, location: "Iserlohn" },
  { name: "Sauerländer Schlägertaper", year: 2024, location: "Hagen" },
];

export default function FanclubsPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Fanclubs</h1>
          <p className="text-white/50 mt-2">{FANCLUBS.length} offizielle Fanclubs — eine der größten Fanszenen im deutschen Eishockey</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 mb-10 text-center">
            <p className="text-primary text-lg font-bold mb-2">Die Roosters-Familie</p>
            <p className="text-gray-500">
              Trotz der kleinsten Arena der DEL haben die Iserlohn Roosters eine der aktivsten und leidenschaftlichsten Fanszenen im europäischen Eishockey.
              Vom Sauerland bis München — unsere Fans sind überall.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {FANCLUBS.map((fc) => (
              <div key={fc.name} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-black text-xs">{fc.year}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-primary truncate">{fc.name}</h3>
                  <p className="text-gray-400 text-xs">{fc.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container max-w-3xl text-center">
          <h2 className="section-title">Eigenen Fanclub gründen?</h2>
          <p className="text-gray-500 mb-6">
            Du möchtest einen neuen Fanclub ins Leben rufen? Kontaktiere unsere Fanbeauftragten — wir helfen dir bei der Gründung und der offiziellen Anerkennung.
          </p>
          <a href="mailto:fans@iserlohn-roosters.de" className="btn btn-primary">Kontakt aufnehmen</a>
        </div>
      </section>
    </>
  );
}
