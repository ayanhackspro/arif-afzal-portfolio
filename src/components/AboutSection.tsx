import { GraduationCap, MapPin, Compass, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74] mb-3">
            <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
            <span>INDEX 01 · BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Editorial Multi-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Pull Quote & Focus */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border-l-2 border-[#284E3A] dark:border-[#4E8767] pl-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
                Core Premise
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-[#141413] dark:text-[#F2F1ED] leading-snug italic">
                &ldquo;Engineering software is not merely about writing lines of syntax—it is about cultivating clarity, diagnosing fundamentals, and lifting others as you build.&rdquo;
              </p>
            </div>

            {/* Geographic & Regional Context */}
            <div className="p-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] space-y-3 font-mono text-xs">
              <div className="flex items-center space-x-2 text-[#284E3A] dark:text-[#4E8767]">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Base of Operations</span>
              </div>
              <p className="text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                West Champaran, Bihar, India.<br />
                A historic region with deep roots, where I mentor aspiring engineers and build digital systems for the wider world.
              </p>
              <div className="pt-2 text-[11px] text-[#737168] dark:text-[#7E7C74] flex justify-between border-t border-[#EAE8DE] dark:border-[#202220]">
                <span>Coordinates</span>
                <span>26°48&apos; N, 84°30&apos; E</span>
              </div>
            </div>
          </div>

          {/* Middle Column: The Story & Journey */}
          <div className="lg:col-span-5 space-y-6 text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed text-base sm:text-lg font-light">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#284E3A] dark:first-letter:text-[#4E8767]">
              I&apos;m a Computer Science graduate from <strong className="font-medium text-[#141413] dark:text-[#F2F1ED]">GLA University, Mathura</strong>, with a strong interest in software development, problem-solving, and technology education.
            </p>

            <p>
              My journey has involved building web applications, working with cloud technologies, teaching computer science concepts, and experimenting with ideas that solve practical problems.
            </p>

            <p>
              I enjoy understanding how things work beneath the surface, writing clean code, and sharing what I learn with others.
            </p>

            <div className="pt-6 border-t border-[#EAE8DE] dark:border-[#202220] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74] block">
                Technical Convictions
              </span>

              <div className="grid grid-cols-1 gap-3 font-sans text-sm">
                <div className="flex items-start space-x-3 p-3 bg-[#F3F1EA] dark:bg-[#181A18] border border-[#E5E3D8] dark:border-[#262825]">
                  <CheckCircle2 className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#141413] dark:text-[#F2F1ED]">First-Principles Engineering:</span>
                    <span className="text-[#403F3A] dark:text-[#BFBEB6] ml-1">
                      No blind copy-pasting or superficial abstractions. Every system is reasoned from foundational constraints.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-[#F3F1EA] dark:bg-[#181A18] border border-[#E5E3D8] dark:border-[#262825]">
                  <CheckCircle2 className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#141413] dark:text-[#F2F1ED]">Pedagogical Clarity:</span>
                    <span className="text-[#403F3A] dark:text-[#BFBEB6] ml-1">
                      Teaching 150+ students taught me that if you cannot explain an algorithm simply, you don&apos;t understand it deeply enough.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-[#F3F1EA] dark:bg-[#181A18] border border-[#E5E3D8] dark:border-[#262825]">
                  <CheckCircle2 className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#141413] dark:text-[#F2F1ED]">Zero Artificial Fluff:</span>
                    <span className="text-[#403F3A] dark:text-[#BFBEB6] ml-1">
                      Clean architecture, high-performance web standards, and genuine business problem solving.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credentials & Fast Facts */}
          <div className="lg:col-span-3 space-y-6">
            <div className="border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#141614] p-6 space-y-5">
              <div className="flex items-center space-x-2 pb-3 border-b border-[#EAE8DE] dark:border-[#202220]">
                <GraduationCap className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Academic Record
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase block">Degree Awarded</span>
                  <span className="text-sm font-medium text-[#141413] dark:text-[#F2F1ED]">
                    B.Tech in Computer Science &amp; Engineering
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase block">Institution</span>
                  <span className="text-sm font-medium text-[#141413] dark:text-[#F2F1ED]">
                    GLA University, Mathura
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase block">Conferral Date</span>
                  <span className="text-sm font-medium text-[#284E3A] dark:text-[#4E8767]">
                    Graduated June 2024
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase block">Campus Location</span>
                  <span className="text-sm text-[#403F3A] dark:text-[#BFBEB6]">
                    Mathura, Uttar Pradesh, India
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE8DE] dark:border-[#202220] text-[11px] font-mono text-[#737168] dark:text-[#7E7C74] space-y-1">
                <span className="block uppercase text-[9px] tracking-wider">Key Focus Areas</span>
                <p>Data Structures, Serverless Web Systems, Cloud Foundations, Compiler &amp; OS Principles.</p>
              </div>
            </div>

            {/* Quick Mentorship Impact Callout */}
            <div className="p-5 border border-[#C6DCCD] dark:border-[#2B4E38] bg-[#EAF2EC] dark:bg-[#16261C] font-mono text-xs space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#284E3A] dark:text-[#4E8767] font-semibold block">
                Mentorship Milestone
              </span>
              <p className="text-[#141413] dark:text-[#F2F1ED]">
                Directly coached student achieving <strong className="font-semibold text-[#284E3A] dark:text-[#4E8767]">State Rank 2</strong> across Bihar Polytechnic examinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
