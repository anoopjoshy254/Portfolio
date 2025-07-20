import { useState, useRef } from 'react';
import { Send, Cloud } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_unxmimf',        // <-- Replace with your EmailJS service ID
      'template_3kdt014',       // <-- Replace with your EmailJS template ID
      formRef.current!,
      'gqkTM789q_zkzzr8m'         // <-- Replace with your EmailJS public key
    )
    .then(() => {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-white text-center mb-16">
          Contact Me
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-gray-900/20 border border-violet-900/30 rounded-xl p-8 shadow-lg shadow-violet-500/5">
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-violet-900/30 rounded-lg text-white focus:border-violet-600 focus:outline-none focus:shadow-lg focus:shadow-violet-500/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-violet-900/30 rounded-lg text-white focus:border-violet-600 focus:outline-none focus:shadow-lg focus:shadow-violet-500/10 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-violet-900/30 rounded-lg text-white focus:border-violet-600 focus:outline-none focus:shadow-lg focus:shadow-violet-500/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-violet-900/30 rounded-lg text-white focus:border-violet-600 focus:outline-none focus:shadow-lg focus:shadow-violet-500/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                >
                  <Send size={20} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Message */}
                {status === 'success' && (
                  <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Try again later.</p>
                )}
              </form>
            </div>

            {/* Cloud Design */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 flex items-center justify-center">
                  <div className="relative">
                    <Cloud 
                      size={200} 
                      className="text-violet-600/30 animate-pulse"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce shadow-lg shadow-violet-500/25"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 left-10 w-3 h-3 bg-violet-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
