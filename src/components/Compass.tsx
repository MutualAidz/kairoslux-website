import { Search, Map, Book, Zap } from 'lucide-react';

function Compass() {
  const principles = [
    {
      number: '01',
      icon: Search,
      title: 'Listen for mission',
      description: 'We start from stories, charisms, and real constraints—so the problem is named in the light of mission, not tools.',
    },
    {
      number: '02',
      icon: Map,
      title: 'Map the work',
      description: 'We look beyond the chatbot window at workflows, bottlenecks, and decision points where change would actually help.',
    },
    {
      number: '03',
      icon: Book,
      title: 'Let CST guide choices',
      description: 'We bring Catholic Social Teaching into concrete tradeoffs—governance, policy, budgets, and what you refuse to sacrifice.',
    },
    {
      number: '04',
      icon: Zap,
      title: 'Design high‑leverage changes',
      description: 'We identify a small set of focused moves that reduce burden and build momentum without over‑engineering.',
    },
  ];

  return (
    <section id="compass" className="py-16 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">
              How we work
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120]">
              The Kairos Compass
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Kairos Compass is our evolving framework for CST-grounded discernment about AI and work—so mission stays primary as technology changes around you. It helps leadership teams move from anxiety to clear next steps without hype, blanket rejection, or vendor capture.
            </p>

            <p className="text-xs uppercase tracking-wider text-[#0b1120]/60 font-semibold pt-6">
              Four Compass practices
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.number} className="flex flex-col gap-2 group">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0b1120] flex items-center justify-center group-hover:bg-[#f5c96c] transition-colors">
                          <Icon className="w-5 h-5 text-[#f5c96c] group-hover:text-[#0b1120]" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-[#0b1120] text-base">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm pl-13">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-start">
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
