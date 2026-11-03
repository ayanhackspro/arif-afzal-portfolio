import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import SelectedWork from '@/components/SelectedWork';
import ExperienceSection from '@/components/ExperienceSection';
import ProblemSolvingSection from '@/components/ProblemSolvingSection';
import LeadershipAchievementsSection from '@/components/LeadershipAchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d0e] text-[#b3b3b3]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <SkillsMarquee />
        <SelectedWork />
        <ExperienceSection />
        <ProblemSolvingSection />
        <LeadershipAchievementsSection />
      </main>
      <ContactSection />
    </div>
  );
}
