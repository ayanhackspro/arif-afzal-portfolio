'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, MapPin, GraduationCap, ArrowUpRight, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-[720px] mx-auto px-4 sm:px-5 pt-7 sm:pt-9"
    >
      <div className="border border-[#333333] hover:border-[#444444] rounded-[10px] p-5 sm:p-6 bg-transparent transition-all shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        {/* Header: Avatar + Meta */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
          {/* Avatar with pulsing status indicator */}
          <div className="relative shrink-0 self-start">
            <div className="w-[72px] h-[72px] rounded-full bg-[#1a1b1c] border-2 border-[#222222] flex items-center justify-center text-xl font-mono font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              AA
            </div>
            <span
              className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#02ff67] rounded-full border-2 border-[#0b0d0e] animate-status-glow"
              title="Available for opportunities"
            />
          </div>

          {/* Intro text */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h1 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none">
                {PERSONAL_DETAILS.name}
              </h1>
              {/* Status pill with glowing dot */}
              <span className="inline-flex items-center gap-1.5 bg-[#091d11] text-[#02ff67] border border-[#02ff67]/30 rounded-full px-2.5 py-0.5 text-xs font-medium shadow-[0_0_10px_rgba(2,255,103,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02ff67] animate-ping" />
                Available for work
              </span>
            </div>

            <p className="font-mono text-xs text-[#999999]">
              Software Developer · Technical Educator · Founder
            </p>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#999999] bg-[#1a1b1c] border border-[#333333] rounded-md px-2 py-0.5">
                <MapPin className="w-3 h-3 text-[#b3b3b3]" />
                West Champaran, Bihar, India
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#999999] bg-[#1a1b1c] border border-[#333333] rounded-md px-2 py-0.5">
                <GraduationCap className="w-3 h-3 text-[#b3b3b3]" />
                GLA University &apos;24 (B.Tech CSE)
              </span>
            </div>
          </div>
        </div>

        {/* Bio bullet points */}
        <div className="mt-5 pt-4 border-t border-[#333333]">
          <ul className="space-y-2 text-sm text-[#b3b3b3] leading-relaxed">
            <li className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]">
              <span className="text-white font-medium">Building things. Solving problems. Sharing knowledge.</span>
            </li>
            <li className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]">
              Software developer and computer science educator passionate about building useful digital products, solving complex problems, and helping others understand technology.
            </li>
            <li className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]">
              Computer Science Instructor at <span className="text-white">Champaran Group of Institutions</span> (mentored 150+ students in DSA, Web, and Cloud; coached State Rank 2 in Bihar Polytechnic).
            </li>
            <li className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]">
              Solved <span className="text-[#02ff67] font-mono font-medium">400+</span> DSA problems in Java (LeetCode 175+, GeeksforGeeks 80+, HackerRank 120+).
            </li>
            <li className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]">
              Secured <span className="text-white font-medium">₹10,00,000</span> in seed funding in March 2025 from Startup Bihar for <span className="text-white">Essence Royale</span> as sole founder.
            </li>
          </ul>
        </div>

        {/* Actions Row */}
        <div className="mt-5 pt-4 border-t border-[#333333] flex flex-wrap items-center justify-between gap-3">
          {/* Email button with copy interaction */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#1a1b1c] hover:bg-[#232326] active:scale-95 text-white border border-[#333333] hover:border-[#666666] rounded-md px-3.5 py-1.5 text-xs font-medium transition-all shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#02ff67]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#b3b3b3]" />
                  <span>{PERSONAL_DETAILS.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Pills */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-md px-2.5 py-1.5 text-xs transition-all hover:-translate-y-0.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-md px-2.5 py-1.5 text-xs transition-all hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-md px-2.5 py-1.5 text-xs transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
