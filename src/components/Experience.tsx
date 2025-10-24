import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import voiceResearchImg from "@/assets/voice-research-assistant.jpg";
import shortVideoImg from "@/assets/short-video-analyst.jpg";

const experiences = [
  {
    title: "Sr. Product Manager",
    company: "Cyclone (AI-RPA)",
    location: "Shanghai",
    period: "2021 – 2022",
    highlights: [
      "Led AI-powered RPA SaaS workflow platform from 0→1",
      "Shipped MVP in 3 months, cut processing cost by 90%",
      "Recognized in Gartner 2021 RPA Magic Quadrant Leaders"
    ],
    skills: ["AI-RPA", "SaaS Platform", "Workflow Automation", "0-1 Product"]
  },
  {
    title: "Product Manager & SDET",
    company: "Alibaba Cloud",
    location: "Hangzhou",
    period: "2018 – 2021",
    highlights: [
      "Built Enterprise Membership & Marketing Platform serving 100M+ users",
      "Delivered multiple $5M+ enterprise projects, driving 2× business growth",
      "Enabled $100M+ upsell revenue for multinational clients",
      "Led Mobil (ExxonMobil) Loyalty Program increasing user visits by 2M+",
      "Delivered CNOOC Online Mall handling $100B+ cumulative sales"
    ],
    skills: ["Enterprise SaaS", "Marketing Automation", "Multi-channel", "B2B/B2C"]
  },
  {
    title: "Sr. Product Manager / SDET",
    company: "One Road / Fengyun Tech",
    location: "China",
    period: "2015 – 2018",
    highlights: [
      "Led SaaS marketing platforms across auto, healthcare, lifestyle",
      "Developed China Mobile enterprise app for 450K+ employees"
    ],
    skills: ["SaaS Platforms", "Enterprise Apps", "Multi-industry"]
  }
];

const projects = [
  {
    title: "Voice-First Research Assistant",
    description: "Multi-modal RAG + voice interaction for research workflows",
    tech: ["NotebookLM", "Huxe", "Voice Mode", "RAG", "Knowledge Graph"],
    period: "Present",
    image: voiceResearchImg,
    link: "/voice-research-assistant"
  },
  {
    title: "Short-Video Competitive Analyst Lab",
    description: "AI-driven insights & dashboard for Cross-Platform analysis",
    tech: ["AI Analytics", "Dashboard", "Competitive Intelligence", "Cross-Platform", "Multi-Modal Data"],
    period: "Present",
    image: shortVideoImg,
    link: "/short-video-analyst-lab"
  },
  {
    title: "Past Work Overview",
    description: "Comprehensive showcase of previous GenAI and product management work",
    tech: ["Portfolio", "Case Studies", "Product Management", "GenAI"],
    period: "2015 - Present",
    image: shortVideoImg,
    link: "/past-work-overview"
  }
];

const Projects = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">GenAI Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent AI/ML projects showcasing expertise in generative AI, voice interfaces, and competitive intelligence
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} to={project.link} className="block group">
              <Card className="tech-card overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.period}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          8+ years driving product innovation across enterprise SaaS, AI-RPA, and marketing automation platforms
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="tech-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="tech-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects, Experience };