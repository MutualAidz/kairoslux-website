import { Target, BarChart3, TrendingUp, BookOpen } from 'lucide-react';

function MissionImpact() {
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
          Movement 3
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Mission Impact Work
        </h2>

        <h3 className="text-2xl font-serif text-gray-100 mb-6">
          Workflows and projects that put discernment into practice.
        </h3>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-12">
          Movement 2 designs the plan; Movement 3 implements it with your teams. Once a direction is chosen, we collaborate on carefully scoped workflows and projects—sometimes pilots, sometimes small internal tools—that test what's possible without over-engineering.
        </p>

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
    </section>
  );
}

export default MissionImpact;
