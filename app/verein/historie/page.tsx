import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historie",
  description: "Die Geschichte der Iserlohn Roosters — Von der Gründung 1959 bis heute in der Deutschen Eishockey Liga.",
};

const TIMELINE = [
  { year: "1959", title: "Gründung", text: "Gründung des EC Iserlohn als Eishockeyverein im Sauerland." },
  { year: "1977", title: "Aufstieg Bundesliga", text: "Erstmaliger Aufstieg in die Eishockey-Bundesliga." },
  { year: "1994", title: "DEL-Gründungsmitglied", text: "Die Iserlohn Roosters gehören zu den Gründungsmitgliedern der Deutschen Eishockey Liga." },
  { year: "2000", title: "Umzug Seilersee", text: "Die neue Eissporthalle am Seilersee wird zur Heimat der Roosters." },
  { year: "2005", title: "Playoff-Teilnahme", text: "Erfolgreiche Saison mit Einzug in die DEL-Playoffs." },
  { year: "2010", title: "Rekordsaison", text: "Die Roosters erreichen die beste Platzierung der Vereinsgeschichte." },
  { year: "2019", title: "60 Jahre Roosters", text: "Großes Jubiläum — 60 Jahre Eishockey in Iserlohn." },
  { year: "2025", title: "DEL Saison 2025/26", text: "Die Roosters starten in eine neue Saison mit dem Ziel, die DEL-Zugehörigkeit weiter zu festigen." },
];

export default function HistoriePage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Die Roosters</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Historie</h1>
          <p className="text-white/50 mt-2">Über 60 Jahre Eishockey aus dem Sauerland</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            {TIMELINE.map((event, i) => (
              <div key={event.year} className="relative pl-16 pb-10 last:pb-0">
                <div className="absolute left-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center z-10">
                  <span className="text-accent font-black text-xs">{event.year}</span>
                </div>
                <h3 className="font-bold text-lg uppercase text-primary mb-1">{event.title}</h3>
                <p className="text-gray-500">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
