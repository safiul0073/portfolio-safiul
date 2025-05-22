import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/portfolio';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu on mobile when clicking a link
  const handleNavLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.a 
            href="#hero"
            className="text-xl font-bold text-dark-900 dark:text-white flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary-600 mr-1">&lt;</span>
            JD
            <span className="text-primary-600 ml-1">/&gt;</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={handleNavLinkClick}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          
          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {renderSocialIcon(link.name)}
              </motion.a>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-2 pb-4 px-4 bg-white dark:bg-dark-900 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 py-2 transition-colors font-medium"
                onClick={handleNavLinkClick}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex space-x-4 mt-4 pt-4 border-t border-dark-200 dark:border-dark-700">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              >
                {renderSocialIcon(link.name)}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;