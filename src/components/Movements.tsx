import { useEffect, useRef, useState } from 'react';

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
    },
    {
      number: '02',
      title: 'Discerning Options & Decisions',
      subtitle: 'Mapping workflows and letting CST speak into decisions',
    },
    {
      number: '03',
      title: 'Discerning Through Doing',
      subtitle: 'Designing focused, high-impact changes and building with teams',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-[#f8f5f0]" style={{ minHeight: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold mb-4">
              Three Movements
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1120]">
              This work unfolds through three movements of discernment
            </h2>
          </div>

          <div className="relative flex items-center justify-center perspective-container" style={{ minHeight: '500px' }}>
            {movements.map((movement, index) => {
              const isActive = activeMovement === index;
              const offset = index - activeMovement;
              const isPast = index < activeMovement;
              const isFuture = index > activeMovement;

              return (
                <div
                  key={movement.number}
                  className="movement-card absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateX(${offset * 150}px)
                      translateZ(${isActive ? '100px' : '-300px'})
                      rotateY(${offset * 5}deg)
                      scale(${isActive ? 1.05 : 0.75})
                    `,
                    opacity: isActive ? 1 : 0.3,
                    zIndex: isActive ? 20 : (10 - Math.abs(offset)),
                    width: '550px',
                    maxWidth: '90vw',
                    filter: isActive ? 'none' : 'blur(3px)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="bg-gradient-to-br from-white to-[#f8f5f0] border-2 border-[#f5c96c]/40 rounded-xl p-8 shadow-2xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <span className="text-[#f5c96c] font-bold text-2xl">{movement.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-[#0b1120] mb-2">
                          {movement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {movement.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Placeholder for expanded content */}
                    <div
                      className="transition-all duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? '1000px' : '0px',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="space-y-4 pt-6 border-t border-[#0b1120]/10 mt-6">
                        <div className="bg-white/70 rounded-lg p-5 border border-[#0b1120]/5">
                          <h4 className="font-semibold text-[#0b1120] mb-2 text-lg">Core Practices</h4>
                          <p className="text-gray-600">Content will go here</p>
                        </div>

                        <div className="bg-white/70 rounded-lg p-5 border border-[#0b1120]/5">
                          <h4 className="font-semibold text-[#0b1120] mb-2 text-lg">Guiding Questions</h4>
                          <p className="text-gray-600">Content will go here</p>
                        </div>

                        <div className="bg-white/70 rounded-lg p-5 border border-[#0b1120]/5">
                          <h4 className="font-semibold text-[#0b1120] mb-2 text-lg">Offerings</h4>
                          <p className="text-gray-600">Content will go here</p>
                        </div>

                        <div className="bg-white/70 rounded-lg p-5 border border-[#0b1120]/5">
                          <h4 className="font-semibold text-[#0b1120] mb-2 text-lg">Outputs</h4>
                          <p className="text-gray-600">Content will go here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-3 mt-16">
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
