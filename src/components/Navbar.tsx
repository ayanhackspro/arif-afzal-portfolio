'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#dsa', label: 'DSA' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0d0e]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-5">
        <div className="flex items-center justify-between h-14">
          {/* Left: Avatar + Name */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-[#1a1b1c] border border-[#333333] group-hover:border-[#666666] transition-colors">
                <Image
                  src="/avatar.jpg"
                  alt="Arif Afzal"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#02ff67] rounded-full border-2 border-[#0b0d0e] shadow-[0_0_6px_#02ff67]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-white group-hover:text-[#4ade80] transition-colors leading-tight">
                {PERSONAL_DETAILS.name}
              </span>
              <span className="text-[10px] text-[#666666] font-mono leading-tight">
                @Arifafzal51
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-medium text-[#b3b3b3]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Star on GitHub button */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Arifafzal51"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-white border border-[#333333] hover:border-[#666666] rounded-full px-3 py-1.5 text-xs font-medium transition-all shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            >
              <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
              <span className="hidden sm:inline">Star on</span>
              <span>GitHub</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded bg-[#1a1b1c] border border-[#333333] text-[#b3b3b3] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0b0d0e] px-4 py-3 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-[#b3b3b3] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
