export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-purple/30" />
        <div className="relative z-10 container text-center text-white py-20">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Deutsche Eishockey Liga
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
            Iserlohn
            <br />
            <span className="text-gold">Roosters</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Eishockey aus dem Herzen des Sauerlands. Leidenschaft, Tradition und
            Kampfgeist seit 1959.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tickets.iec.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base px-8 py-4"
            >
              Tickets sichern
            </a>
            <a
              href="https://shop.iec.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-base px-8 py-4"
            >
              Fanshop
            </a>
          </div>
        </div>
      </section>

      {/* Next Game */}
      <section className="bg-gray-100 py-12">
        <div className="container">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
              Nächstes Spiel
            </p>
            <div className="flex items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-navy rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-gold font-black text-lg">IR</span>
                </div>
                <p className="font-bold text-sm uppercase">Roosters</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-navy">VS</p>
                <p className="text-sm text-gray-500 mt-1">Fr. 19:30 Uhr</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-gray-500 font-black text-lg">?</span>
                </div>
                <p className="font-bold text-sm uppercase">Gegner</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://tickets.iec.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Tickets kaufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Aktuelle News</h2>
            <a href="/news" className="text-navy font-bold text-sm uppercase tracking-wider hover:text-purple transition-colors">
              Alle News &rarr;
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article key={i} className="card group">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/80">
                    27. Feb. 2026
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg uppercase leading-tight mb-2 group-hover:text-purple transition-colors">
                    Spielbericht: Roosters siegen auswärts
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    Die Iserlohn Roosters konnten sich in einem spannenden
                    Auswärtsspiel durchsetzen und wichtige Punkte mitnehmen.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-gray-100 py-12">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Unsere Partner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Raab Karcher", "Märkische Bank", "Krombacher", "Böhm Kabel", "Kirchhoff", "Stadtwerke Iserlohn"].map((name) => (
              <span
                key={name}
                className="text-gray-400 hover:text-navy text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
            Werde Teil der <span className="text-gold">Roosters-Familie</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Sichere dir deine Dauerkarte, werde Mitglied oder unterstütze uns als
            Sponsor. Gemeinsam sind wir stärker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/verein/mitgliedschaft" className="btn btn-gold">
              Mitglied werden
            </a>
            <a href="/sponsoring" className="btn btn-outline">
              Sponsor werden
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
