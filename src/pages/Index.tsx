
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
      
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
