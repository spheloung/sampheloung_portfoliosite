import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Career', href: '/career' },
    { name: 'Projects', href: '/projects' },
    { name: 'Photography', href: '/photography' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Top Row: Centered Name (Enlarged) */}
        <div className="w-full flex justify-between md:justify-center items-center relative z-50 mb-4 md:mb-6">
          <Link to="/" className="text-3xl md:text-3xl font-bold tracking-tighter text-white">
            Sam Pheloung<span className="text-accent">.</span>
          </Link>

          {/* Mobile Toggle (Absolute right on mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bottom Row: Links (Evenly Spaced & Larger) */}
        <div className="hidden md:flex w-full justify-between items-center max-w-5xl border-t border-white/5 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative text-base font-medium transition-colors tracking-wide px-2 py-1 ${location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                  ? 'text-accent'
                  : 'text-slate-400 hover:text-white'
                } after:absolute after:inset-0 after:rounded-lg after:content-[''] after:z-[-1] hover:after:animate-pulse-once`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-light ${location.pathname === link.href ? 'text-accent' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-light text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;