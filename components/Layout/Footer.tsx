import React from 'react';
import { Button } from '../ui/Elements';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative py-20 border-t border-white/5 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something scalable.</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Whether you need to optimize your revenue stack or automate complex workflows, I'm ready to help you level up.
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          <Button variant="primary" icon onClick={() => window.location.href = 'mailto:sam@example.com'}>
            Email Me
          </Button>
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