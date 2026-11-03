'use client';

const TRACK_1 = [
  'Java',
  'ReactJS',
  'Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Node.js',
  'AWS Lambda',
  'Serverless',
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
    <section id="skills" className="max-w-[720px] mx-auto px-4 sm:px-5 mt-9">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#999999]">
          Technologies &amp; Tools
        </h2>
        <span className="text-[11px] font-mono text-[#666666]">
          Hover to pause
        </span>
      </div>

      <div className="relative overflow-hidden skills-mask marquee-pause flex flex-col gap-2.5 py-1">
        {/* Track 1: Scrolls Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-2">
            {[...TRACK_1, ...TRACK_1].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-full px-3 py-1 text-xs font-medium transition-all cursor-default whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"></span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Track 2: Scrolls Right */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex items-center gap-2">
            {[...TRACK_2, ...TRACK_2].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center gap-1.5 bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] rounded-full px-3 py-1 text-xs font-medium transition-all cursor-default whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
