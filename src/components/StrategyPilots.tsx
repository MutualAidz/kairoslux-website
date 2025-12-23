import { Zap, Search, Map, BookOpen, HelpCircle } from 'lucide-react';

function StrategyPilots() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const practices = [
    {
      icon: Map,
      title: 'Mapping workflows and bottlenecks',
      description: 'We look beyond the chatbot window at real constraints and workflows, identifying where AI support might relieve unnecessary load or open new space for mission.',
    },
    {
      icon: BookOpen,
      title: 'Letting Catholic Social Teaching speak into decisions',
      description: 'We name the CST values already shaping your institution, and begin to bring relevant texts and traditions alongside them so they can guide concrete choices about tools, workflows, and budgets.',
    },
  ];

  const guidingQuestions = [
    'What workflows create the most pressure on staff right now?',
    'Where might AI support create meaningful relief without compromising mission?',
    'What CST principles should guide our choices about these tools?',
    'What are the real constraints: data, capacity, budget, governance?',
    'What would success look like in 6 months? In 2 years?',
  ];

  const services = [
    {
      icon: Zap,
      title: 'Discernment Sprint (2–3 weeks)',
      description: 'A focused 2–3 week engagement. Through a handful of interviews, light review of your workflows and data landscape (including data readiness and institutional memory practices), and a few working sessions, we propose one or two high-leverage workflows where AI could help you do more with less. Each comes with CST-grounded guardrails and questions to carry into governance.',
      buttonText: null,
    },
    {
      icon: Search,
      title: 'Deep Discernment Review (for larger institutions)',
      description: 'For provinces, universities, networks, or organisations with many stakeholders. We map mission, risk, and opportunity across multiple domains; look at structures, incentives, and data realities; and develop a short roadmap that names several credible scenarios and recommends where to start.',
      buttonText: null,
    },
  ];

  return (
    <section id="design-decide" className="py-20 px-6 bg-[#0b1930]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-4">
          Path 2
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Design & Decide
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-12">
          When there is enough shared understanding, we move into structured design work that turns concerns and ideas into concrete options.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Core Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.title}
                  className="border border-[#f5c96c]/30 rounded-lg p-6 bg-white/5"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#f5c96c] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#0b1120]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-2">
                        {practice.title}
                      </h4>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Offerings</h3>
          <div className="space-y-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="border border-[#f5c96c]/30 rounded-lg p-8 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#0b1120] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#f5c96c]" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <h4 className="text-2xl font-serif font-bold text-[#0b1120]">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>

                      {service.bullets && (
                        <ul className="space-y-2 pl-4">
                          {service.bullets.map((bullet, index) => (
                            <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                              <span className="text-[#f5c96c] mr-2">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {service.buttonText && (
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="mt-4 px-6 py-2 bg-[#0b1120] text-white font-semibold rounded hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all"
                        >
                          {service.buttonText}
                        </button>
                      )}
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

export default StrategyPilots;
