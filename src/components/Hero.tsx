'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Terminal, Clock, MapPin, Award, Users, Code2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function Hero() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#EAE8DE] dark:border-[#202220]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-header Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 mb-12 border-b border-[#E5E3D8] dark:border-[#262825] text-xs font-mono tracking-wider uppercase text-[#737168] dark:text-[#7E7C74]">
          <div className="md:col-span-6 flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
            <span>{PERSONAL_DETAILS.roleLabel}</span>
          </div>
          <div className="md:col-span-3 flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
            <span>{PERSONAL_DETAILS.location}</span>
          </div>
          <div className="md:col-span-3 flex items-center justify-start md:justify-end space-x-2">
            <Clock className="w-3.5 h-3.5 text-[#284E3A] dark:text-[#4E8767]" />
            <span>{currentTime ? `${currentTime} IST` : 'INDIA STANDARD TIME'}</span>
          </div>
        </div>

        {/* Asymmetrical Main Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Editorial Typography & Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] text-[#141413] dark:text-[#F2F1ED] font-normal">
                <span className="block italic">{PERSONAL_DETAILS.headline.line1}</span>
                <span className="block font-medium">{PERSONAL_DETAILS.headline.line2}</span>
                <span className="block text-[#403F3A] dark:text-[#BFBEB6]">{PERSONAL_DETAILS.headline.line3}</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed max-w-2xl font-light">
              {PERSONAL_DETAILS.tagline}
            </p>

            {/* Restrained CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center space-x-2 px-6 py-3.5 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] text-xs font-mono uppercase tracking-widest hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center space-x-2 px-6 py-3.5 border border-[#141413] dark:border-[#F2F1ED] text-[#141413] dark:text-[#F2F1ED] text-xs font-mono uppercase tracking-widest hover:bg-[#F3F1EA] dark:hover:bg-[#1A1C1A] transition-all duration-200"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="https://github.com/Arifafzal51"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-mono text-[#737168] dark:text-[#7E7C74] hover:text-[#141413] dark:hover:text-[#F2F1ED] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/hyarif/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-mono text-[#737168] dark:text-[#7E7C74] hover:text-[#141413] dark:hover:text-[#F2F1ED] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Technical Dossier & Telemetry Card */}
          <div className="lg:col-span-4 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 lg:p-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Field Dossier
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">
                REF: AFZAL.2026
              </span>
            </div>

            {/* Key Telemetry Matrix */}
            <div className="space-y-4">
              <div className="p-3.5 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                      Algorithmic Problem Solving
                    </span>
                    <div className="font-serif text-3xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      400+
                    </div>
                  </div>
                  <Code2 className="w-5 h-5 text-[#284E3A] dark:text-[#4E8767] mt-1" />
                </div>
                <div className="mt-2 text-xs text-[#737168] dark:text-[#7E7C74] font-mono flex items-center justify-between">
                  <span>LC 175+ · GFG 80+ · HR 120+</span>
                  <span className="text-[#284E3A] dark:text-[#4E8767]">Java</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                      Technical Education
                    </span>
                    <div className="font-serif text-3xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      150+
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-[#284E3A] dark:text-[#4E8767] mt-1" />
                </div>
                <div className="mt-2 text-xs text-[#737168] dark:text-[#7E7C74] font-mono flex items-center justify-between">
                  <span>Students Mentored in DSA & Web</span>
                  <span className="text-[#284E3A] dark:text-[#4E8767]">State Rank 2</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                      Venture & Ecosystem
                    </span>
                    <div className="font-serif text-2xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      ₹10,00,000
                    </div>
                  </div>
                  <Award className="w-5 h-5 text-[#284E3A] dark:text-[#4E8767] mt-1" />
                </div>
                <div className="mt-2 text-xs text-[#737168] dark:text-[#7E7C74] font-mono">
                  <span>Seed Funding · Startup Bihar (Founder)</span>
                </div>
              </div>
            </div>

            {/* Academic Footnote */}
            <div className="pt-4 border-t border-[#EAE8DE] dark:border-[#202220] text-xs font-mono text-[#737168] dark:text-[#7E7C74] space-y-1">
              <div className="flex justify-between">
                <span>Degree</span>
                <span className="text-[#141413] dark:text-[#F2F1ED]">B.Tech in CSE</span>
              </div>
              <div className="flex justify-between">
                <span>Alma Mater</span>
                <span className="text-[#141413] dark:text-[#F2F1ED]">GLA University</span>
              </div>
              <div className="flex justify-between">
                <span>Graduation</span>
                <span className="text-[#141413] dark:text-[#F2F1ED]">June 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
