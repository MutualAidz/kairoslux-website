import { useState } from 'react';
import { Ear, Map, Zap, ChevronDown, ChevronUp } from 'lucide-react';

function InteractiveJourneyMap() {
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  const paths = [
    {
      number: 1,
      icon: Ear,
      title: 'Discern & Clarify',
      subtitle: 'Deep listening',
      color: 'bg-[#0b1120]',
      borderColor: 'border-[#0b1120]',
      description: 'Start from stories, not tools. Surface hopes, fears, and concrete pressures. Build shared language and CST-grounded priorities.',
      practices: [
        'Deep listening to people and mission',
        'Surfacing hopes, fears, and constraints',
        'Building shared language around CST values',
      ],
      offerings: [
        'AI Discernment Call (60-90 min)',
        'CST & AI Foundations Briefing (90-120 min)',
        'Board-ready Discernment Dossier',
      ],
      link: '#discern-clarify',
    },
    {
      number: 2,
      icon: Map,
      title: 'Design & Decide',
      subtitle: 'Workflow mapping',
      color: 'bg-[#0b1120]',
      borderColor: 'border-[#0b1120]',
      description: 'Move from concerns to concrete options. Map workflows, identify bottlenecks, and design CST-grounded guardrails for decision-making.',
      practices: [
        'Mapping workflows and bottlenecks',
        'Applying CST principles to choices',
        'Designing focused, high-leverage changes',
      ],
      offerings: [
        'Discernment Sprint (2-3 weeks)',
        'Deep Discernment Review (larger institutions)',
      ],
      link: '#design-decide',
    },
    {
      number: 3,
      icon: Zap,
      title: 'Mission Impact Work',
      subtitle: 'Build & pilot',
      color: 'bg-[#0b1120]',
      borderColor: 'border-[#0b1120]',
      description: 'Put discernment into practice. Build carefully scoped pilots and workflows that test what\'s possible without over-engineering.',
      practices: [
        'Designing focused, high-impact changes',
        'Testing with small pilots and prototypes',
        'Measuring impact on mission and staff wellbeing',
      ],
      offerings: [
        'Stakeholder & relationship operations',
        'Reporting & narrative throughput',
        'Operational visibility',
        'Tradition-aware decision support',
      ],
      link: '#mission-impact',
    },
  ];

  const togglePath = (index: number) => {
    setExpandedPath(expandedPath === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1120] mb-4">
            The Journey: Three Movements
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Most engagements start small and bounded. Click each path to explore what happens there.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-[#f5c96c]/30" style={{ marginLeft: '12.5%', marginRight: '12.5%' }}></div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {paths.map((path, index) => {
              const Icon = path.icon;
              const isExpanded = expandedPath === index;

              return (
                <div key={path.number} className="relative">
                  <button
                    onClick={() => togglePath(index)}
                    className={`w-full border-2 ${path.borderColor} rounded-lg p-6 bg-white hover:shadow-xl transition-all ${isExpanded ? 'shadow-xl scale-105' : 'hover:scale-102'}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-full ${path.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-[#f5c96c]" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f5c96c] flex items-center justify-center text-[#0b1120] font-bold text-sm">
                          {path.number}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-1">
                          {path.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">
                          {path.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[#f5c96c]">
                        <span className="text-sm font-semibold">
                          {isExpanded ? 'Show less' : 'Learn more'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {expandedPath !== null && (
            <div className="bg-[#f8f5f0] border-2 border-[#f5c96c]/40 rounded-lg p-8 mb-8 animate-fadeIn">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl font-serif font-bold text-[#0b1120] mb-4">
                  Path {paths[expandedPath].number}: {paths[expandedPath].title}
                </h4>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {paths[expandedPath].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-lg font-semibold text-[#0b1120] mb-3">
                      Core Practices
                    </h5>
                    <ul className="space-y-2">
                      {paths[expandedPath].practices.map((practice, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#f5c96c] mt-1">•</span>
                          <span className="text-gray-700">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-[#0b1120] mb-3">
                      Offerings
                    </h5>
                    <ul className="space-y-2">
                      {paths[expandedPath].offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#f5c96c] mt-1">•</span>
                          <span className="text-gray-700">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={paths[expandedPath].link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b1120] text-white font-semibold rounded hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all"
                  >
                    Explore this path in detail
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Each engagement is tailored to your context. Many organizations start with Path 1 to build shared understanding, then move to Path 2 for focused design work, and finally to Path 3 for implementation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InteractiveJourneyMap;
