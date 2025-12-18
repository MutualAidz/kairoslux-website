import { useState } from 'react';
import { Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#0b1120] via-[#1a2847] to-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              This is the Kairos moment.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              The opportune time to act with wisdom. Technology will continue to advance—but whether it serves human dignity and contributes to the economy Christ calls us to build, or merely undermines our flourishing, depends on the choices we make now.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Let's build an ecosystem where AI serves the common good, where work creatively participates in creation, and where Catholic institutions lead into the future with moral clarity.
            </p>

            <div className="space-y-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-300 italic">
                Use the form to start a conversation about a project, a discernment process, or a potential partnership.
              </p>

              <div className="flex items-start gap-3 text-[#f5c96c]">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1"><strong>Email:</strong></p>
                  <a
                    href="mailto:hello@kairoslux.ai"
                    className="text-lg font-semibold hover:text-[#f5d88a] transition-colors"
                  >
                    hello@kairoslux.ai
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Messages reach Felix Navarrete and the Kairos Lux Works team.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#f5c96c]/30 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded focus:outline-none focus:border-[#f5c96c] text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded focus:outline-none focus:border-[#f5c96c] text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold mb-2 text-gray-300">
                  Organization / community
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded focus:outline-none focus:border-[#f5c96c] text-white placeholder-gray-400"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  What would you like to explore?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded focus:outline-none focus:border-[#f5c96c] text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your needs and interests..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#f5c96c] text-[#0b1120] font-semibold rounded hover:bg-[#f5d88a] transition-all shadow-lg hover:shadow-[#f5c96c]/50"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
