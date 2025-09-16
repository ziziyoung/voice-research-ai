import { ArrowLeft, Smartphone, Monitor, Users, Target, Calendar, TrendingUp, Mic, MessageSquare, FileText, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VoiceResearchAssistant = () => {
  const metrics = [
    { label: "User Engagement", value: "95%", icon: Users },
    { label: "Research Efficiency", value: "3x", icon: TrendingUp },
    { label: "Voice Accuracy", value: "98%", icon: Mic },
    { label: "Time Saved", value: "60%", icon: Target }
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
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="tech-card">NotebookLM Integration</Badge>
              <Badge variant="secondary" className="tech-card">Voice Mode</Badge>
              <Badge variant="secondary" className="tech-card">Multi-modal RAG</Badge>
              <Badge variant="secondary" className="tech-card">Real-time Analytics</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Platform Showcase</span>
          </h2>
          
          <div className="space-y-16">
            {/* Web Demo - Row 1 */}
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-3">
                <Monitor className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-semibold">Voice-Scribe-Nexus Web Platform</h3>
              </div>
              
              <div className="relative h-[600px] bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-6xl mx-auto flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Monitor className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium text-muted-foreground">Video Content Placeholder</h4>
                    <p className="text-sm text-muted-foreground/80">Ready for demo video integration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Demo - Row 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Smartphone className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Mobile H5 Interface</h3>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-80 h-[600px] bg-card rounded-xl border border-border shadow-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Mobile Demo Video</h4>
                      <p className="text-xs text-muted-foreground/80">Ready for video integration</p>
                    </div>
                  </div>
                </div>
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

      {/* Key Metrics */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Metrics</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="tech-card text-center">
                <CardContent className="pt-6">
                  <metric.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Technical Architecture</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>
                  Modern AI-first architecture built for scale and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">AI & ML</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">NotebookLM</Badge>
                      <Badge variant="outline">Retrieval-Augmented Generation</Badge>
                      <Badge variant="outline">Voice Processing</Badge>
                      <Badge variant="outline">Multi-modal AI</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">WebRTC</Badge>
                      <Badge variant="outline">Progressive Web App</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Backend</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">WebSocket</Badge>
                      <Badge variant="outline">Vector Database</Badge>
                      <Badge variant="outline">Real-time Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Development Timeline</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { phase: "Research & Planning", period: "Q1 2023", status: "completed" },
                { phase: "MVP Development", period: "Q2 2023", status: "completed" },
                { phase: "Voice Integration", period: "Q3 2023", status: "completed" },
                { phase: "Advanced RAG Features", period: "Q4 2023", status: "in-progress" },
                { phase: "Enterprise Deployment", period: "Q1 2024", status: "planned" }
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