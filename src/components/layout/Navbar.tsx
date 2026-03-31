import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Menu', path: '/menu' },
  { name: 'À propos', path: '/about' },
  { name: 'Galerie', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-semibold tracking-wider uppercase z-50">
          Fama
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/reservations"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors"
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-lg font-serif tracking-wide uppercase transition-colors',
                    location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/reservations"
                className="bg-primary text-primary-foreground text-center px-6 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors mt-4"
              >
                Réserver une table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
