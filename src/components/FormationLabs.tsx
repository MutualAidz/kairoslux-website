function FormationLabs() {
  const entryPoints = [
    {
      title: 'Intro call (free)',
      description: 'A short first conversation to understand your context and name what would make the next step clearer. If there\'s a fit, we\'ll recommend a bounded next engagement.',
      footer: 'No prep required.',
    },
    {
      title: 'AI discernment session (60–90 min)',
      description: 'A focused conversation with key decision‑makers to surface pressures, hopes, constraints, and the mission logic underneath them.',
      footer: 'Leads to a Kairos Note.',
    },
    {
      title: 'CST & AI foundations briefing (for boards or teams)',
      description: 'A facilitated session that builds shared language: real risks, real possibilities, and CST lenses for thinking without hype or blanket rejection.',
      footer: 'Useful before major decisions.',
    },
    {
      title: 'CST–AI lab session (by request)',
      description: 'For organisations that want deeper theological grounding and practical imagination together—connecting CST, real workflows, and responsible AI use.',
      footer: 'Format varies by context.',
    },
  ];

  return (
    <section id="discern-clarify" className="py-20 px-6 bg-[#0b1930]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-4">
          Movement 1
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Discern & Clarify
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-6">
          For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.
        </p>

        <p className="text-base text-gray-200 leading-relaxed max-w-4xl mb-8">
          Everyone is arriving at AI from a different place. We start by discerning what kind of clarity you need—shared language, decision framing, or board‑ready guidance—then propose the smallest next step.
        </p>

        <p className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-4">
          Common entry points
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {entryPoints.map((point) => (
            <div
              key={point.title}
              className="border border-[#f5c96c]/30 rounded-lg p-6 space-y-3 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]"
            >
              <h3 className="text-lg font-serif font-bold text-[#0b1120]">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {point.description}
              </p>
              <p className="text-xs text-gray-500 italic">
                {point.footer}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-4">
          What you receive
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#f5c96c]/30 rounded-lg p-6 space-y-3 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]">
            <h3 className="text-lg font-serif font-bold text-[#0b1120]">
              Kairos Note
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              A concise written summary: what we heard, how it looks through CST, and a recommended next step.
            </p>
          </div>

          <div className="border border-[#f5c96c]/30 rounded-lg p-6 space-y-3 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]">
            <h3 className="text-lg font-serif font-bold text-[#0b1120]">
              Board‑ready discernment dossier
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              A board‑ready memo that translates discernment into governance: context, credible options, key risks/tradeoffs, and a recommended path forward.
            </p>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-[#f5c96c] mr-2">•</span>
                <span>Decision framing and guardrails grounded in CST</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-[#f5c96c] mr-2">•</span>
                <span>What would need to be true for each option</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-[#f5c96c] mr-2">•</span>
                <span>A near‑term &apos;start here&apos; recommendation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormationLabs;
