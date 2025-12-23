import { useState } from 'react';
import { Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    organizationType: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Kairos Lux Works — Website inquiry';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization/community: ${formData.organization}${formData.organizationType ? `\nOrganization type: ${formData.organizationType}` : ''}\nReaching out about: ${formData.interest}\nMessage: ${formData.message}`;
    const mailtoLink = `mailto:hello@kairoslux.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1120]">
              This is the Kairos moment.
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The opportune time to act with wisdom. Technology will continue to advance—but whether it serves human dignity and contributes to the economy Christ calls us to build, or merely undermines our flourishing, depends on the choices we make now.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Let's build an ecosystem where AI serves the common good, where work creatively participates in creation, and where Catholic institutions lead into the future with moral clarity and mission-aligned strategic depth.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#0b1120]/10">
              <div className="flex items-start gap-3 text-[#f5c96c]">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong></p>
                  <a
                    href="mailto:hello@kairoslux.ai"
                    className="text-lg font-semibold hover:text-[#f5d88a] transition-colors"
                  >
                    hello@kairosl<span className="border-b-2 border-[#f5c96c]">ux.ai</span>
                  </a>
                  <p className="text-xs text-gray-600 mt-2">Messages reach Felix Navarrete and the Kairos Lux Works team.</p>
                </div>
              </div>

              <div className="border-l-4 border-[#f5c96c] pl-6 mt-6">
                <p className="text-base text-gray-700 leading-relaxed italic">
                  "AI must reflect the Creator's design: intelligent, relational, and guided by love."
                </p>
                <p className="text-sm text-[#f5c96c] font-semibold mt-2">— Pope Leo XIV</p>
                <p className="text-sm text-gray-500 mt-1">Builders AI Forum message</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#f5c96c]/30 rounded-lg p-8 shadow-lg">
            <p className="text-lg font-semibold text-[#0b1120] mb-2">
              Use the form to start a conversation about a project, a discernment process, or a potential partnership.
            </p>
            <p className="text-xs text-gray-600 mb-6">
              This form opens your email client; it does not store data.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold mb-2 text-gray-700">
                  Organization / community
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900 placeholder-gray-400"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="organizationType" className="block text-sm font-semibold mb-2 text-gray-700">
                  Who are you? (Optional, but helpful!)
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900"
                >
                  <option value="">Select if applicable</option>

                  <optgroup label="Church & ministries">
                    <option value="Diocese/chancery/bishops conference">Diocese/chancery/bishops conference</option>
                    <option value="Parish">Parish</option>
                    <option value="Religious order">Religious order</option>
                    <option value="Catholic nonprofit/ministry">Catholic nonprofit/ministry</option>
                    <option value="Catholic school (K-12)">Catholic school (K-12)</option>
                    <option value="Catholic university/research center">Catholic university/research center</option>
                    <option value="Catholic healthcare/social services">Catholic healthcare/social services</option>
                  </optgroup>

                  <optgroup label="Finance & philanthropy">
                    <option value="Foundation/grantmaker">Foundation/grantmaker</option>
                    <option value="Impact investor/family office">Impact investor/family office</option>
                    <option value="Development/advancement team">Development/advancement team</option>
                    <option value="CSR/shareholder advocacy">CSR/shareholder advocacy</option>
                  </optgroup>

                  <optgroup label="Research & collaboration">
                    <option value="University faculty/lab">University faculty/lab</option>
                    <option value="Student/capstone team">Student/capstone team</option>
                    <option value="Technology partner">Technology partner</option>
                  </optgroup>

                  <optgroup label="Cooperative & civic">
                    <option value="Credit union/cooperative finance">Credit union/cooperative finance</option>
                    <option value="Cooperative development org">Cooperative development org</option>
                    <option value="Public-interest/commons AI org">Public-interest/commons AI org</option>
                  </optgroup>

                  <optgroup label="Media & convening">
                    <option value="Media/journalism">Media/journalism</option>
                    <option value="Conference/convening organizer">Conference/convening organizer</option>
                  </optgroup>

                  <optgroup label="Other">
                    <option value="Other / not sure yet">Other / not sure yet</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2 text-gray-700">
                  What are you reaching out about?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900"
                >
                  <option value="">Select one…</option>
                  <option value="Consulting / delivery (Kairos Lux Works)">Consulting / delivery (Kairos Lux Works)</option>
                  <option value="Partnership / sponsorship (Kairos Labs, in formation)">Partnership / sponsorship (Kairos Labs, in formation)</option>
                  <option value="Both">Both</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">
                  This helps route your note to the right place.
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                  What decision, workflow or pressure point are you facing?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#f5c96c] text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Example: &quot;We need board clarity on AI policy,&quot; or &quot;Reporting is consuming staff time,&quot; or &quot;We want a bounded pilot without vendor capture.&quot;"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#0b1120] text-white font-semibold rounded hover:bg-[#f5c96c] hover:text-[#0b1120] transition-all shadow-lg"
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
