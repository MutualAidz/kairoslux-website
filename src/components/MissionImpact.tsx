import { Target, BarChart3, TrendingUp, BookOpen } from 'lucide-react';

function MissionImpact() {
  const impactAreas = [
    {
      icon: Target,
      title: 'Relationship & capital intelligence',
      description: 'Helping Catholic finance and impact-oriented organisations focus on the right relationships at the right time: using their own data to surface opportunities, remember commitments, and align capital with mission.',
    },
    {
      icon: BarChart3,
      title: 'Reporting & donor / stakeholder intelligence',
      description: 'Reducing the burden of complex reporting and fundraising work—especially under funding cuts—so staff can spend more time on accompaniment and programme quality. This can include AI-assisted reporting drafts, consistency checking between budgets and narratives, or better use of existing CRM and ERP data.',
    },
    {
      icon: TrendingUp,
      title: 'Operational and financial analytics',
      description: 'Working with complex spreadsheets, models, and other operational data so leaders can see scenarios more clearly and make decisions more quickly, while keeping CST concerns in view.',
    },
    {
      icon: BookOpen,
      title: 'Tradition-aware tools (early / in development)',
      description: 'Exploring small-scope tools that bring CST or other parts of the tradition into view at the moment of decision—always as an aid to human discernment, never a substitute for it.',
    },
  ];

  return (
    <section id="mission-impact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold mb-4">
          Path 3
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120] mb-6">
          Mission Impact Enhancement
        </h2>

        <h3 className="text-2xl font-serif text-gray-700 mb-6">
          Workflows and projects that put discernment into practice.
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-12">
          Once a direction is chosen, we collaborate on carefully scoped workflows and projects—sometimes pilots, sometimes small internal tools—that test what's possible without over-engineering.
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
