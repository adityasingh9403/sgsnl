
import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Volume2,
  Sparkles,
  X,
  Menu,
  ArrowUpRight,
  Phone,
} from 'lucide-react';

const Navbar = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  setQuoteModalOpen,
}) => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Events', path: '/events' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const getLinkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
      isActive
        ? 'text-amber-400'
        : 'text-gray-300 hover:text-amber-300'
    }`;

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    setQuoteModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08090D]/95 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-xl shadow-black/20'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between gap-4">

            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Shree Ganesh Sound and Light Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">

                <div className="w-full h-full rounded-[10px] bg-[#111217] flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Shree Ganesh Sound & Light"
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>

              <div>
                <span className="text-base sm:text-lg font-black tracking-wider bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent block uppercase leading-none">
                  SHREE GANESH
                </span>

                <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 tracking-[0.25em] block uppercase mt-1">
                  SOUND & LIGHT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-7">

              {navLinks.slice(0, 6).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={getLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-600 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Calculator Link */}
              <NavLink
                to="/calculator"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-[13px] font-bold transition-colors ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-300'
                  }`
                }
              >
                <Sparkles size={14} className="text-amber-400" />
                Calculator
              </NavLink>

              <NavLink
                to="/contact"
                className={getLinkClass}
              >
                Contact
              </NavLink>

            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 shrink-0">

              <a
                href="tel:+917000389061"
                aria-label="Call Shree Ganesh Sound and Light"
                className="hidden 2xl:flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
              >
                <Phone size={17} />
              </a>

              <button
                type="button"
                onClick={handleQuoteClick}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 p-[1px] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300"
              >
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-[7px] bg-[#111217] text-amber-300 text-[10px] font-extrabold uppercase tracking-wider group-hover:bg-transparent group-hover:text-black transition-all duration-300">
                  Get Instant Quote
                  <ArrowUpRight size={14} />
                </span>
              </button>

            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-amber-500/25 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`xl:hidden absolute top-full left-0 w-full bg-[#08090D]/98 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl overflow-hidden transition-all duration-300 ${
            mobileMenuOpen
              ? 'max-h-[90vh] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 overflow-y-auto max-h-[85vh]">

            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10">

              <div className="flex items-center gap-2 text-amber-400">
                <Volume2 size={17} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Explore Our Website
                </span>
              </div>

              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Menu
              </span>

            </div>

            {/* Mobile Links */}
            <div className="space-y-1">

              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                        : 'text-gray-300 hover:bg-white/5 hover:text-amber-300 border border-transparent'
                    }`
                  }
                >
                  {link.label}
                  <ArrowUpRight size={15} className="opacity-50" />
                </NavLink>
              ))}

              {/* Calculator */}
              <NavLink
                to="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                      : 'text-amber-400 hover:bg-white/5 border border-transparent'
                  }`
                }
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={16} />
                  Package Calculator
                </span>
                <ArrowUpRight size={15} />
              </NavLink>

            </div>

            {/* Mobile CTA */}
            <div className="mt-5 pt-5 border-t border-white/10 space-y-3">

              <button
                type="button"
                onClick={handleQuoteClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 text-black font-extrabold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
              >
                Get Instant Quote
                <ArrowUpRight size={16} />
              </button>

              <a
                href="tel:+917000389061"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:text-amber-300 hover:border-amber-400/30 transition-all"
              >
                <Phone size={15} className="text-amber-400" />
                +91 7000389061
              </a>

            </div>

          </div>
        </div>

      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
