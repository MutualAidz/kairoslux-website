function LeoQuotes() {
  const quotes = [
    {
      text: '“AI must reflect the Creator’s design: intelligent, relational, and guided by love.”',
      attribution: '— Pope Leo XIV (Builders AI Forum message)',
    },
    {
      text: '“Cultivate moral discernment as a fundamental part of their work—to develop systems that reflect justice, solidarity, and a genuine reverence for life.”',
      attribution: '— Pope Leo XIV (Builders AI Forum message)',
    },
    {
      text: '“This epochal transformation requires responsibility and discernment to ensure that AI is developed and utilized for the common good.”',
      attribution: '— Pope Leo XIV (AI for Good Summit message)',
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#0b1930] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <div
            key={quote.text}
            className="h-full rounded-lg border border-[#f5c96c]/40 bg-white/5 p-6 shadow-lg shadow-[#0b1120]/40"
          >
            <p className="text-lg leading-relaxed mb-4">{quote.text}</p>
            <p className="text-sm text-[#f5c96c] font-semibold">{quote.attribution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeoQuotes;
