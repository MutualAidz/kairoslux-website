import { Search, Map, Book, Zap } from 'lucide-react';

function Compass() {
  const principles = [
    {
      number: '01',
      icon: Search,
      title: 'Deep listening to people and mission',
      description: 'We start from stories, not tools—the charism, history, and concrete pressures and aspirations of your community.',
    },
    {
      number: '02',
      icon: Map,
      title: 'Mapping workflows and bottlenecks',
      description: 'We look beyond the chatbot window at real constraints and workflows, identifying where AI support might relieve unnecessary load or open new space for mission.',
    },
    {
      number: '03',
      icon: Book,
      title: 'Letting Catholic Social Teaching and tradition speak into decisions',
      description: 'We name the CST values already shaping your institution, and begin to bring relevant texts and traditions alongside them so they can guide concrete choices about tools, workflows, and budgets—grounding decisions in a living body of moral intelligence rather than vendor pressure or hunches.',
    },
    {
      number: '04',
      icon: Zap,
      title: 'Designing focused, high‑impact changes',
      description: 'We work with you to identify high-leverage changes—specific workflows and decisions where AI support will most directly ease pressure and advance your mission—and then build momentum by starting there.',
    },
  ];

  return (
    <section id="compass" className="py-20 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="bg-[#f5c96c]/10 border-l-4 border-[#f5c96c] p-6 rounded-r-lg my-6">
              <h3 className="text-lg font-semibold text-[#0b1120] mb-2">
                What we mean by redesigning work
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI adoption isn't a plug-in—it changes decisions, workflows, and architecture. We help institutions redesign work with CST as a real constraint: clearer governance, humane workflows, and tools that serve people rather than capture them.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.number} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#0b1120] flex items-center justify-center group-hover:bg-[#f5c96c] transition-colors">
                        <Icon className="w-6 h-6 text-[#f5c96c] group-hover:text-[#0b1120]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0b1120] mb-1">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/images/compass-vision.png"
              alt="Radiant compass with sacramental symbols in a beam of light"
              className="compass-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/30"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-[#0b1120]/10 pt-8 space-y-4">
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
