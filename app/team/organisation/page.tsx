import type { Metadata } from "next";
import { ORGANISATION } from "@/lib/team";

export const metadata: Metadata = {
  title: "Organisation",
  description: "Geschäftsführung und Geschäftsstelle der Iserlohn Roosters GmbH.",
};

export default function OrganisationPage() {
  const grouped = ORGANISATION.reduce((acc, member) => {
    if (!acc[member.department]) acc[member.department] = [];
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, typeof ORGANISATION>);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Team
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            Organisation
          </h1>
          <p className="text-white/50 mt-2">Iserlohn Roosters GmbH</p>
        </div>
      </section>

      {/* Organisation */}
      <section className="section">
        <div className="container max-w-4xl">
          {Object.entries(grouped).map(([department, members]) => (
            <div key={department} className="mb-10">
              <h2 className="text-lg font-black uppercase text-primary mb-4 border-b-2 border-primary pb-2">
                {department}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-accent font-black text-xl">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base uppercase">{member.name}</h3>
                      <p className="text-gray-400 text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-white">
            <h2 className="text-xl font-black uppercase mb-4">Geschäftsstelle</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-white/70 text-sm">
              <div>
                <p className="font-bold text-white mb-1">Adresse</p>
                <p>Iserlohn Roosters GmbH</p>
                <p>Seilerseestraße 105</p>
                <p>58636 Iserlohn</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Kontakt</p>
                <p>Tel: 02371 / 951 95 10</p>
                <p>Fax: 02371 / 951 95 19</p>
                <p>info@iserlohn-roosters.de</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
