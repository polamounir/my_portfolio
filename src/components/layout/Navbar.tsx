import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 64; 
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      if (isMenuOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <nav 
      className={`nav-bg-theme fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled ? 'shadow-lg backdrop-blur-md border-b border-theme' : 'backdrop-blur-sm'}
      `}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#" 
            onClick={(e) => handleSmoothScroll(e, '#')}
            className="text-xl font-bold text-gradient-theme shrink-0 hover:opacity-80 transition-opacity"
          >
            POLA Mounir
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className="nav-link-theme px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg nav-link-theme transition-all duration-200 shrink-0"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg nav-link-theme transition-all duration-200 shrink-0"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg nav-link-theme transition-all duration-200 shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "👆" : "👇"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden nav-bg-theme backdrop-blur-md border-t border-theme overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-3 py-2 rounded-lg nav-link-theme transition-all duration-200"
                onClick={(e) => handleSmoothScroll(e, item.path)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 