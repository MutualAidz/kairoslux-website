function TwoWaysToEngage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 bg-white border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0b1120] mb-8 text-center">
          Two ways to engage
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0b1120]">
              Kairos Lux Works (LLC)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Consulting, sprints and pilots for Catholic and mission‑aligned institutions.
              Bounded engagements that deliver notes, roadmaps, prototypes and decision support.
            </p>
            <button
              onClick={() => scrollToSection('discern-clarify')}
              className="px-6 py-2 bg-[#0b1120] text-white font-semibold rounded hover:bg-[#1a2845] transition-all"
            >
              Explore Kairos Lux Works
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0b1120]">
              Kairos Labs (in formation)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              An emerging nonprofit initiative focused on formation and action‑research.
              Not yet incorporated. We're seeking host partners and sponsors to pilot learning series and publish what we learn.
            </p>
            <button
              onClick={() => scrollToSection('kairos-labs')}
              className="px-6 py-2 bg-[#0b1120] text-white font-semibold rounded hover:bg-[#1a2845] transition-all"
            >
              Explore Kairos Labs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoWaysToEngage;
