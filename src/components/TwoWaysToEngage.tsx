function TwoWaysToEngage() {
  return (
    <section className="py-16 px-6 bg-white border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0b1120] mb-8 text-center">
          Two ways to engage
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#0b1120]">
              Kairos Lux Works (LLC)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Consulting, sprints and pilots for Catholic and mission‑aligned institutions.
              Bounded engagements that deliver notes, roadmaps, prototypes and decision support.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#0b1120]">
              Kairos Labs (in formation)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              An emerging nonprofit initiative focused on formation and action‑research.
              Not yet incorporated. We're seeking host partners and sponsors to pilot learning series and publish what we learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoWaysToEngage;
