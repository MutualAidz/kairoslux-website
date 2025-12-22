function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#1a2847] to-[#0b1120] text-white pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wider text-[#f5c96c] font-semibold">
            Catholic Social Teaching, engineered for AI.
          </p>

          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            Kairos Lux Works
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 font-serif">
            Discernment, strategy, and AI-supported workflows for the Church in transition.
          </p>

          <div className="space-y-4 pt-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Kairos Lux Works LLC is a CST-aligned strategy partner accompanying institutions who are feeling real pressure—financial, cultural, technological—yet want to stay faithful to their mission and values. Rooted in Dallas, we are building trans-Atlantic collaborations, including Rome, to keep the work close to the universal Church.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We help you see options that are hard to notice from inside that pressure: using AI to relieve reporting and coordination burdens, free more time for people and presence, and support more dignified, creative work for your teams and the people you serve.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We help you resist the dominant Silicon Valley narrative of speed, scale, and disruption, and instead use AI as a tool for institutional flourishing and for the economy Christ calls us to build.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#f5c96c] text-[#0b1120] font-semibold rounded hover:bg-[#f5d88a] transition-all shadow-lg hover:shadow-[#f5c96c]/50"
            >
              Start a discernment call
            </button>

            <button
              onClick={() => scrollToSection('compass')}
              className="text-sm text-[#f5c96c] font-semibold underline underline-offset-4 hover:text-[#f5d88a] transition-colors"
            >
              See how we work
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/hero-kairos-guild.png"
            alt="Golden cross and cosmic circuitry in a stained‑glass mandala"
            className="hero-kairos-image w-full max-w-lg rounded-lg shadow-2xl shadow-[#f5c96c]/20 border border-[#f5c96c]/30"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
