import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanclubs",
  description: "Fanclubs der Iserlohn Roosters — Finde deinen Fanclub und werde Teil der Community.",
};

export default function FanclubsPage() {
  return (
    <>
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">Fanzone</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">Fanclubs</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <p className="text-gray-500 text-lg mb-8">
            Die Iserlohn Roosters werden von einer leidenschaftlichen Fan-Community unterstützt.
            Hier findest du eine Übersicht aller offiziellen Fanclubs.
          </p>
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-black uppercase text-primary mb-2">Du möchtest einen Fanclub gründen?</h2>
            <p className="text-gray-500 mb-4">Kontaktiere unsere ehrenamtlichen Fanbeauftragten für alle Informationen.</p>
            <a href="mailto:fans@iserlohn-roosters.de" className="btn btn-primary">Kontakt aufnehmen</a>
          </div>
        </div>
      </section>
    </>
  );
}
