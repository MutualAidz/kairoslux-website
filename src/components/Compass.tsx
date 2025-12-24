import { Search, Map, Book, Zap, Target, BarChart3, TrendingUp, BookOpen, Database, Archive } from 'lucide-react';
import SafeImage from './SafeImage';

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

  const missionDomains = [
    {
      icon: Target,
      title: 'Stakeholder & relationship operations',
      description: 'Donors, alumni, partners, volunteers, congregations—helping organisations focus on the right relationships at the right time and align engagement with mission.',
    },
    {
      icon: BarChart3,
      title: 'Reporting & narrative throughput',
      description: 'Boards, grants, impact updates, leadership comms—reducing the burden of complex reporting so staff can spend more time on program quality and accompaniment.',
    },
    {
      icon: TrendingUp,
      title: 'Operational visibility',
      description: 'Budgeting, forecasting, program ops, staffing capacity—working with complex data and models so leaders can see scenarios clearly and decide deliberately.',
    },
    {
      icon: BookOpen,
      title: 'Tradition‑aware decision support',
      description: 'Principles, policies, governance, Catholic identity—bringing CST and tradition into view at the moment of decision as an aid to human discernment.',
    },
    {
      icon: Database,
      title: 'Data strategy & readiness',
      description: 'Clarifying what data you have, what you need, and what is realistic—so AI decisions are responsible, secure, and grounded in actual capacity.',
    },
    {
      icon: Archive,
      title: 'Institutional memory',
      description: 'Documents, policies, precedents, and shared knowledge—so decisions are made with continuity, context, and the wisdom already present in the institution.',
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
              Kairos Compass is our evolving, CST-grounded orientation for discerning how AI changes work.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We start with mission: institutions meant to move deliberately to heal and serve—so technology supports people, presence, and the common good rather than capturing them.
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
            <SafeImage
              src="/images/compass-cross.png"
              alt="Radiant compass with sacramental symbols in a beam of light"
              className="compass-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/30"
              placeholderClassName="w-full max-w-lg rounded-lg border border-[#f5c96c]/20 bg-gradient-to-br from-[#0b1930]/5 to-[#f8f5f0]"
            />
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-3 border-l-4 border-[#f5c96c] pl-5 text-sm text-gray-700 leading-relaxed">
          <p>
            We favor privacy-first, sovereign patterns where your data and institutional memory remain under your governance, not a vendor’s.
          </p>
          <p>
            We use these practices to redesign mission work in common pressure points like the domains below.
          </p>
        </div>

        {/* Mission Domains Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-wider text-[#0b1120]/60 font-semibold">
              WHERE THIS SHOWS UP
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1120]">
              Mission work domains
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Common workflows where AI can help to relieve reporting and coordination burdens, to free more time for people and presence, and to support more dignified, creative work—so institutions can move deliberately to heal and serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionDomains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.title}
                  className="border border-[#0b1120]/10 rounded-lg p-6 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-white"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#f5c96c]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-[#0b1120] mb-2">
                        {domain.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compass;
