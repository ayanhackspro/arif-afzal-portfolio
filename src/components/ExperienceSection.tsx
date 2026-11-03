'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="max-w-[720px] mx-auto px-4 sm:px-5 mt-10"
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">
          Experience
        </h2>
        <p className="text-xs text-[#999999] mt-0.5">
          Teaching, software engineering, and frontend optimization.
        </p>
      </div>

      <div className="flex flex-col relative">
        {EXPERIENCES.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const isLast = idx === EXPERIENCES.length - 1;

          return (
            <div key={exp.company + exp.period} className="flex relative">
              {/* Timeline Marker (Dot + Dashed Line) */}
              <div className="flex flex-col items-center w-6 shrink-0 mr-3 sm:mr-4">
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-4 shrink-0 transition-all ${
                    idx === 0
                      ? 'bg-[#02ff67] shadow-[0_0_8px_#02ff67]'
                      : 'bg-[#555555]'
                  }`}
                />
                {!isLast && (
                  <div className="flex-1 w-px border-l border-dashed border-[#444444] mt-1.5" />
                )}
              </div>

              {/* Collapsible Card */}
              <div className="flex-1 mb-3.5 border border-[#333333] hover:border-[#666666] rounded-[10px] bg-[#121314] overflow-hidden transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 cursor-pointer select-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    {/* Logo / Initial Box */}
                    <div className="w-9 h-9 rounded-md bg-[#1a1b1c] border border-[#333333] group-hover:border-[#666666] flex items-center justify-center shrink-0 text-white font-mono text-xs font-semibold transition-colors">
                      {exp.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-[#4ade80] transition-colors">
                        {exp.company}
                      </div>
                      <div className="text-xs text-[#4ade80] font-medium leading-tight">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 self-stretch sm:self-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-white/[0.05]">
                    <div className="text-right">
                      <span className="font-mono text-[11px] text-[#999999] block">
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="font-mono text-[10px] text-[#666666] block">
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#777777] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Animated Collapsible Body with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 border-t border-white/[0.06]">
                        <ul className="mt-2 space-y-2 text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-[#555555]"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
