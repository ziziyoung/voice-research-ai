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

      {/* Key Metrics */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Project Impact</span>
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

      {/* Demo Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Platform Showcase</span>
          </h2>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Mobile Demo */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Mobile H5 Interface</h3>
              </div>
              
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-card to-card/80 rounded-[3rem] border-8 border-border shadow-2xl">
                {/* Phone bezel */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-muted rounded-full"></div>
                
                {/* Screen content */}
                <div className="absolute inset-4 bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-card border-b border-border flex items-center justify-between px-4 text-xs">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 space-y-4">
                    <h4 className="text-lg font-semibold text-center">Voice Research AI</h4>
                    
                    {/* Voice interface mockup */}
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                          <Mic className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">Listening...</p>
                    </div>
                    
                    {/* Chat interface */}
                    <div className="space-y-3">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <p className="text-sm">Search for latest AI research papers on voice recognition</p>
                      </div>
                      <div className="bg-card rounded-lg p-3 border border-border">
                        <p className="text-sm">Found 127 relevant papers. Here are the top 5...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Demo */}
            <div className="space-y-8 lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <Monitor className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-semibold">Voice-Scribe-Nexus Web Platform</h3>
              </div>
              
              <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-muted p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-background rounded-lg px-4 py-2 text-base text-muted-foreground ml-6">
                      voice-scribe-nexus.ai
                    </div>
                  </div>
                </div>
                
                {/* Web content */}
                <div className="p-8 h-[600px] overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-2xl font-semibold">Research Dashboard</h4>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="text-base px-3 py-1">Live Session</Badge>
                      <Badge variant="secondary" className="text-base px-3 py-1">12 Active Users</Badge>
                    </div>
                  </div>
                  
                  {/* Enhanced Dashboard mockup */}
                  <div className="grid grid-cols-4 gap-6 mb-8">
                    <Card className="tech-card">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold mb-2">2.4k</div>
                        <div className="text-base text-muted-foreground">Papers Analyzed</div>
                      </CardContent>
                    </Card>
                    <Card className="tech-card">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold mb-2">98%</div>
                        <div className="text-base text-muted-foreground">Accuracy Rate</div>
                      </CardContent>
                    </Card>
                    <Card className="tech-card">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold mb-2">156h</div>
                        <div className="text-base text-muted-foreground">Time Saved</div>
                      </CardContent>
                    </Card>
                    <Card className="tech-card">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold mb-2">47</div>
                        <div className="text-base text-muted-foreground">Active Sessions</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Enhanced Research interface */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-background rounded-xl border border-border p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-lg font-medium">Voice Analysis Active</span>
                      </div>
                      <div className="text-base text-muted-foreground mb-4">
                        "Analyzing quantum computing applications in neural networks..."
                      </div>
                      <div className="space-y-3">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <div className="text-sm font-medium mb-1">Research Query</div>
                          <div className="text-sm text-muted-foreground">Latest breakthroughs in quantum ML</div>
                        </div>
                        <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                          <div className="text-sm font-medium mb-1">AI Response</div>
                          <div className="text-sm text-muted-foreground">Found 23 relevant papers from 2024...</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-xl border border-border p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <span className="text-lg font-medium">Live Analytics</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Query Processing</span>
                          <span className="text-sm font-medium">0.3s avg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-4/5"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Voice Clarity</span>
                          <span className="text-sm font-medium">98.2%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
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