import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  return (
    <footer id="contact" className="relative py-20 border-t border-white/5 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something scalable.</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Whether you need to optimize your revenue stack or automate complex workflows, I'm ready to help you level up.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm mb-16 text-left">
          <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>

          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-8 mb-12 relative">
          <a href="https://www.linkedin.com/in/sam-pheloung-b7060b197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://www.github.com/spheloung" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>

          {/* Email Icon with Popup */}
          <div className="relative">
            <button
              onClick={() => {
                setShowEmailTooltip(true);
                setTimeout(() => setShowEmailTooltip(false), 3000); // Hide after 3s
                window.location.href = "mailto:sam@example.com";
              }}
              aria-label="Email"
              className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </button>

            {/* Mini Modal / Tooltip */}
            <AnimatePresence>
              {showEmailTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 20, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className="absolute left-full top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold py-2 px-3 rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-y-transparent after:border-l-transparent after:border-r-white"
                >
                  Look forward to hearing from you!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Sam Pheloung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;