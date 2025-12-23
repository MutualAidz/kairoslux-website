import { Target, Users, BookOpen, Scale, Building2, Heart } from 'lucide-react';

function Compass() {
  const missionDomains = [
    {
      icon: Target,
      title: 'Mission integrity',
      description: 'Formation, charism, Catholic identity, tradition-grounded decisions',
    },
    {
      icon: Users,
      title: 'People & relationships',
      description: 'Donors, alumni, stakeholders, congregation, community engagement',
    },
    {
      icon: BookOpen,
      title: 'Communications & narrative',
      description: 'Reporting, storytelling, board updates, grant narratives, public witness',
    },
    {
      icon: Scale,
      title: 'Operations & governance',
      description: 'Budgets, forecasts, program ops, decision support, visibility',
    },
    {
      icon: Building2,
      title: 'Institutional memory',
      description: 'Archives, transitions, knowledge continuity, congregational wisdom',
    },
    {
      icon: Heart,
      title: 'Worker dignity & reskilling',
      description: 'Formation, capability-building, meaningful work, accompaniment in transition',
    },
  ];

  return (
    <section id="compass" className="py-20 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">
              How we work
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120]">
              The Kairos Compass
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Kairos Compass is our evolving framework for CST-grounded discernment about AI and work. It's how we bring intelligence and spirit into the same conversation, and how we move from anxiety to clear next steps.
            </p>
          </div>

          <div className="flex justify-center items-start">
            <img
              src="/images/compass-vision.png"
              alt="Radiant compass with sacramental symbols in a beam of light"
              className="compass-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/30"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-[#0b1120] mb-6 text-center">
            Six Mission Domains
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {missionDomains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div key={domain.title} className="flex flex-col gap-3 group border border-[#0b1120]/10 rounded-lg p-6 bg-white hover:border-[#f5c96c] hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#0b1120] flex items-center justify-center group-hover:bg-[#f5c96c] transition-colors">
                        <Icon className="w-5 h-5 text-[#f5c96c] group-hover:text-[#0b1120]" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-[#0b1120] text-base">
                      {domain.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {domain.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#0b1120]/10 pt-8 space-y-4">
          <p className="text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The sections below unpack what this looks like in practice.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <a
              href="#discern-clarify"
              className="group flex items-center justify-between border border-[#0b1120]/10 rounded-lg px-6 py-5 bg-white hover:border-[#f5c96c] hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">Path 1</p>
                <p className="text-xl font-semibold text-[#0b1120]">Discern & Clarify</p>
                <p className="text-base text-gray-600">Shared language and grounded priorities.</p>
              </div>
              <span className="text-[#f5c96c] font-semibold text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#design-decide"
              className="group flex items-center justify-between border border-[#0b1120]/10 rounded-lg px-6 py-5 bg-white hover:border-[#f5c96c] hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">Path 2</p>
                <p className="text-xl font-semibold text-[#0b1120]">Design & Decide</p>
                <p className="text-base text-gray-600">Focused options, CST guardrails, and clear choices.</p>
              </div>
              <span className="text-[#f5c96c] font-semibold text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#mission-impact"
              className="group flex items-center justify-between border border-[#0b1120]/10 rounded-lg px-6 py-5 bg-white hover:border-[#f5c96c] hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">Path 3</p>
                <p className="text-xl font-semibold text-[#0b1120]">Mission Impact Work</p>
                <p className="text-base text-gray-600">Build and pilot the plan with your teams.</p>
              </div>
              <span className="text-[#f5c96c] font-semibold text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6 max-w-3xl mx-auto">
            Most engagements start as a bounded call, sprint, or pilot—so we can learn quickly, protect staff capacity, and avoid over-promising.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Compass;
