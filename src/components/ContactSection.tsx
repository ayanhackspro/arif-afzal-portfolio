'use client';

import { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, ArrowUp, Send, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [quickNote, setQuickNote] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleQuickDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collaboration Inquiry from ${quickNote.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Arif,\n\n${quickNote.message}\n\nBest regards,\n${quickNote.name}\n${quickNote.email}`
    );
    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 md:pt-36 bg-[#FAF9F5] dark:bg-[#111211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Header */}
        <div className="pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74] mb-3">
            <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
            <span>INDEX 07 · INITIATE CONTACT</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight max-w-4xl">
            Have an idea? Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-[#403F3A] dark:text-[#BFBEB6] font-light">
            I&apos;m always interested in interesting ideas, meaningful collaborations, and conversations about technology.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#E5E3D8] dark:border-[#262825]">
          {/* Left Column: Direct Inquiries & Interactive Copy Buttons */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74] block">
                Direct Channels
              </span>

              {/* Email Card with Copy Interaction */}
              <div className="p-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#151715] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                    <Mail className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
                    <span>ELECTRONIC MAIL</span>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className="font-serif text-xl sm:text-2xl text-[#141413] dark:text-[#F2F1ED] hover:text-[#284E3A] dark:hover:text-[#4E8767] transition-colors block"
                  >
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 border border-[#E5E3D8] dark:border-[#2A2C29] bg-[#FAF9F5] dark:bg-[#1E201E] text-xs font-mono text-[#141413] dark:text-[#F2F1ED] hover:border-[#284E3A] dark:hover:border-[#4E8767] transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] text-xs font-mono uppercase tracking-wider hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-colors"
                  >
                    <span>Send</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#151715] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                    <Phone className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
                    <span>TELEPHONE &amp; WHATSAPP</span>
                  </div>
                  <a
                    href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="font-serif text-xl sm:text-2xl text-[#141413] dark:text-[#F2F1ED] hover:text-[#284E3A] dark:hover:text-[#4E8767] transition-colors block"
                  >
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 border border-[#E5E3D8] dark:border-[#2A2C29] bg-[#FAF9F5] dark:bg-[#1E201E] text-xs font-mono text-[#141413] dark:text-[#F2F1ED] hover:border-[#284E3A] dark:hover:border-[#4E8767] transition-all"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 border border-[#141413] dark:border-[#F2F1ED] text-[#141413] dark:text-[#F2F1ED] text-xs font-mono uppercase tracking-wider hover:bg-[#F3F1EA] dark:hover:bg-[#1A1C1A] transition-colors"
                  >
                    <span>Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="space-y-3 pt-4 border-t border-[#EAE8DE] dark:border-[#202220]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74] block">
                Network &amp; Code
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] flex items-center justify-between group hover:border-[#284E3A] dark:hover:border-[#4E8767] transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <LinkedinIcon className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED]">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737168] dark:text-[#7E7C74] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] flex items-center justify-between group hover:border-[#284E3A] dark:hover:border-[#4E8767] transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED]">
                      GitHub Repositories
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737168] dark:text-[#7E7C74] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Formulation Form */}
          <div className="lg:col-span-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#151715] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Send A Direct Transmission
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">
                ENCRYPTED / DIRECT
              </span>
            </div>

            <form onSubmit={handleQuickDispatch} className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <label htmlFor="dispatch-name" className="text-[#737168] dark:text-[#7E7C74] uppercase text-[10px]">
                  Your Name / Organization
                </label>
                <input
                  id="dispatch-name"
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={quickNote.name}
                  onChange={(e) => setQuickNote({ ...quickNote, name: e.target.value })}
                  className="w-full p-3 bg-[#FAF9F5] dark:bg-[#1E201E] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED] focus:outline-none focus:border-[#284E3A] dark:focus:border-[#4E8767]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="dispatch-email" className="text-[#737168] dark:text-[#7E7C74] uppercase text-[10px]">
                  Your Email Address
                </label>
                <input
                  id="dispatch-email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={quickNote.email}
                  onChange={(e) => setQuickNote({ ...quickNote, email: e.target.value })}
                  className="w-full p-3 bg-[#FAF9F5] dark:bg-[#1E201E] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED] focus:outline-none focus:border-[#284E3A] dark:focus:border-[#4E8767]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="dispatch-message" className="text-[#737168] dark:text-[#7E7C74] uppercase text-[10px]">
                  Message / Project Brief
                </label>
                <textarea
                  id="dispatch-message"
                  required
                  rows={4}
                  placeholder="Tell me about what you are building or exploring..."
                  value={quickNote.message}
                  onChange={(e) => setQuickNote({ ...quickNote, message: e.target.value })}
                  className="w-full p-3 bg-[#FAF9F5] dark:bg-[#1E201E] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED] focus:outline-none focus:border-[#284E3A] dark:focus:border-[#4E8767] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] uppercase tracking-widest text-xs font-semibold hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Draft Transmission in Mail Client</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Minimal Architectural Colophon & Footer */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="text-[#141413] dark:text-[#F2F1ED] font-semibold">ARIF AFZAL</span>
            <span className="hidden sm:inline">·</span>
            <span>West Champaran, Bihar, India (26°48&apos; N, 84°30&apos; E)</span>
          </div>

          <div className="text-center sm:text-right space-y-1">
            <div>Engineered with Next.js 15, TypeScript &amp; Tailwind CSS.</div>
            <div className="text-[11px]">Strictly zero AI-generated visual boilerplate.</div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 border border-[#E5E3D8] dark:border-[#2A2C29] hover:border-[#284E3A] dark:hover:border-[#4E8767] text-[#141413] dark:text-[#F2F1ED] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
