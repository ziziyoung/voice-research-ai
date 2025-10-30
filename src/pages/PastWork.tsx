import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import mobileDesignerScreenshot from "@/assets/cyclone-mobile-designer.png";

const PastWork = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile Designer App",
      description: "A comprehensive mobile design application featuring intuitive UI/UX tools and real-time collaboration capabilities. Built with modern frameworks to deliver seamless user experience across devices.",
      images: [mobileDesignerScreenshot],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      date: "2024",
      link: "#",
    },
    {
      id: 2,
      title: "AI Research Platform",
      description: "Advanced AI-powered research platform with natural language processing capabilities. Enables efficient data analysis and insight generation.",
      images: [],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      date: "2024",
      link: "#",
    },
    {
      id: 3,
      title: "Voice Assistant System",
      description: "Intelligent voice assistant with multi-language support and contextual understanding. Integrated with various APIs for enhanced functionality.",
      images: [],
      technologies: ["Node.js", "WebSockets", "AWS", "MongoDB"],
      date: "2023",
      link: "#",
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

      {/* Portfolio Projects */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Images Section */}
                <div className={`bg-gradient-to-br from-pink-100 via-pink-50 to-purple-50 dark:from-pink-900/20 dark:via-purple-900/10 dark:to-pink-800/10 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {project.images.length > 0 ? (
                    <div className="w-full h-full">
                      {project.images.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                        <Tag className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="gap-2" asChild>
                      <a href={project.link}>
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PastWork;
