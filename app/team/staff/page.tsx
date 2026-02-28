import type { Metadata } from "next";
import Image from "next/image";
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

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  coaching: (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  medical: (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  equipment: (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
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
      <section className="bg-primary pt-12 pb-16">
        <div className="container">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-2">
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
                {CATEGORY_ICONS[category]}
                <h2 className="text-xl font-black uppercase text-primary">
                  {CATEGORY_LABELS[category]}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                  >
                    <div className="w-full aspect-[3/4] bg-primary overflow-hidden">
                      {member.image ? (
                        <Image src={member.image} alt={member.name} width={300} height={400} className="w-full h-full object-cover object-top" unoptimized />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-accent font-black text-4xl">{member.name.split(" ").map(n => n[0]).join("")}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-base uppercase">{member.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                    </div>
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
