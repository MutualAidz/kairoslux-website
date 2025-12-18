import { Search, Map, Book, Zap } from 'lucide-react';

function Compass() {
  const principles = [
    {
      number: '01',
      icon: Search,
      title: 'Deep listening to people and mission',
      description: 'We start from stories, not tools—the charism, history, and concrete pressures of your community.',
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

        <div className="mt-12 border-t border-[#0b1120]/10 pt-8">
          <p className="text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discern & Clarify → Design & Decide → Mission Impact Enhancement<br/>
            <span className="text-sm">The sections below unpack what that looks like in practice.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Compass;
