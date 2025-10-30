import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import mobileDesignerScreenshot from "@/assets/mobile-designer-screenshot.png";
import mobileDesignerScreenshot2 from "@/assets/mobile-designer-screenshot-2.png";

const PastWork = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Featured Project Showcase 1",
      description: "Large showcase area for displaying project images, videos, or interactive demos. This space is designed to highlight your most important work.",
      image: mobileDesignerScreenshot,
    },
    {
      id: 2,
      title: "Featured Project Showcase 2",
      description: "Another prominent display area for showcasing visual content, case studies, or project demonstrations.",
      image: null,
    },
    {
      id: 3,
      title: "Featured Project Showcase 3",
      description: "Additional showcase space for presenting portfolio work, videos, or detailed project breakdowns.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Past Work & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing expertise in AI/ML, web development, 
              and innovative solutions across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Large Showcase Frames */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl space-y-16">
          {showcaseItems.map((item) => (
            <Card 
              key={item.id}
              className="overflow-hidden border-border/50 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Display */}
              <div className="relative bg-muted overflow-hidden p-8">
                {item.id === 1 ? (
                  <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={mobileDesignerScreenshot} 
                        alt="Mobile Designer Screenshot 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={mobileDesignerScreenshot2} 
                        alt="Mobile Designer Screenshot 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : item.image ? (
                  <div className="aspect-video">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PastWork;
