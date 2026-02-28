import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historie",
  description: "Die Geschichte der Iserlohn Roosters — Von der Gründung 1959 als EC Deilinghofen bis heute in der Deutschen Eishockey Liga.",
};

const TIMELINE = [
  { year: "1959", title: "Gründung als EC Deilinghofen", text: "Am 28. Februar 1959 gründen 17 Jugendliche und 7 Erwachsene den EC Deilinghofen. Die Inspiration kam von kanadischen Soldaten, die nach dem Koreakrieg in Deilinghofen stationiert waren und den Sport mitbrachten." },
  { year: "1962", title: "Erste Seniorenmannschaft", text: "Unter dem kanadischen Trainer Viktor Leury wird die erste Seniorenmannschaft aufgestellt — und gewinnt sofort die Gruppenmeisterschaft." },
  { year: "1969", title: "Westdeutscher Meister", text: "Der ECD wird Westdeutscher Meister. Erstmals setzen die Iserlohner auf kanadische Importspieler wie Warren von Tassel und John Mosher." },
  { year: "1977", title: "Das Wunder von Augsburg", text: "Nach einer 2:4-Heimniederlage im Relegations-Hinspiel gewinnt der ECD das Rückspiel sensationell 8:2 in Augsburg vor 8.000 Zuschauern — erstmaliger Aufstieg in die 1. Eishockey-Bundesliga." },
  { year: "1979", title: "Siggi Suttner — Held von Moskau", text: "ECD-Spieler Siggi Suttner wird bei der Eishockey-WM in Moskau zur Legende. Der Verein wird in ECD Iserlohn umbenannt." },
  { year: "1986", title: "Beste Bundesliga-Saison", text: "Die erfolgreichste Saison der Bundesliga-Ära: Mit Stars wie Jaroslav Pouzar und Martti Jarkko erreicht der ECD das Playoff-Halbfinale." },
  { year: "1987", title: "Der Gaddafi-Skandal", text: "Präsident Heinz Weifenbach schließt einen Werbevertrag mit Libyens Diktator Gaddafi. Die Mannschaft läuft mit Werbung für 'Das Grüne Buch' auf — nach nur zwei Spielen wird die Werbung verboten. Der Verein meldet Konkurs an." },
  { year: "1988", title: "Neuanfang als ECD Sauerland", text: "Neugründung als ECD Sauerland, Start in der Oberliga Nord. Sofort Oberliga-Meister, im Folgejahr Meister der 2. Bundesliga Nord unter Trainer Jozef Golonka." },
  { year: "1994", title: "Iserlohner EC gegründet", text: "Nach erneuter Insolvenz wird am 25. April 1994 der Iserlohner EC (IEC) gegründet. Neustart in der 3. Division — bereits 1995 gelingt der Aufstieg in die 1. Liga." },
  { year: "2000", title: "Iserlohn Roosters in der DEL", text: "Der IEC erwirbt die DEL-Lizenz der Starbulls Rosenheim. Die Profiabteilung wird als Iserlohn Roosters GmbH ausgegliedert — die DEL-Ära beginnt." },
  { year: "2008", title: "Beste DEL-Saison", text: "Unter Trainer Rick Aduono erreichen die Roosters den 5. Platz — die beste DEL-Platzierung der Vereinsgeschichte. Michael Wolf gewinnt die Scorerwertung der gesamten Liga." },
  { year: "2016", title: "Rekordsaison", text: "3. Platz nach der Hauptrunde, Rekord bei Dauerkartenverkäufen. Die Eissporthalle am Seilersee ist regelmäßig ausverkauft." },
  { year: "2019", title: "60 Jahre Eishockey in Iserlohn", text: "Großes Jubiläum — 60 Jahre Eishockeygeschichte aus dem Sauerland. Collin Danielsmeier knackt als einziger Spieler die Marke von 500 Spielen für Iserlohn." },
  { year: "2026", title: "DEL Saison 2025/26", text: "Die Roosters kämpfen unter Trainer Stefan Nyman um den Klassenerhalt in der DEL. Kapitän Daniel Fischbuch führt das Team in der Eissporthalle am Seilersee an." },
];

const LEGENDEN = [
  { name: "Michael Wolf", stat: "233 Tore, 452 Scorerpunkte — Allzeit-Topscorer" },
  { name: "Mike York", stat: "300 Spiele, 293 Punkte — Rekord-Import" },
  { name: "Collin Danielsmeier", stat: "500+ Spiele — einziger Spieler mit dieser Marke" },
  { name: "Jaroslav Pouzar", stat: "Tschechischer Nationalspieler — Star der 80er" },
  { name: "Siggi Suttner", stat: "\"Held von Moskau\" — WM 1979" },
];

export default function HistoriePage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Die Roosters</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Historie</h1>
          <p className="text-white/50 mt-2">Über 65 Jahre Eishockey aus dem Sauerland — von kanadischen Soldaten bis zur DEL</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            {TIMELINE.map((event) => (
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

      <section className="section bg-off-white">
        <div className="container max-w-3xl">
          <h2 className="section-title text-center">Legenden der Vereinsgeschichte</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {LEGENDEN.map((l) => (
              <div key={l.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-primary uppercase text-sm mb-1">{l.name}</h3>
                <p className="text-gray-500 text-sm">{l.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2 className="section-title">Die Namensgeschichte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { period: "1959–1979", name: "EC Deilinghofen" },
              { period: "1979–1987", name: "ECD Iserlohn" },
              { period: "1988–1994", name: "ECD Sauerland" },
              { period: "1994–2000", name: "Iserlohner EC" },
            ].map((n) => (
              <div key={n.period} className="bg-primary rounded-xl p-4 text-center">
                <p className="text-accent text-xs font-bold mb-1">{n.period}</p>
                <p className="text-white text-sm font-bold uppercase">{n.name}</p>
              </div>
            ))}
          </div>
          <p className="text-accent font-black uppercase text-lg mt-6">Seit 2000: Iserlohn Roosters</p>
        </div>
      </section>
    </>
  );
}
