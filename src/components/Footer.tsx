import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold gradient-text mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:zwei25@hawk.illinoistech.edu" className="hover:text-primary transition-colors">
                  zwei25@hawk.illinoistech.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:3122847113" className="hover:text-primary transition-colors">
                  312-284-7113
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="http://linkedin.com/in/zee-yang-wei-0947052b0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold gradient-text mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button variant="ghost" className="justify-start p-0 h-auto font-normal">
                Download Resume
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto font-normal">
                View Portfolio
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto font-normal">
                Schedule Call
              </Button>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold gradient-text mb-4">
              About Me
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ML Engineer & Product Manager with 8+ years building scalable B2B/B2C SaaS solutions. 
              Passionate about creating AI-driven products that solve real business problems.
            </p>
            <div className="mt-4">
              <Button variant="hero" size="sm">
                <Linkedin className="w-4 h-4" />
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Zee-yang Wei. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with
            <Heart className="w-4 h-4 text-red-500" />
            using React & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;