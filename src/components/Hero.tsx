import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full gradient-bg opacity-30 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full gradient-bg-secondary opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium tech-card">
            Available for AI Product Manager Roles
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Zee-yang Wei</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            ML Engineer & Product Manager
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            8+ years building impactful B2B/B2C SaaS products. From C++ CNN development to enterprise platforms serving 100M+ users.
            <span className="gradient-text font-semibold"> Designing AI-driven scalable solutions</span> that drive business growth.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Chicago, IL
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              312-284-7113
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              zwei25@hawk.illinoistech.edu
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect on LinkedIn
            </Button>
            <Button variant="tech" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;