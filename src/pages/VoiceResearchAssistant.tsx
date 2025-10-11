import { ArrowLeft, Smartphone, Monitor, Users, Target, Calendar, TrendingUp, Mic, MessageSquare, FileText, BarChart3, Clock, Zap, Shield, Database, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MetricsModule from "@/components/MetricsModule";
import showcaseImage from "@/assets/voice-assistant-showcase.png";
import knowledgeGraph1 from "@/assets/knowledge-graph-1.png";
import knowledgeGraph2 from "@/assets/knowledge-graph-2.png";

const VoiceResearchAssistant = () => {
  const performanceMetrics = [
    { 
      label: "User Engagement", 
      value: "95%", 
      change: "+12%",
      trend: "up" as const,
      icon: Users,
      description: "Monthly active users interaction rate"
    },
    { 
      label: "Research Efficiency", 
      value: "3x", 
      change: "+2.1x",
      trend: "up" as const,
      icon: TrendingUp,
      description: "Faster research completion vs traditional methods"
    },
    { 
      label: "Voice Accuracy", 
      value: "98%", 
      change: "+3%",
      trend: "up" as const,
      icon: Mic,
      description: "Speech recognition accuracy rate"
    },
    { 
      label: "Time Saved", 
      value: "60%", 
      change: "+15%",
      trend: "up" as const,
      icon: Target,
      description: "Average time reduction in research tasks"
    }
  ];

  const technicalMetrics = [
    {
      label: "Response Time",
      value: "1.2s",
      change: "-0.3s",
      trend: "up" as const,
      icon: Zap,
      description: "Average AI response latency"
    },
    {
      label: "Uptime",
      value: "99.9%",
      change: "+0.1%",
      trend: "up" as const,
      icon: Shield,
      description: "System availability and reliability"
    },
    {
      label: "Data Processing",
      value: "10TB",
      change: "+2TB",
      trend: "up" as const,
      icon: Database,
      description: "Monthly processed research data"
    },
    {
      label: "Session Duration",
      value: "45min",
      change: "+12min",
      trend: "up" as const,
      icon: Clock,
      description: "Average user session length"
    }
  ];

  const features = [
    {
      title: "Multi-modal RAG",
      description: "Advanced retrieval-augmented generation combining text, voice, and visual inputs",
      icon: FileText
    },
    {
      title: "Voice-First Interface", 
      description: "Natural voice interaction for hands-free research workflows",
      icon: Mic
    },
    {
      title: "Real-time Analytics",
      description: "Live insights and performance tracking for research sessions",
      icon: BarChart3
    },
    {
      title: "Conversation Management",
      description: "Intelligent dialogue management with context preservation",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-lg font-semibold">Voice-First Research Assistant</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Voice-First Research Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionary AI-powered research platform combining multi-modal RAG with intuitive voice interaction for next-generation research workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="tech-card">NotebookLM Integration</Badge>
              <Badge variant="secondary" className="tech-card">Voice Mode</Badge>
              <Badge variant="secondary" className="tech-card">Multi-modal RAG</Badge>
              <Badge variant="secondary" className="tech-card">Real-time Analytics</Badge>
            </div>
            <Button 
              asChild
              size="lg"
              variant="default"
              className="gap-2 text-lg"
            >
              <a href="https://articulate-aid-ai.lovable.app/" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5" />
                View Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section id="demo-section" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Platform Showcase</span>
          </h2>
          
          <div className="space-y-16">
            {/* Platform Showcase Image 1 */}
            <div className="space-y-8">
              <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-6xl mx-auto">
                <img 
                  src={showcaseImage} 
                  alt="Voice Research Assistant Platform Interface showing Document Management, AI Indexes, and Research Analysis features"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Knowledge Graph Showcase 1 */}
            <div className="space-y-8">
              <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-6xl mx-auto">
                <img 
                  src={knowledgeGraph1} 
                  alt="Knowledge Graph visualization showing Computer Vision research connections including Deep Learning, CNN Architectures, Object Detection, and Image Segmentation"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Knowledge Graph Showcase 2 */}
            <div className="space-y-8">
              <div className="relative bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-6xl mx-auto">
                <img 
                  src={knowledgeGraph2} 
                  alt="Knowledge Graph visualization showing Natural Language Processing research connections including Attention Mechanisms, Transformers, BERT, and GPT Architecture"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Core Features</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Use Cases</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Research",
                description: "Students and researchers conducting literature reviews, data analysis, and hypothesis testing through voice commands.",
                icon: FileText,
                examples: ["Literature synthesis", "Citation management", "Data interpretation"]
              },
              {
                title: "Business Intelligence",
                description: "Executives and analysts accessing market research, competitor analysis, and strategic insights hands-free.",
                icon: TrendingUp,
                examples: ["Market analysis", "Competitive research", "Trend identification"]
              },
              {
                title: "Content Creation",
                description: "Writers and content creators gathering research, fact-checking, and organizing information through voice interaction.",
                icon: Mic,
                examples: ["Fact verification", "Source gathering", "Content ideation"]
              },
              {
                title: "Healthcare Research",
                description: "Medical professionals accessing clinical studies, drug information, and treatment protocols via voice.",
                icon: Target,
                examples: ["Clinical studies", "Drug interactions", "Treatment protocols"]
              },
              {
                title: "Legal Research",
                description: "Legal professionals searching case law, statutes, and legal precedents through natural language queries.",
                icon: Users,
                examples: ["Case law search", "Statute research", "Legal precedents"]
              },
              {
                title: "Technical Documentation",
                description: "Engineers and developers accessing API docs, technical specifications, and troubleshooting guides.",
                icon: Calendar,
                examples: ["API documentation", "Code examples", "Troubleshooting guides"]
              }
            ].map((useCase, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <useCase.icon className="w-6 h-6 text-primary" />
                    <CardTitle>{useCase.title}</CardTitle>
                  </div>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-muted-foreground">Key Applications:</h5>
                    <ul className="space-y-1">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





      {/* Project Timeline */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Product Roadmap</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { phase: "Research & Planning", period: "Q1 2025", status: "completed" },
                { phase: "MVP Development", period: "Q2 2025", status: "in-progress" },
                { phase: "Voice Integration", period: "Q3 2025", status: "planned" },
                { phase: "Advanced RAG Features", period: "Q4 2025", status: "planned" },
                { phase: "Enterprise Deployment", period: "Q1 2026", status: "planned" }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className={`w-4 h-4 rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'in-progress' ? 'bg-primary animate-pulse' :
                    'bg-muted'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{milestone.phase}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.period}</p>
                  </div>
                  <Badge variant={
                    milestone.status === 'completed' ? 'secondary' :
                    milestone.status === 'in-progress' ? 'default' :
                    'outline'
                  }>
                    {milestone.status.replace('-', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceResearchAssistant;