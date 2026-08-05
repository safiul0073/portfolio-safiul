"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Linkedin, Menu, Moon, Sun, Twitter, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/portfolio';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

const iconButtonClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-fg-muted ring-1 ring-line/60 ' +
  'transition-[color,border-color,transform] duration-micro ease-out ' +
  'hover:text-fg hover:ring-fg/40 active:scale-95';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 24);
      });
    };

    // Run once so a reload deep in the page renders the correct variant.
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close on navigation.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

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
    <header
      className={cn(
        'fixed z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-base ease-out',
        scrolled
          ? 'border-line/70 bg-surface/90 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-surface/70 backdrop-blur-md',
      )}
    >
      <Container>
        {/* Constant height keeps --nav-h truthful for scroll-padding and page offsets. */}
        <div className="flex h-nav items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-fg transition-transform duration-micro ease-out hover:-translate-y-px active:scale-95"
            aria-label="Md Safiullah portfolio home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface font-mono text-xs font-bold ring-1 ring-line-strong/70">
              MS
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold leading-none">Md Safiullah</span>
              <span className="type-label mt-1.5 block">Full stack developer</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative py-2 text-sm font-medium transition-colors duration-base ease-out',
                  isActive(link.href)
                    ? 'text-fg after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-fg'
                    : 'text-fg-muted hover:text-fg',
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-[color,transform] duration-micro ease-out hover:-translate-y-0.5 hover:text-fg active:scale-95"
                aria-label={link.name}
              >
                {renderSocialIcon(link.name)}
              </a>
            ))}

            <button onClick={toggleTheme} className={iconButtonClass} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className={iconButtonClass} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen((open) => !open)}
              className={iconButtonClass}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* grid-rows 0fr -> 1fr animates height without measuring, and the wrapper
          keeps overflow hidden so content never spills while it opens. */}
      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-slow ease-smooth md:hidden',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0">
          <div className="border-b border-line/60 bg-surface px-5 pb-5 pt-2 shadow-lg sm:px-6">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  tabIndex={isOpen ? undefined : -1}
                  className={cn(
                    'border-b border-line/60 py-3 pl-3 text-sm font-medium transition-colors duration-base ease-out last:border-0',
                    isActive(link.href)
                      ? 'border-l-2 border-l-fg text-fg'
                      : 'border-l-2 border-l-transparent text-fg-muted hover:text-fg',
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex gap-5 border-t border-line/60 pt-5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isOpen ? undefined : -1}
                  className="text-fg-muted transition-colors duration-base ease-out hover:text-fg"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
