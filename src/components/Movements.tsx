import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Users, BookOpen, Zap, Search, Target, FileText } from 'lucide-react';

function Movements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeMovement, setActiveMovement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportMiddle = window.innerHeight / 2;

      // Calculate which movement should be active based on scroll position
      // We divide the section into 3 equal parts
      const scrollProgress = (viewportMiddle - rect.top) / sectionHeight;

      if (scrollProgress < 0.33) {
        setActiveMovement(0);
      } else if (scrollProgress < 0.66) {
        setActiveMovement(1);
      } else {
        setActiveMovement(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const movements = [
    {
      number: '01',
      title: 'Discerning Readiness & Shared Understanding',
      subtitle: 'Deep listening to mission, charisms, pressures, hopes, and fears',
      corePractice: 'Deep listening to mission, charisms, pressures, hopes, and fears',
      questions: [
        'Where are we actually at with AI?',
        'What pressures do we face? (capacity, funding, competition, overwhelm)',
        'What is our mission calling us toward?',
        'What do we refuse to sacrifice? (values, relationships, identity)',
      ],
      entryPoints: [
        { label: '"We\'re just exploring"', offering: 'Free 30-min intro call', icon: MessageCircle },
        { label: '"We have a specific decision or pressure"', offering: 'AI Discernment Call (60-90 min, paid)', icon: Phone },
        { label: '"Our board/leadership needs shared baseline"', offering: 'CST & AI Foundations Briefing (90-120 min)', icon: Users },
        { label: '"We want theological depth"', offering: 'CST-AI Lab option (deeper formation)', icon: BookOpen },
      ],
      outputs: [
        'Kairos Note (lighter, for focused questions)',
        'Discernment Dossier (deeper, for boards/leadership)',
      ],
    },
    {
      number: '02',
      title: 'Discerning Options & Decisions',
      subtitle: 'Mapping workflows and letting CST speak into decisions',
      corePractice: 'Mapping workflows and bottlenecks; Letting CST speak into decisions (guardrails, principles)',
      questions: [
        'What specific workflows or decisions need attention?',
        'What are our actual options here?',
        'What CST principles apply? What guardrails do we need?',
        'Where is the high-leverage starting point?',
      ],
      offerings: [
        {
          name: 'Discernment Sprint (2-3 weeks)',
          target: 'for focused institutions',
          includes: ['Interviews with key people', 'Light workflow mapping', 'CST-grounded analysis', 'Data readiness assessment', 'Recommended starting points with guardrails']
        },
        {
          name: 'Deep Discernment Review',
          target: 'for larger/complex institutions',
          includes: ['Interviews with key people', 'Light workflow mapping', 'CST-grounded analysis', 'Data readiness assessment', 'Recommended starting points with guardrails']
        },
      ],
      outputs: [
        '1-2 high-leverage workflows identified',
        'Options with CST guardrails',
        'Questions to carry into governance',
        'Roadmap recommendation',
      ],
    },
    {
      number: '03',
      title: 'Discerning Through Doing',
      subtitle: 'Designing focused, high-impact changes and building with teams',
      corePractice: 'Designing focused, high-impact changes; Building and testing with teams',
      questions: [
        'How does this actually work in practice?',
        'What are we learning as we build?',
        'How do we iterate faithfully and responsibly?',
        'What capacity do we need to sustain this?',
      ],
      pilotDomains: 'Scoped pilots in stakeholder operations, reporting, operational visibility, tradition-aware decision support, data strategy, or institutional memory',
      approach: [
        'Carefully scoped workflows',
        'Small internal tools or prototypes',
        'Learning partnerships',
        'Test without over-engineering',
      ],
      outputs: [
        'Working pilots',
        'Lessons learned documentation',
        'Momentum and capability building',
        'Recommendations for next phase',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-[#f8f5f0]" style={{ minHeight: '300vh' }}>
      <div className="sticky top-32 flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 8rem)' }}>
        <div className="max-w-[95vw] mx-auto w-full">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold mb-2">
              Three Movements
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0b1120]">
              This work unfolds through three movements of discernment
            </h2>
          </div>

          <div className="relative flex items-center justify-center perspective-container" style={{ minHeight: '450px' }}>
            {movements.map((movement, index) => {
              const isActive = activeMovement === index;
              const offset = index - activeMovement;

              return (
                <div
                  key={movement.number}
                  className="movement-card absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateX(${offset * 200}px)
                      translateZ(${isActive ? '150px' : '-250px'})
                      rotateY(${offset * 8}deg)
                      scale(${isActive ? 1 : 0.7})
                    `,
                    opacity: isActive ? 1 : 0.2,
                    zIndex: isActive ? 30 : (15 - Math.abs(offset)),
                    width: isActive ? '950px' : '800px',
                    maxWidth: '95vw',
                    filter: isActive ? 'none' : 'blur(2px)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="bg-gradient-to-br from-white to-[#f8f5f0] border-2 border-[#f5c96c]/40 rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <span className="text-[#f5c96c] font-bold text-xl">{movement.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-1">
                          {movement.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-snug">
                          {movement.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      className="transition-all duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? '800px' : '0px',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0b1120]/10">
                        {/* Left column */}
                        <div className="space-y-4">
                          <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                            <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Guiding Questions</h4>
                            <ul className="space-y-1">
                              {movement.questions.map((q, i) => (
                                <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start">
                                  <span className="text-[#f5c96c] mr-2 flex-shrink-0">•</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {movement.entryPoints && (
                            <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                              <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Entry Points</h4>
                              <div className="space-y-2">
                                {movement.entryPoints.map((ep, i) => {
                                  const Icon = ep.icon;
                                  return (
                                    <div key={i} className="flex items-start gap-2">
                                      <Icon className="w-3 h-3 text-[#f5c96c] flex-shrink-0 mt-0.5" />
                                      <div>
                                        <p className="text-xs font-medium text-[#0b1120]">{ep.label}</p>
                                        <p className="text-xs text-gray-600">{ep.offering}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {movement.offerings && (
                            <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                              <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Offerings</h4>
                              <div className="space-y-2">
                                {movement.offerings.map((off, i) => (
                                  <div key={i}>
                                    <p className="text-xs font-medium text-[#0b1120]">{off.name} <span className="text-gray-500 font-normal">{off.target}</span></p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {movement.pilotDomains && (
                            <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                              <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Pilot Domains</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">{movement.pilotDomains}</p>
                            </div>
                          )}
                        </div>

                        {/* Right column */}
                        <div className="space-y-4">
                          {movement.approach && (
                            <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                              <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Approach</h4>
                              <ul className="space-y-1">
                                {movement.approach.map((a, i) => (
                                  <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start">
                                    <span className="text-[#f5c96c] mr-2 flex-shrink-0">•</span>
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {movement.offerings && movement.offerings[0]?.includes && (
                            <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                              <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">What This Includes</h4>
                              <ul className="space-y-1">
                                {movement.offerings[0].includes.map((inc, i) => (
                                  <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start">
                                    <span className="text-[#f5c96c] mr-2 flex-shrink-0">•</span>
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="bg-white/70 rounded-lg p-4 border border-[#0b1120]/5">
                            <h4 className="font-semibold text-[#0b1120] mb-2 text-sm">Outputs</h4>
                            <ul className="space-y-1">
                              {movement.outputs.map((o, i) => (
                                <li key={i} className="text-gray-600 text-xs leading-relaxed flex items-start">
                                  <span className="text-[#f5c96c] mr-2 flex-shrink-0">•</span>
                                  <span>{o}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {movements.map((_, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={{
                  width: activeMovement === index ? '48px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  backgroundColor: activeMovement === index ? '#f5c96c' : '#0b1120',
                  opacity: activeMovement === index ? 1 : 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movements;
