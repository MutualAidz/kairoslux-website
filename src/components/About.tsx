function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0b1930] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src="/images/resilience-cross.png"
              alt="Golden cross glowing over intricate gothic patterns, symbolising resilience for workers, institutions, and society"
              className="resilience-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/40"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Meet the vision
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Felix Navarrete – Kairos Lux Works
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Theological engineer + AI platonist.
                </p>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  The mission
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Building a Guild, not just another app – to orient intelligence and spirit toward the Good, the greater glory of God.
                </p>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  The vision
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Building the kind of economy Christ would want to belong to and participate in. Inspired by CST encyclicals' economic paradigm expressing divine love, we are creating a cooperative ecosystem helping organisations and communities grow in resilience by redesigning work, supporting strategic decisions, and helping our institutions adapt to deep transformation, thickening CST's visible sacramental reality in our society in the process.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-300">
                  Kairos Lux Works LLC is registered in Dallas, Texas. We are building collaborations across Dallas and Rome.
                </p>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6 mt-6">
                <p className="text-lg text-gray-200 leading-relaxed italic">
                  "This epochal transformation requires responsibility and discernment to ensure that AI is developed and utilized for the common good."
                </p>
                <p className="text-sm text-[#f5c96c] font-semibold mt-2">— Pope Leo XIV</p>
                <p className="text-sm text-gray-400 mt-1">AI for Good Summit message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
