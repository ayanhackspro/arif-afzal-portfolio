import { Award, Cloud, Shield, Palette, Sparkles, Building, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export default function LeadershipAchievementsSection() {
  const fundingItem = ACHIEVEMENTS.find((a) => a.type === 'funding');
  const leadershipItems = ACHIEVEMENTS.filter((a) => a.type === 'leadership');
  const certItems = ACHIEVEMENTS.filter((a) => a.type === 'certification');

  return (
    <section id="achievements" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
              <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              <span>INDEX 06 · VENTURE &amp; COMMUNITY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
              Leadership &amp; Achievements
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#403F3A] dark:text-[#BFBEB6] font-light">
            Milestones extending beyond lines of code—including government seed capital, technical community leadership, and verified credentials.
          </p>
        </div>

        {/* Big Spotlight Card: Startup Bihar Seed Funding */}
        {fundingItem && (
          <div className="border-2 border-[#284E3A] dark:border-[#4E8767] bg-[#FAF9F5] dark:bg-[#141614] p-8 sm:p-12 mb-16 shadow-[0_4px_20px_rgba(40,78,58,0.06)] dark:shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Big Grant Callout */}
              <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-[#E5E3D8] dark:border-[#262825] pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider bg-[#284E3A] text-white">
                    Sole Founder
                  </span>
                  <span className="text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                    March 2025
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74] block">
                    Government Seed Grant
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-medium leading-none">
                    ₹10,00,000
                  </div>
                  <div className="font-mono text-sm text-[#284E3A] dark:text-[#4E8767] font-semibold pt-1">
                    Startup Bihar Seed Funding
                  </div>
                </div>

                <p className="text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                  Sanctioned by Department of Industries, Government of Bihar for <strong className="text-[#141413] dark:text-[#F2F1ED]">Essence Royale</strong>.
                </p>
              </div>

              {/* Right Column: Narrative & Operational Scope */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] dark:text-[#F2F1ED]">
                    Essence Royale — Fragrance E-Commerce
                  </h3>
                  <p className="text-sm text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed mt-2">
                    Secured ₹10,00,000 in competitive seed funding in March 2025 as the sole founder. Directed the comprehensive venture lifecycle from conceptual brand formation to operational execution.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] space-y-1 font-mono text-xs">
                    <span className="text-[#284E3A] dark:text-[#4E8767] font-semibold block">01 // Storefront &amp; Tech</span>
                    <span className="text-[#403F3A] dark:text-[#BFBEB6]">Architected the digital e-commerce platform and inventory management.</span>
                  </div>
                  <div className="p-3 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] space-y-1 font-mono text-xs">
                    <span className="text-[#284E3A] dark:text-[#4E8767] font-semibold block">02 // Supply &amp; Logistics</span>
                    <span className="text-[#403F3A] dark:text-[#BFBEB6]">Direct supplier relations, product curation, warehousing, and shipping fulfillment.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Two-Column Grid: Leadership & Community + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Leadership & Google Cloud Initiatives */}
          <div className="lg:col-span-7 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Developer Community Leadership
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">
                GOOGLE ECOSYSTEM
              </span>
            </div>

            <div className="space-y-6">
              {leadershipItems.map((item, idx) => (
                <div key={item.title} className="pb-6 border-b last:border-b-0 border-[#EAE8DE] dark:border-[#202220] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#284E3A] dark:text-[#4E8767]">
                    {item.organization}
                  </div>
                  <p className="text-sm text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Verified Certifications
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">
                ACCREDITED
              </span>
            </div>

            <div className="space-y-4">
              {certItems.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#141413] dark:text-[#F2F1ED]">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-mono text-[#284E3A] dark:text-[#4E8767]">
                        {cert.organization}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767] shrink-0 mt-1" />
                  </div>
                  <p className="text-xs text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                    {cert.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Note */}
            <div className="pt-4 border-t border-[#EAE8DE] dark:border-[#202220] text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
              Credentials issued under official authority. Full transcripts available upon request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
