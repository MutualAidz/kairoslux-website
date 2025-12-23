function KairosLabs() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kairos-labs" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-[#0b1120]/60 font-semibold">
              Non-profit arm
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120]">
              Kairos Labs – dignified and creative work in the AI age
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kairos Labs is the emerging non-profit arm of the <strong>Kairos Guild</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Kairos Guild is the long-range ecosystem we're building: a living architecture linking Kairos Lux Works (LLC) and Kairos Labs (in formation) toward cooperative, CST-aligned tools and institutions. The Guild is a direction of travel—not a finished platform.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Kairos Labs focuses on formation and research around the future of work: worker reskilling for the AI age with a CST moral backbone; small cohorts and learning circles among those most exposed to automation; and tools that help communities redesign work rather than simply lose it.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Labs will weave together action-research (following real teams as AI enters their work), theological reflection, and technical prototyping. The goal is to generate methods, curricula, and shared tools that can be reused by religious orders and universities, social ministries and humanitarian agencies.
              </p>

              <div className="border-l-4 border-[#f5c96c] pl-6 mt-6">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Cultivate moral discernment as a fundamental part of their work—to develop systems that reflect justice, solidarity, and a genuine reverence for life."
                </p>
                <p className="text-sm text-[#f5c96c] font-semibold mt-2">— Pope Leo XIV</p>
                <p className="text-sm text-gray-500 mt-1">Builders AI Forum message</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/images/founding-partners.png"
              alt="Golden church doorway with people walking into radiant light"
              className="guild-doorway-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/30"
            />
          </div>
        </div>

        <div className="border-t border-[#0b1120]/10 pt-8 mt-12">
          <div className="bg-gradient-to-br from-[#f8f5f0] to-white border-2 border-[#f5c96c]/40 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-[#0b1120] mb-4">
              Building partnerships for the future
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you lead a diocese, parish, religious order, university, social ministry, foundation, impact fund, or cooperative—let's discern together what a partnership could look like.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#f5c96c] text-[#0b1120] font-semibold rounded hover:bg-[#f5d88a] transition-all shadow-lg hover:shadow-[#f5c96c]/50"
            >
              Start a conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KairosLabs;
