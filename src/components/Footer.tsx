
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/ndc-logo.svg" alt="NDC Logo" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold text-white">NextGen Developer Club</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering students through technology, innovation, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-join" className="text-gray-300 hover:text-white transition-colors">Why Join</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#join" className="text-gray-300 hover:text-white transition-colors">Join the Club</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block text-ndc-blue">Email</span>
                <a href="mailto:contact@ndclub.com" className="hover:text-white transition-colors">contact@ndclub.com</a>
              </li>
              <li className="text-gray-300">
                <span className="block text-ndc-blue">Location</span>
                Shri Shivaji Institute of Engineering and Management Studies
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NextGen Developer Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
