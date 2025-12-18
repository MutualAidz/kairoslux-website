function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src="/images/resilience-cross.png"
              alt="Golden cross glowing over intricate gothic patterns, symbolising resilience for workers, institutions, and society"
              className="resilience-image w-full max-w-lg rounded-lg shadow-xl border border-[#f5c96c]/30"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120]">
              Meet the vision
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-2">
                  Felix Navarrete – Kairos Lux Works
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Theological engineer + AI platonist.
                </p>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-2">
                  The mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building a Guild, not just another app – to orient intelligence and spirit toward the Good, the greater glory of God.
                </p>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#0b1120] mb-2">
                  The vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building the kind of economy Christ would want us to build – a cooperative ecosystem helping organisations and communities grow in resilience by redesigning work, supporting strategic decisions, and helping our institutions adapt to deep transformation, thickening CST's visible sacramental reality in our society in the process.
                </p>
              </div>

              <div className="border-t border-[#0b1120]/10 pt-6">
                <p className="text-sm text-gray-600">
                  Kairos Lux Works LLC is registered in Dallas, Texas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
