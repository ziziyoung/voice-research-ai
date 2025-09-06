import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, DollarSign } from "lucide-react";

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
    tech: ["NotebookLM", "Huxe", "Voice Mode", "RAG"],
    period: "2023 – Present"
  },
  {
    title: "Short-Video Competitive Analyst Lab",
    description: "AI-driven insights & dashboard for Cross-Platform analysis",
    tech: ["AI Analytics", "Dashboard", "Competitive Intelligence"],
    period: "2023 – Present"
  },
  {
    title: "C++ CNN & ML Pipeline",
    description: "End-to-end ML pipeline achieving ~90% benchmark accuracy",
    tech: ["C++", "CNN", "ML Pipeline", "Deep Learning"],
    period: "2023 – Present"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">GenAI Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent AI/ML projects showcasing expertise in generative AI, voice interfaces, and competitive intelligence
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group h-full">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
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