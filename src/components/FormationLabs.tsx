import { Ear, BookOpen, HelpCircle } from 'lucide-react';

function FormationLabs() {
  const practices = [
    {
      icon: Ear,
      title: 'Deep listening to people and mission',
      description: 'We start from stories, not tools—the charism, history, and concrete pressures and aspirations of your community.',
    },
  ];

  const guidingQuestions = [
    'What is the mission we are called to protect and advance?',
    'What are the concrete pressures on our staff and community right now?',
    'What are we already experimenting with, and what have we learned?',
    'What do we hope AI might help us do? What do we fear it might cost us?',
    'What values and principles should guide our decisions about these tools?',
  ];

  const entryPoints = [
    {
      title: 'I need to brief my board or leadership team',
      path: 'CST & AI Foundations Briefing',
    },
    {
      title: 'I have a specific decision pending',
      path: 'AI Discernment Call',
    },
    {
      title: 'I want a clear recommendation for next steps',
      path: 'Board-ready Discernment Dossier',
    },
  ];

  const offerings = [
    {
      title: 'AI Discernment Call',
      description: 'A 60–90 minute conversation with key decision-makers to surface hopes, fears, existing experiments, and constraints. You receive a short Kairos Note summarising what we heard, how we see the situation through CST, and whether the best next step is formation, a design sprint, or waiting.',
    },
    {
      title: 'CST & AI Foundations Briefing (90–120 min)',
      description: 'A board or leadership team briefing we can facilitate. We name the disruption and anxiety honestly, introduce AI through the lenses of Catholic Social Teaching and Pope Leo\'s teaching, and explore both real risks and upside possibilities. The goal is clarity and shared language, not hype or blanket rejection.',
    },
  ];

  return (
    <section id="discern-clarify" className="py-20 px-6 bg-[#0b1930]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-4">
          Path 1
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Discern & Clarify
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mb-12">
          For leadership teams who need to name what is happening, what they hope for, and what they refuse to sacrifice.
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
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Where do you see yourself?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {entryPoints.map((entry) => (
              <div
                key={entry.title}
                className="border border-[#f5c96c]/30 rounded-lg p-6 bg-gradient-to-br from-white to-[#f8f5f0] hover:border-[#f5c96c] hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all"
              >
                <p className="text-gray-700 leading-relaxed mb-3 font-medium">
                  {entry.title}
                </p>
                <p className="text-[#0b1120] font-semibold">
                  → {entry.path}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Offerings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="border border-[#f5c96c]/30 rounded-lg p-6 space-y-4 hover:shadow-lg hover:shadow-[#f5c96c]/10 transition-all hover:border-[#f5c96c] bg-gradient-to-br from-white to-[#f8f5f0]"
              >
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#0b1120] mb-3">
                    {offering.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="rounded-lg border border-[#f5c96c]/40 bg-white/5 p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Board-ready Discernment Dossier
            </h3>
            <p className="text-gray-200 leading-relaxed">
              A concise memo for leadership or boards: context, options, risks, and a recommended next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormationLabs;
