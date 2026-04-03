/**
 * Navbar
 * Sticky site navigation with desktop and mobile menus and a Join CTA.
 * Uses route-aware links: hash anchors on home and Link navigation off home.
 */
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { getAssetPath } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#why-join', label: 'Why Join' },
    { href: '#events', label: 'Achievements' },
    { href: '#projects', label: 'Upcoming Events' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#team', label: 'Team' },
    { href: '#partners', label: 'Partners' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl saturate-150 ${
        isScrolled 
          ? 'bg-slate-900/40 shadow-lg shadow-code-purple/10 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand/Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <img src={getAssetPath("images/Dcode-Logo.png")} alt="DCode Logo" className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <span className="text-base sm:text-lg md:text-xl font-bold font-heading transition-all duration-500 hover:scale-105 text-white">
              <span className="gradient-text-horizontal">DCode</span>
              <span className="hidden xs:inline text-gray-300"> Developers Club</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10">
            {navLinks.map((item) => (
              isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group px-3 py-2 text-sm font-medium font-primary transition-all duration-300 rounded-xl hover:bg-white/10 text-gray-300 hover:text-code-purple"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-code-indigo to-code-pink group-hover:w-1/2 transition-all duration-500 ease-out rounded-full"></span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="relative group px-3 py-2 text-sm font-medium font-primary transition-all duration-300 rounded-xl hover:bg-white/10 text-gray-300 hover:text-code-purple"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-code-indigo to-code-pink group-hover:w-1/2 transition-all duration-500 ease-out rounded-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://forms.gle/CHamTqBMouu6ucYa7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-code-indigo via-code-purple to-code-pink hover:from-code-purple hover:via-code-pink hover:to-code-indigo text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-code-purple/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">Join Us</span>
                <span className="xs:hidden">Join</span>
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </a>

            {/* Sleek Mobile Menu Button */}
            <button
              type="button"
              className="xl:hidden flex flex-col gap-1 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Sleek Mobile Menu */}
        {isMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                isHomePage ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 text-gray-200 active:bg-white/20"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={`/${item.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 text-gray-200 active:bg-white/20"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-code-indigo via-code-purple to-code-pink text-white text-center shadow-lg active:scale-95"
              >
                Join Us Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
