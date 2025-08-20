// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// ✅ Import your logo

// Adjust path if your logo is in /images or elsewhere

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
<header className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3">
      {/* Image Logo */}
      <img
        src="/images/lele.jpg"
        alt=""
        className="h-10 md:h-12 w-auto"
      />
      {/* Optional Text beside Logo */}
      <span className="text-xl md:text-2xl font-bold text-primary hidden md:inline">
        Cabin Lodge
      </span>
    </Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-accent font-semibold'
                  : 'text-gray-700 hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-light border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${
                    isActive(link.path)
                      ? 'text-accent font-bold'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;