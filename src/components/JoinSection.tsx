
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const JoinSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Application Submitted!",
      description: "Thanks for joining NextGen Developer Club. We'll get back to you soon!",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      department: ''
    });
  };

  return (
    <section id="join" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-purple/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-blue/20 blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-md mb-6">Ready to <span className="gradient-text">Join Us?</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Take the first step towards an exciting journey of learning, building, and growing with a community of tech enthusiasts.
          </p>
        </div>
        
        <div className="max-w-md mx-auto glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
                className="bg-background/50 border-white/10" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email address" 
                required 
                className="bg-background/50 border-white/10" 
              />
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">Department/Branch</label>
              <Input 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                placeholder="E.g., Computer Science, IT, Electrical" 
                required 
                className="bg-background/50 border-white/10" 
              />
            </div>
            
            <Button type="submit" className="w-full btn-primary">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
