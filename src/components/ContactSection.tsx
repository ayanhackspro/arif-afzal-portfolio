'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Check, Copy, ArrowUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      // fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="max-w-[720px] mx-auto px-4 sm:px-5 mt-10 pb-16"
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">
          Contact
        </h2>
        <p className="text-xs text-[#999999] mt-0.5">
          Have an idea? Let&apos;s build something.
        </p>
      </div>

      <div className="border border-[#333333] hover:border-[#444444] rounded-[10px] p-5 sm:p-6 bg-[#121314] transition-all space-y-4 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        <p className="text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed">
          I&apos;m always interested in interesting ideas, meaningful collaborations, and conversations about technology. Feel free to reach out directly via email, telephone, or connect on social platforms.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          {/* Email button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-between p-3 rounded-md bg-[#1a1b1c] hover:bg-[#232326] hover:-translate-y-0.5 active:scale-95 border border-[#333333] hover:border-[#666666] text-white text-xs font-medium transition-all text-left shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#3b82f6]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#999999] font-mono leading-none">Email</span>
                <span className="mt-0.5">{PERSONAL_DETAILS.email}</span>
              </div>
            </div>
            {copiedEmail ? (
              <span className="text-[11px] font-mono text-[#02ff67] flex items-center gap-1">
                <Check className="w-3 h-3" />
                Copied
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#666666]" />
            )}
          </button>

          {/* Phone button */}
          <button
            onClick={handleCopyPhone}
            className="flex items-center justify-between p-3 rounded-md bg-[#1a1b1c] hover:bg-[#232326] hover:-translate-y-0.5 active:scale-95 border border-[#333333] hover:border-[#666666] text-white text-xs font-medium transition-all text-left shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#02ff67]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#999999] font-mono leading-none">Phone / WhatsApp</span>
                <span className="mt-0.5">{PERSONAL_DETAILS.phone}</span>
              </div>
            </div>
            {copiedPhone ? (
              <span className="text-[11px] font-mono text-[#02ff67] flex items-center gap-1">
                <Check className="w-3 h-3" />
                Copied
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#666666]" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href={PERSONAL_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-md bg-[#1a1b1c] hover:bg-[#232326] hover:-translate-y-0.5 border border-[#333333] hover:border-[#666666] text-white text-xs font-medium transition-all shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="w-4 h-4 text-white" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#999999] font-mono leading-none">GitHub</span>
                <span className="mt-0.5">github.com/Arifafzal51</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>

          {/* LinkedIn link */}
          <a
            href={PERSONAL_DETAILS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-md bg-[#1a1b1c] hover:bg-[#232326] hover:-translate-y-0.5 border border-[#333333] hover:border-[#666666] text-white text-xs font-medium transition-all shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
              <div className="flex flex-col">
                <span className="text-[10px] text-[#999999] font-mono leading-none">LinkedIn</span>
                <span className="mt-0.5">linkedin.com/in/hyarif</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#666666]">
        <div>
          <span>© {new Date().getFullYear()} Arif Afzal · West Champaran, Bihar</span>
        </div>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#b3b3b3] hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </motion.footer>
  );
}
