import { Calendar, Building2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
              <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              <span>INDEX 03 · CHRONICLE &amp; ROLES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#403F3A] dark:text-[#BFBEB6] font-light">
            A chronological timeline of technical instruction, engineering execution, and UI performance optimization across institutions and engineering teams.
          </p>
        </div>

        {/* Timeline Dossier */}
        <div className="relative border-l border-[#E5E3D8] dark:border-[#262825] ml-2 sm:ml-4 md:ml-36 space-y-16 pl-6 sm:pl-10 md:pl-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.company + exp.period} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF9F5] dark:bg-[#111211] border-2 border-[#284E3A] dark:border-[#4E8767] group-hover:scale-125 transition-transform duration-200" />

              {/* Date Column (Desktop Offset) */}
              <div className="md:absolute md:-left-44 md:top-1.5 md:w-32 md:text-right mb-2 md:mb-0">
                <span className="text-xs font-mono text-[#737168] dark:text-[#7E7C74] tracking-wider uppercase block">
                  {exp.period}
                </span>
                <span className="text-[10px] font-mono text-[#284E3A] dark:text-[#4E8767] block">
                  0{idx + 1} // RECORD
                </span>
              </div>

              {/* Experience Card */}
              <div className="border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                      <span className="flex items-center space-x-1.5 font-medium text-[#284E3A] dark:text-[#4E8767]">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </span>
                      {exp.location && (
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="self-start text-[11px] font-mono px-2.5 py-1 bg-[#F3F1EA] dark:bg-[#1F211F] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#403F3A] dark:text-[#BFBEB6]">
                    {exp.type}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 text-sm text-[#403F3A] dark:text-[#BFBEB6] font-sans">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#284E3A] dark:bg-[#4E8767] shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
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
