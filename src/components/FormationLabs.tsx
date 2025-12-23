function FormationLabs() {
  const offerings = [
    {
      title: 'AI Discernment Call',
      description: 'A 60–90 minute conversation with key decision-makers to surface hopes, fears, existing experiments, and constraints. You receive a short Kairos Note summarising what we heard, how we see the situation through CST, and whether the best next step is formation, a design sprint, or waiting.',
    },
    {
      title: 'CST & AI Foundations Briefing (90–120 min)',
      description: 'A board or leadership team briefing we can facilitate. We name the disruption and anxiety honestly, introduce AI through the lenses of Catholic Social Teaching and Pope Leo\'s teaching, and explore both real risks and upside possibilities. The goal is clarity and shared language, not hype or blanket rejection.',
    },
  ];

  return (
    <section id="discern-clarify" className="py-20 px-6 bg-[#0b1930]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-4">
          Path 1
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Discern & Clarify
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-6">
          For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.
        </p>

        <div className="text-sm text-gray-300 max-w-4xl mb-12 space-y-1">
          <p><span className="font-semibold">Decision-specific</span> → Discernment Call</p>
          <p><span className="font-semibold">Shared baseline</span> → Foundations Briefing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        <div className="max-w-4xl">
          <div className="rounded-lg border border-[#f5c96c]/40 bg-white/5 p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Board-ready Discernment Dossier
            </h3>
            <p className="text-gray-200 leading-relaxed">
              A concise memo for leadership or boards: context, options, risks, and a recommended next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormationLabs;
