'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Index', index: '00' },
  { href: '#about', label: 'About', index: '01' },
  { href: '#projects', label: 'Projects', index: '02' },
  { href: '#experience', label: 'Experience', index: '03' },
  { href: '#problem-solving', label: 'Problem Solving', index: '04' },
  { href: '#contact', label: 'Contact', index: '05' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F5]/92 dark:bg-[#111211]/92 backdrop-blur-md border-b border-[#E5E3D8] dark:border-[#262825] shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
          : 'bg-[#FAF9F5] dark:bg-[#111211] border-b border-[#EAE8DE] dark:border-[#202220]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Wordmark */}
          <div className="flex items-center space-x-4">
            <Link
              href="#home"
              className="group flex flex-col focus:outline-none"
              aria-label="Arif Afzal — Home"
            >
              <span className="font-mono text-sm tracking-[0.22em] font-semibold uppercase text-[#141413] dark:text-[#F2F1ED] group-hover:text-[#284E3A] dark:group-hover:text-[#4E8767] transition-colors">
                ARIF AFZAL
              </span>
              <span className="text-[10px] tracking-wider text-[#737168] dark:text-[#7E7C74] font-mono hidden sm:inline-block">
                SOFTWARE DEV · EDUCATOR
              </span>
            </Link>

            {/* Subtle Availability Indicator */}
            <div className="hidden xl:flex items-center space-x-2 pl-4 border-l border-[#E5E3D8] dark:border-[#2A2C29]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#284E3A] dark:bg-[#4E8767] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              </span>
              <span className="text-[11px] font-mono text-[#403F3A] dark:text-[#BFBEB6] tracking-wide">
                Available for engineering roles
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group text-[13px] font-medium tracking-wide text-[#403F3A] dark:text-[#BFBEB6] hover:text-[#141413] dark:hover:text-[#F2F1ED] transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#284E3A]"
              >
                <span className="font-mono text-[10px] text-[#737168] dark:text-[#7E7C74] group-hover:text-[#284E3A] dark:group-hover:text-[#4E8767] transition-colors">
                  {link.index}
                </span>
                <span>{link.label}</span>
              </Link>
            ))}

            <div className="h-4 w-px bg-[#E5E3D8] dark:border-[#2A2C29]" />

            <ThemeToggle />
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#E5E3D8] dark:border-[#2A2C29] rounded-sm text-[#141413] dark:text-[#F2F1ED] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E3D8] dark:border-[#2A2C29] bg-[#FAF9F5] dark:bg-[#111211] px-4 pt-4 pb-6 space-y-3">
          <div className="flex items-center space-x-2 pb-3 mb-2 border-b border-[#EAE8DE] dark:border-[#202220]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#284E3A] dark:bg-[#4E8767] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
            </span>
            <span className="text-xs font-mono text-[#403F3A] dark:text-[#BFBEB6]">
              Available for select engineering roles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded text-sm font-medium text-[#141413] dark:text-[#F2F1ED] hover:bg-[#F3F1EA] dark:hover:bg-[#1A1C1A] transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-[#737168] dark:text-[#7E7C74]">
                    {link.index}
                  </span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737168] dark:text-[#7E7C74]" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE8DE] dark:border-[#202220] flex items-center justify-between text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
            <span>West Champaran, Bihar</span>
            <span>26°48&apos; N, 84°30&apos; E</span>
          </div>
        </div>
      )}
    </header>
  );
}
