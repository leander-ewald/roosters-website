import type { Metadata } from "next";
import { STAFF } from "@/lib/team";

export const metadata: Metadata = {
  title: "Staff",
  description: "Trainer und Betreuer der Iserlohn Roosters — Coaching-Staff, medizinisches Team und Betreuer.",
};

const CATEGORY_LABELS: Record<string, string> = {
  coaching: "Coaching Staff",
  medical: "Medizin & Athletik",
  equipment: "Equipment & Betreuung",
};

const CATEGORY_ICONS: Record<string, string> = {
  coaching: "🏒",
  medical: "⚕️",
  equipment: "🔧",
};

export default function StaffPage() {
  const grouped = STAFF.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, typeof STAFF>);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-12 pb-16">
        <div className="container">
          <p className="text-purple text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Team
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            Staff
          </h1>
        </div>
      </section>

      {/* Staff */}
      <section className="section">
        <div className="container max-w-4xl">
          {Object.entries(grouped).map(([category, members]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
                <h2 className="text-xl font-black uppercase text-navy">
                  {CATEGORY_LABELS[category]}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-3">
                      <span className="text-gold font-black text-lg">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="font-bold text-base uppercase">{member.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
