import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
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

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Twitter size={24} />
          </a>
          <a href="mailto:sam@example.com" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <div className="text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Sam Pheloung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;