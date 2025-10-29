import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import pastWorkOverview from "@/assets/past-work-overview.jpg";

const PastWork = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Featured Project Showcase 1",
      description: "Large showcase area for displaying project images, videos, or interactive demos. This space is designed to highlight your most important work.",
      image: pastWorkOverview,
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
              <div className="grid md:grid-cols-2 gap-0">
                {/* Large Image/Video Frame */}
                <div className="relative aspect-video md:aspect-square bg-muted overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <Tag className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="w-fit">
                      Featured Work
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="lg" className="gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can collaborate on your next project.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PastWork;
