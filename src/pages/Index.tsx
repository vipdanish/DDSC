
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import BenefitsSection from '@/components/BenefitsSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/PartnersSection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <BenefitsSection />
      <EventsSection />
      <RoadmapSection />
      <TeamSection />
      <PartnersSection />
      <JoinSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
