"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Menu, Moon, Sun, Twitter, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/portfolio';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Tools', href: '/tools' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  return (
    <motion.header 
      className={`fixed z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? 'border-neutral-200 bg-white/90 py-2.5 shadow-sm backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90'
          : 'border-neutral-200/70 bg-white/75 py-3.5 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/75'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
          <Link
            href="/"
            className="flex items-center gap-3 text-neutral-950 dark:text-white"
            aria-label="Md Safiullah portfolio home"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-neutral-300 bg-white font-mono text-xs font-bold dark:border-neutral-700 dark:bg-neutral-900">MS</span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold leading-none">Md Safiullah</span>
              <span className="mt-1 block font-mono text-[9px] uppercase text-neutral-500">Full stack developer</span>
            </span>
          </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-neutral-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-neutral-950 dark:text-white dark:after:bg-white'
                    : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white'
                }`}
                onClick={handleNavLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Social Links & Theme Toggle */}
          <div className="hidden items-center space-x-3 lg:flex">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {renderSocialIcon(link.name)}
              </motion.a>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              className="border border-neutral-200 bg-white p-2 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-white dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <motion.button
              onClick={toggleTheme}
              className="mr-2 border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={toggleMenu}
              className="border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
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
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="border-b border-neutral-200 bg-white px-4 pb-4 pt-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`border-b py-3 font-medium transition-colors last:border-0 ${
                  isActive(link.href)
                    ? 'border-neutral-200 text-neutral-950 dark:border-neutral-800 dark:text-white'
                    : 'border-neutral-100 text-neutral-600 hover:text-neutral-950 dark:border-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                }`}
                onClick={handleNavLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 flex space-x-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                aria-label={link.name}
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
