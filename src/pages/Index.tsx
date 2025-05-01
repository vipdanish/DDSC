
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import BenefitsSection from '@/components/BenefitsSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <BenefitsSection />
      <EventsSection />
      <TeamSection />
      <PartnersSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
