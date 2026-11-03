'use client';

import { Award, Cloud, Shield, Palette } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export default function LeadershipAchievementsSection() {
  const fundingItem = ACHIEVEMENTS.find((a) => a.type === 'funding');
  const leadershipItems = ACHIEVEMENTS.filter((a) => a.type === 'leadership');
  const certItems = ACHIEVEMENTS.filter((a) => a.type === 'certification');

  return (
    <section id="achievements" className="max-w-[720px] mx-auto px-4 sm:px-5 mt-10">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">
          Leadership &amp; Achievements
        </h2>
        <p className="text-xs text-[#999999] mt-0.5">
          Startup funding, developer community mentorship, and accredited credentials.
        </p>
      </div>

      <div className="space-y-4">
        {/* Startup Bihar Funding Card */}
        {fundingItem && (
          <div className="border border-[#333333] hover:border-[#444444] rounded-[10px] p-5 sm:p-6 bg-[#121314] transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#26282a]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 rounded px-2 py-0.5">
                    Startup Founder
                  </span>
                  <span className="text-xs font-mono text-[#999999]">
                    March 2025
                  </span>
                </div>
                <h3 className="font-semibold text-white text-base">
                  ₹10,00,000 Seed Funding — Startup Bihar
                </h3>
              </div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-[#02ff67]">
                ₹10 Lakhs
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed mt-3">
              Secured ₹10,00,000 in seed funding from the Department of Industries, Government of Bihar for <strong className="text-white">Essence Royale</strong>, a fragrance e-commerce startup, as its sole founder. Successfully launched and managed the platform, including supplier relations, product curation, marketing, and operations.
            </p>
          </div>
        )}

        {/* Community Leadership & Facilitator Roles */}
        <div className="border border-[#333333] hover:border-[#444444] rounded-[10px] p-5 sm:p-6 bg-[#121314] transition-all space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#26282a]">
            <Cloud className="w-4 h-4 text-[#3b82f6]" />
            <h3 className="font-semibold text-white text-sm">
              Google Cloud &amp; Developer Community Leadership
            </h3>
          </div>

          <div className="space-y-3">
            {leadershipItems.map((item) => (
              <div key={item.title} className="text-xs sm:text-[13px] space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="font-mono text-[11px] text-[#999999]">{item.period}</span>
                </div>
                <div className="text-[11px] font-mono text-[#4ade80]">{item.organization}</div>
                <p className="text-[#b3b3b3] text-xs leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div className="pt-3 border-t border-[#26282a] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block">
              Certifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certItems.map((c) => (
                <div
                  key={c.title}
                  className="p-2.5 rounded bg-[#161718] border border-[#26282a] flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium text-white">{c.title}</div>
                    <div className="text-[10px] font-mono text-[#999999]">{c.organization}</div>
                  </div>
                  <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
