'use client';

import { motion } from 'framer-motion';

const TRACK_1 = [
  'Java',
  'ReactJS',
  'Next.js 15',
  'TypeScript',
  'JavaScript (ES6+)',
  'Node.js',
  'AWS Lambda',
  'WebSocket API',
  'Tailwind CSS',
  'PHP',
  'HTML5 & CSS3',
];

const TRACK_2 = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'MongoDB',
  'MySQL',
  'Google Cloud Platform',
  'Linux & Bash',
  'Git & GitHub',
  'RESTful APIs',
  'System Design Basics',
  'Vercel',
  'VS Code',
  'Figma',
];

export default function SkillsMarquee() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-[720px] mx-auto px-4 sm:px-5 mt-9"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#999999]">
          Technologies &amp; Tools
        </h2>
        <span className="text-[11px] font-mono text-[#666666]">
          Hover to pause
        </span>
      </div>

      <div className="relative overflow-hidden marquee-mask marquee-wrapper flex flex-col gap-2.5 py-1">
        {/* Track 1: Smooth Infinite Scroll Left */}
        <div className="overflow-hidden flex w-full">
          <div className="marquee-track-left flex items-center gap-2">
            {[...TRACK_1, ...TRACK_1, ...TRACK_1, ...TRACK_1].map((skill, index) => (
              <span
                key={`t1-${skill}-${index}`}
                className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-full px-3 py-1 text-xs font-medium transition-all cursor-default whitespace-nowrap shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#02ff67]"></span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Smooth Infinite Scroll Right */}
        <div className="overflow-hidden flex w-full">
          <div className="marquee-track-right flex items-center gap-2">
            {[...TRACK_2, ...TRACK_2, ...TRACK_2, ...TRACK_2].map((skill, index) => (
              <span
                key={`t2-${skill}-${index}`}
                className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-full px-3 py-1 text-xs font-medium transition-all cursor-default whitespace-nowrap shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
