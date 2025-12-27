import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const stepIds = [
        { id: 'discern-clarify', key: 'discern-clarify' },
        { id: 'design-decide', key: 'design-decide' },
        { id: 'mission-impact', key: 'mission-impact' },
      ];

      const viewportOffset = 140; // account for sticky nav
      let closestKey: string | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepIds.forEach(({ id, key }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportOffset);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestKey = key;
        }
      });

      setActiveStep(closestKey);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    // slight delay to allow moving from trigger to menu without collapse
    closeTimeout.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
      closeTimeout.current = null;
    }, 150);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 rounded-md text-white transition-colors hover:text-[#f5c96c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c565] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          aria-label="Kairos Lux Works — Home"
        >
          <img
            src="/images/logo-klw.svg"
            alt="Kairos Lux Works logo"
            className="h-8 w-auto"
          />
          <span className="font-serif font-bold text-xl tracking-wide">
            Kairos Lux Works
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => scrollToSection('compass')}
              className="text-sm text-gray-200 hover:text-[#f5c96c] transition-colors flex items-center gap-1"
            >
              How we work
              <ChevronDown className="w-3 h-3" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 min-w-[16rem] bg-gray-900/95 backdrop-blur-sm border border-[#f5c96c]/30 rounded-lg shadow-xl py-2"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => scrollToSection('discern-clarify')}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors whitespace-nowrap leading-tight flex items-center gap-2 hover:text-white hover:bg-[#f5c96c]/10 ${
                    activeStep === 'discern-clarify'
                      ? 'text-white bg-white/5 border-l-2 border-[#f5c96c]'
                      : 'text-gray-100'
                  }`}
                >
                  <span className="text-[#f5c96c] font-semibold">Step 1</span>
                  <span>— Discern by Listening</span>
                </button>
                <button
                  onClick={() => scrollToSection('design-decide')}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors whitespace-nowrap leading-tight flex items-center gap-2 hover:text-white hover:bg-[#f5c96c]/10 ${
                    activeStep === 'design-decide'
                      ? 'text-white bg-white/5 border-l-2 border-[#f5c96c]'
                      : 'text-gray-100'
                  }`}
                >
                  <span className="text-[#f5c96c] font-semibold">Step 2</span>
                  <span>— Discern by Designing</span>
                </button>
                <button
                  onClick={() => scrollToSection('mission-impact')}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors whitespace-nowrap leading-tight flex items-center gap-2 hover:text-white hover:bg-[#f5c96c]/10 ${
                    activeStep === 'mission-impact'
                      ? 'text-white bg-white/5 border-l-2 border-[#f5c96c]'
                      : 'text-gray-100'
                  }`}
                >
                  <span className="text-[#f5c96c] font-semibold">Step 3</span>
                  <span>— Discern by Doing</span>
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => scrollToSection('kairos-labs')}
            className="text-sm text-gray-200 hover:text-[#f5c96c] transition-colors"
          >
            Kairos Labs (in formation)
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-gray-200 hover:text-[#f5c96c] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-gray-200 hover:text-[#f5c96c] transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="md:hidden">
          <div className="flex flex-wrap gap-3 text-xs">
            <button onClick={() => scrollToSection('compass')} className="text-gray-200 hover:text-[#f5c96c]">
              How we work
            </button>
            <button onClick={() => scrollToSection('kairos-labs')} className="text-gray-200 hover:text-[#f5c96c]">
              Labs
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-[#f5c96c]">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-[#f5c96c]">
              Contact
            </button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs mt-2 pl-2">
            <button onClick={() => scrollToSection('discern-clarify')} className="text-gray-400 hover:text-[#f5c96c]">
              → Discern
            </button>
            <button onClick={() => scrollToSection('design-decide')} className="text-gray-400 hover:text-[#f5c96c]">
              → Design
            </button>
            <button onClick={() => scrollToSection('mission-impact')} className="text-gray-400 hover:text-[#f5c96c]">
              → Impact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
