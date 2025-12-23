import { Target, BarChart3, TrendingUp, BookOpen, Zap, HelpCircle } from 'lucide-react';

function MissionImpact() {
  const practices = [
    {
      icon: Zap,
      title: 'Designing focused, high-impact changes',
      description: 'We work with you to identify high-leverage changes—specific workflows and decisions where AI support will most directly ease pressure and advance your mission—and then build momentum by starting there.',
    },
  ];

  const guidingQuestions = [
    'What does success look like for this pilot or workflow?',
    'How will we measure impact on both mission effectiveness and staff wellbeing?',
    'What CST guardrails need to be in place before we start?',
    'Who needs to be involved, and how do we protect their capacity?',
    'How do we learn quickly and adapt without over-engineering?',
  ];

  const impactAreas = [
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
  ];

  return (
    <section id="mission-impact" className="py-20 px-6 bg-[#0b1930] text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-4">
          Path 3
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Mission Impact Work
        </h2>

        <h3 className="text-2xl font-serif text-gray-100 mb-6">
          Workflows and projects that put discernment into practice.
        </h3>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-12">
          Path 2 designs the plan; Path 3 implements it with your teams. Once a direction is chosen, we collaborate on carefully scoped workflows and projects—sometimes pilots, sometimes small internal tools—that test what's possible without over-engineering.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Core Practice</h3>
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <div
                key={practice.title}
                className="border border-[#f5c96c]/30 rounded-lg p-8 bg-white/5"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#f5c96c] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0b1120]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">
                      {practice.title}
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Guiding Questions</h3>
          <div className="border border-[#f5c96c]/30 rounded-lg p-8 bg-white/5">
            <ul className="space-y-4">
              {guidingQuestions.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#f5c96c] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 leading-relaxed">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Example Impact Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="border border-[#f5c96c]/30 rounded-lg p-6 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#f5c96c]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-[#0b1120] mb-2">
                        {area.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
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

export default MissionImpact;
