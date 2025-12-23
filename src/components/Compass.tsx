import { Search, Map, Book, Zap, Target, BarChart3, TrendingUp, BookOpen, Database, Archive } from 'lucide-react';

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

  const missionDomains = [
    {
      icon: Target,
      title: 'Stakeholder & relationship operations',
      description: 'Donors, alumni, partners, volunteers, congregations—helping organizations focus on the right relationships at the right time, surface opportunities, and align engagement with mission.',
    },
    {
      icon: BarChart3,
      title: 'Reporting & narrative throughput',
      description: 'Boards, grants, impact updates, leadership comms—reducing the burden of complex reporting work so staff can spend more time on program quality and accompaniment.',
    },
    {
      icon: TrendingUp,
      title: 'Operational visibility',
      description: 'Budgeting, forecasting, program ops, staffing capacity—working with complex data and models so leaders can see scenarios more clearly and make decisions more quickly.',
    },
    {
      icon: BookOpen,
      title: 'Tradition-aware decision support',
      description: 'Principles, policies, governance, Catholic identity—exploring tools that bring CST and tradition into view at the moment of decision, always as an aid to human discernment, never a substitute for it.',
    },
    {
      icon: Database,
      title: 'Data strategy and readiness',
      description: 'Assessment and planning for organizations looking to understand their data landscape and prepare for AI-enabled workflows.',
    },
    {
      icon: Archive,
      title: 'Institutional memory',
      description: 'Preserving and surfacing organizational knowledge, history, and charism to inform present decisions and future generations.',
    },
  ];

  return (
    <section id="compass" className="py-20 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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

            <h3 className="text-2xl font-serif font-bold text-[#0b1120] pt-6">
              Mission Domains
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {missionDomains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div key={domain.title} className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0b1120] flex items-center justify-center group-hover:bg-[#f5c96c] transition-colors">
                          <Icon className="w-5 h-5 text-[#f5c96c] group-hover:text-[#0b1120]" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-[#0b1120] text-sm">
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

            <h3 className="text-2xl font-serif font-bold text-[#0b1120] pt-8">
              Our Approach
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.number} className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0b1120] flex items-center justify-center group-hover:bg-[#f5c96c] transition-colors">
                          <Icon className="w-5 h-5 text-[#f5c96c] group-hover:text-[#0b1120]" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-[#0b1120] text-sm">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
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

      </div>
    </section>
  );
}

export default Compass;
