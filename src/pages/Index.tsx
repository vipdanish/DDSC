<<<<<<< HEAD

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import BenefitsSection from '@/components/BenefitsSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/PartnersSection';
import RoadmapSection from '@/components/RoadmapSection';
import GallerySection from '@/components/GallerySection';
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
      <RoadmapSection />
      <GallerySection />
      <TeamSection />
      <PartnersSection />
      <JoinSection />
      <Footer />
=======
/**
 * Index (Homepage)
 * Composes all major sections in the recommended order with sticky navbar alignment.
 */
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import GallerySection from "@/components/sections/GallerySection";
import TeamSection from "@/components/sections/TeamSection";
import JoinSection from "@/components/sections/JoinSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <CollegeHeader />
      <Navbar />
      
      {/* Home */}
      <HeroSection />
      
      {/* About */}
      <AboutSection />
      <WhyJoinSection />
      
      {/* Events/Achievements */}
      <AchievementsSection />
      
      {/* Upcoming Events */}
      <UpcomingEventsSection />
      
      {/* Gallery */}
      <GallerySection />
      
      {/* Team */}
      <TeamSection />
      
      {/* Partners */}
      <PartnersSection />
      
      {/* Join Us */}
      <JoinSection />
      
      {/* Contact */}
      <Footer />
      
>>>>>>> asif-update
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
