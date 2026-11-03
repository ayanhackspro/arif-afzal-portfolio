import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SelectedWork from '@/components/SelectedWork';
import ExperienceSection from '@/components/ExperienceSection';
import ProblemSolvingSection from '@/components/ProblemSolvingSection';
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection';
import LeadershipAchievementsSection from '@/components/LeadershipAchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSection />
        <SelectedWork />
        <ExperienceSection />
        <ProblemSolvingSection />
        <TechnicalSkillsSection />
        <LeadershipAchievementsSection />
      </main>
      <ContactSection />
    </div>
  );
}
