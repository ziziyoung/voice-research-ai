import { ArrowLeft, BarChart3, TrendingUp, Eye, Users, Target, Calendar, Zap, Monitor, Smartphone, Play, Hash, Database, ExternalLink, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ShortVideoAnalystLab = () => {
  const metrics = [
    { label: "Platforms Analyzed", value: "12+", icon: Monitor },
    { label: "Videos Processed", value: "2.8M", icon: Play },
    { label: "Insight Accuracy", value: "94%", icon: Target },
    { label: "Analysis Speed", value: "10x", icon: Zap }
  ];

  const platforms = [
    { name: "TikTok", coverage: "95%", insights: "1.2M" },
    { name: "Instagram Reels", coverage: "92%", insights: "890K" },
    { name: "YouTube Shorts", coverage: "89%", insights: "750K" },
    { name: "Snapchat", coverage: "87%", insights: "420K" }
  ];

  const features = [
    {
      title: "Cross-Platform Analytics",
      description: "Unified analysis across TikTok, Instagram, YouTube Shorts, and more",
      icon: BarChart3
    },
    {
      title: "Real-time Trend Detection", 
      description: "AI-powered identification of emerging trends and viral patterns",
      icon: TrendingUp
    },
    {
      title: "Competitor Intelligence",
      description: "Deep insights into competitor strategies and performance metrics",
      icon: Eye
    },
    {
      title: "Audience Analysis",
      description: "Comprehensive demographic and behavioral insights",
      icon: Users
    }
  ];

  const analysisTypes = [
    { type: "Content Performance", examples: ["Engagement rates", "View velocity", "Completion rates"] },
    { type: "Trend Analysis", examples: ["Hashtag momentum", "Audio trends", "Visual patterns"] },
    { type: "Creator Intelligence", examples: ["Influencer metrics", "Growth patterns", "Collaboration networks"] },
    { type: "Market Intelligence", examples: ["Brand mentions", "Sentiment analysis", "Share of voice"] }
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
            <h1 className="text-lg font-semibold">Short-Video Competitive Analyst Lab</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Short-Video Competitive Analyst Lab</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-driven competitive intelligence platform providing deep insights and real-time analytics across all major short-video platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="tech-card">Cross-Platform Analysis</Badge>
              <Badge variant="secondary" className="tech-card">AI-Driven Insights</Badge>
              <Badge variant="secondary" className="tech-card">Real-time Dashboard</Badge>
              <Badge variant="secondary" className="tech-card">Competitive Intelligence</Badge>
            </div>
            <Button 
              asChild
              size="lg"
              variant="default"
              className="gap-2 text-lg"
            >
              <a href="https://short-form-insight.lovable.app/" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5" />
                View Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Analytics Dashboard</span>
          </h2>
          
          <div className="relative h-[800px] bg-card rounded-xl border border-border shadow-lg overflow-hidden max-w-7xl mx-auto flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-muted-foreground">Video Demo Placeholder</h4>
                <p className="text-sm text-muted-foreground/80">Ready for dashboard demo video integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Analysis Types */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Analysis Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {analysisTypes.map((analysis, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <CardTitle>{analysis.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {analysis.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Platform Features</span>
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

      {/* Datasets Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Datasets & Resources</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="tech-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary flex-shrink-0" />
                    <CardTitle>YouTube-8M Segments Dataset</CardTitle>
                  </div>
                  <a 
                    href="https://research.google.com/youtube8m/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Large-scale labeled video dataset for video understanding research
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary flex-shrink-0" />
                    <CardTitle>AntM²C Dataset</CardTitle>
                  </div>
                  <a 
                    href="https://www.atecup.cn/datasets" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multi-Scenario Multi-Modal CTR Dataset for click-through rate prediction
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary flex-shrink-0" />
                    <CardTitle>YouTube Shorts & TikTok 2025 Trends</CardTitle>
                  </div>
                  <a 
                    href="https://www.kaggle.com/datasets/tarekmasryo/youtube-shorts-and-tiktok-trends-2025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Latest trends and patterns across YouTube Shorts and TikTok platforms
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary flex-shrink-0" />
                    <CardTitle>Short Video Engagement Dataset</CardTitle>
                  </div>
                  <a 
                    href="https://www.kaggle.com/datasets/programmer3/short-video-engagement-dataset" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scalable cross-platform multimodal AI for short-form video (Shorts, TikTok, Reels)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



    </div>
  );
};

export default ShortVideoAnalystLab;