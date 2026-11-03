import { SKILL_GROUPS } from '@/data/portfolioData';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
              <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              <span>INDEX 05 · CAPABILITIES &amp; STACK</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
              Technical Competencies
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#403F3A] dark:text-[#BFBEB6] font-light">
            A structured breakdown of languages, modern web runtimes, distributed cloud patterns, and core systems knowledge.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.index}
              className="border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Card Header with Index */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE8DE] dark:border-[#202220]">
                  <span className="font-mono text-xs font-semibold text-[#284E3A] dark:text-[#4E8767]">
                    {group.index} // DOMAIN
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[#737168] dark:text-[#7E7C74] font-mono mt-1">
                    {group.description}
                  </p>
                </div>

                {/* Skill Items List */}
                <ul className="space-y-2.5 pt-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-2.5 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] flex flex-col space-y-0.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium font-sans text-[#141413] dark:text-[#F2F1ED]">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-[#EAF2EC] dark:bg-[#1B2B20] text-[#284E3A] dark:text-[#4E8767] border border-[#C6DCCD] dark:border-[#2B4E38]">
                            Primary
                          </span>
                        )}
                      </div>
                      {skill.note && (
                        <span className="text-[11px] font-mono text-[#737168] dark:text-[#7E7C74]">
                          {skill.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
