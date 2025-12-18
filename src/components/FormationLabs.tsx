function FormationLabs() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const offerings = [
    {
      title: 'AI Discernment Call',
      description: 'A 60–90 minute conversation with key decision-makers to surface hopes, fears, existing experiments, and constraints. You receive a short Kairos Note summarising what we heard, how we see the situation through CST, and whether the best next step is formation, a design sprint, or waiting.',
    },
    {
      title: 'CST & AI Foundations Seminar (2–3 hours)',
      description: 'A 2–3 hour session for boards, leadership teams, or AI task forces. We name the disruption and anxiety honestly, introduce AI through the lenses of Catholic Social Teaching and Pope Leo\'s teaching, and explore both real risks and upside possibilities. The goal is clarity and shared language, not hype or blanket rejection.',
    },
    {
      title: 'Board Notes & Discernment Dossiers',
      description: 'Short, tailored internal notes for boards and leadership teams. Building on calls or seminars, we synthesise your context, highlight CST tensions and opportunities, and outline a few options in plain language. These are working documents for prayerful, strategic discernment—not glossy public white papers.',
    },
  ];

  return (
    <section id="discern-clarify" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold mb-4">
          Path 1
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120] mb-6">
          Discern & Clarify
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-12">
          For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="border border-[#f5c96c]/30 rounded-lg p-6 space-y-4 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FormationLabs;
