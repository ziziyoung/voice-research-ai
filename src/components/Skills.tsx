import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Rocket, Target, Database, Zap, Users, DollarSign, TrendingDown, TrendingUp, Building, Clock } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI/ML Engineering",
    description: "End-to-end machine learning pipelines and AI applications",
    skills: ["C++ CNN Development", "GenAI Applications", "ML Pipelines", "RAG Systems", "Voice AI", "Computer Vision"]
  },
  {
    icon: Rocket,
    title: "Product Management",
    description: "0-1 product development and enterprise SaaS platforms",
    skills: ["0-1 Product Development", "SaaS Platforms", "Enterprise Products", "B2B/B2C Strategy", "Product Roadmaps", "Stakeholder Management"]
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Large-scale enterprise platforms and data systems",
    skills: ["Enterprise Architecture", "Customer Data Platforms", "Marketing Automation", "RPA Workflows", "Multi-channel Integration"]
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Programming languages and technical frameworks",
    skills: ["C++", "Python", "TypeScript", "React", "Node.js", "SQL", "APIs", "Microservices"]
  },
  {
    icon: Target,
    title: "Business Impact",
    description: "Proven track record of driving measurable business results",
    skills: ["Revenue Growth", "Cost Reduction", "User Acquisition", "Process Optimization", "ROI Analysis", "KPI Management"]
  },
  {
    icon: Zap,
    title: "Emerging Tech",
    description: "Cutting-edge technologies and innovation",
    skills: ["AI-RPA", "Voice Interfaces", "Competitive Intelligence", "Automation", "Cloud Platforms", "Mobile Apps"]
  }
];

const achievements = [
  { metric: "100M+", label: "Users Served", icon: Users, color: "text-blue-400" },
  { metric: "$100M+", label: "Upsell Revenue", icon: DollarSign, color: "text-green-400" },
  { metric: "90%", label: "Cost Reduction", icon: TrendingDown, color: "text-orange-400" },
  { metric: "2×", label: "Business Growth", icon: TrendingUp, color: "text-purple-400" },
  { metric: "450K+", label: "Enterprise Users", icon: Building, color: "text-cyan-400" },
  { metric: "8+", label: "Years Experience", icon: Clock, color: "text-pink-400" }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Impact & Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Measurable results from building and scaling enterprise products
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="tech-card text-center group border-primary/10 hover:border-primary/30">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                        <IconComponent className={`w-6 h-6 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform duration-300">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Core Capabilities</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technical expertise across AI/ML engineering and product management disciplines
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="tech-card group h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg gradient-bg">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;