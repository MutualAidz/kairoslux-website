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
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold mb-4">
          How we work
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120] mb-6">
          The Kairos Compass
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
          Kairos Compass is our CST-grounded approach to discernment about AI and work—helping mission-driven institutions move from anxiety to clear next steps.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                <p className="text-gray-600 leading-relaxed text-sm text-left">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
          This work unfolds through three movements of discernment.
        </p>
      </div>
    </section>
  );
}

export default Compass;
