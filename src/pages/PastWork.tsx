import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import pastWorkOverview from "@/assets/past-work-overview.jpg";

const PastWork = () => {
  const projects = [
    {
      id: 1,
      title: "AI Research Platform",
      description: "A comprehensive research platform integrating NLP analysis, knowledge graphs, and voice interaction for enhanced research workflows.",
      category: "AI/ML",
      tags: ["NLP", "Knowledge Graph", "Voice AI"],
      period: "2024",
      image: pastWorkOverview,
      link: "/voice-research-assistant"
    },
    {
      id: 2,
      title: "Short Video Analytics Lab",
      description: "Advanced analytics platform for short-form video content analysis with multi-modal data processing capabilities.",
      category: "Data Analytics",
      tags: ["Video Analysis", "ML", "Data Visualization"],
      period: "2024",
      image: null, // Placeholder for future image
      link: "/short-video-analyst-lab"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Description of your third project. This could be a web application, mobile app, or any other work you want to showcase.",
      category: "Web Development",
      tags: ["React", "TypeScript", "UI/UX"],
      period: "2023",
      image: null, // Placeholder for future image
      link: "#"
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "Description of your fourth project. Highlight the key features and technologies used in this project.",
      category: "Backend Systems",
      tags: ["API", "Database", "Architecture"],
      period: "2023",
      image: null, // Placeholder for future image
      link: "#"
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "Description of your fifth project. Explain what problems it solves and what makes it unique.",
      category: "Mobile Development",
      tags: ["Mobile", "Cross-platform", "UI"],
      period: "2023",
      image: null, // Placeholder for future image
      link: "#"
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "Description of your sixth project. Share the impact and results achieved through this work.",
      category: "AI/ML",
      tags: ["Machine Learning", "Computer Vision", "AI"],
      period: "2022",
      image: null, // Placeholder for future image
      link: "#"
    }
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

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
              >
                {/* Image Container */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                          <Tag className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Image Placeholder</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </div>
                    
                    {project.link !== "#" ? (
                      <Link to={project.link}>
                        <Button variant="ghost" size="sm" className="gap-2">
                          View Details
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="ghost" size="sm" disabled className="gap-2">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
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
