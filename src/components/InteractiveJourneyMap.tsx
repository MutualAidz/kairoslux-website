import { useRef, useEffect, useState } from 'react';
import { Ear, Map, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

function InteractiveJourneyMap() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentMovement, setCurrentMovement] = useState(0);

  const movements = [
    {
      number: 1,
      icon: Ear,
      title: 'Discern & Clarify',
      subtitle: 'Deep listening to mission',
      practice: 'Deep listening to people and mission',
      practiceDetail: 'We start from stories, not tools—the charism, history, and concrete pressures and aspirations of your community.',
      questions: [
        'Where are we actually at with AI?',
        'What pressures do we face?',
        'What is our mission calling us toward?',
        'What do we refuse to sacrifice?',
      ],
      entryPoints: [
        { label: 'Just exploring', offering: 'Free 30-min intro call' },
        { label: 'Specific decision', offering: 'AI Discernment Call' },
        { label: 'Board needs baseline', offering: 'CST & AI Briefing' },
      ],
      link: '#discern-clarify',
    },
    {
      number: 2,
      icon: Map,
      title: 'Design & Decide',
      subtitle: 'Workflow mapping & CST guardrails',
      practice: 'Mapping workflows and letting CST speak',
      practiceDetail: 'We look beyond the chatbot window at real constraints and workflows, bringing CST principles alongside them to guide concrete choices.',
      questions: [
        'What workflows create the most pressure?',
        'Where might AI create meaningful relief?',
        'What CST principles should guide our choices?',
        'What are the real constraints?',
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
      subtitle: 'Building & piloting with teams',
      practice: 'Designing focused, high-impact changes',
      practiceDetail: 'We work with you to identify high-leverage changes and then build momentum by starting there—testing what\'s possible without over-engineering.',
      questions: [
        'What does success look like for this pilot?',
        'How do we measure mission effectiveness AND staff wellbeing?',
        'What CST guardrails need to be in place?',
        'How do we learn quickly and adapt?',
      ],
      domains: [
        'Stakeholder & relationship operations',
        'Reporting & narrative throughput',
        'Operational visibility',
        'Tradition-aware decision support',
      ],
      link: '#mission-impact',
    },
  ];

  const scrollToMovement = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const movementWidth = container.scrollWidth / movements.length;
      container.scrollTo({
        left: movementWidth * index,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const movementWidth = container.scrollWidth / movements.length;
        const newIndex = Math.round(container.scrollLeft / movementWidth);
        setCurrentMovement(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [movements.length]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1120] mb-4">
            Three Movements of Discernment
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-6">
            Scroll horizontally to explore each movement. Most engagements start small and bounded.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-6">
          {movements.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToMovement(index)}
              className={`h-2 rounded-full transition-all ${
                currentMovement === index ? 'w-8 bg-[#f5c96c]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to movement ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movements.map((movement, index) => {
          const Icon = movement.icon;
          return (
            <div
              key={movement.number}
              className="min-w-full snap-center px-6 md:px-12 py-8"
            >
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-[#f8f5f0] to-white border-2 border-[#f5c96c]/30 rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#f5c96c]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f5c96c] flex items-center justify-center text-[#0b1120] font-bold">
                        {movement.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0b1120]">
                        {movement.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{movement.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="border-l-4 border-[#f5c96c] pl-4 mb-4">
                      <h4 className="font-serif font-bold text-lg text-[#0b1120] mb-2">
                        Core Practice
                      </h4>
                      <p className="text-base font-semibold text-gray-800 mb-2">{movement.practice}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {movement.practiceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#0b1120] mb-4">
                        Guiding Questions
                      </h4>
                      <ul className="space-y-2">
                        {movement.questions.map((question, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#f5c96c] font-bold mt-0.5">→</span>
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#0b1120] mb-4">
                        {movement.entryPoints ? 'Entry Points' : movement.offerings ? 'Offerings' : 'Example Domains'}
                      </h4>
                      {movement.entryPoints && (
                        <div className="space-y-3">
                          {movement.entryPoints.map((entry, idx) => (
                            <div key={idx} className="text-sm">
                              <p className="text-gray-700 font-medium">{entry.label}</p>
                              <p className="text-[#0b1120] font-semibold">→ {entry.offering}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {movement.offerings && (
                        <ul className="space-y-2">
                          {movement.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-[#f5c96c] font-bold mt-0.5">•</span>
                              <span>{offering}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {movement.domains && (
                        <ul className="space-y-2">
                          {movement.domains.map((domain, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-[#f5c96c] font-bold mt-0.5">•</span>
                              <span>{domain}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href={movement.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b1120] text-white font-semibold rounded-lg hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all"
                    >
                      Explore in detail
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center gap-4">
        <button
          onClick={() => scrollToMovement(Math.max(0, currentMovement - 1))}
          disabled={currentMovement === 0}
          className="flex items-center gap-2 px-4 py-2 bg-[#0b1120] text-white rounded-lg hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#0b1120] disabled:hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        <button
          onClick={() => scrollToMovement(Math.min(movements.length - 1, currentMovement + 1))}
          disabled={currentMovement === movements.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-[#0b1120] text-white rounded-lg hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#0b1120] disabled:hover:text-white"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default InteractiveJourneyMap;
