import { ArrowLeft, BarChart3, TrendingUp, Eye, Users, Target, Calendar, Zap, Monitor, Smartphone, Play, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="tech-card">Cross-Platform Analysis</Badge>
              <Badge variant="secondary" className="tech-card">AI-Driven Insights</Badge>
              <Badge variant="secondary" className="tech-card">Real-time Dashboard</Badge>
              <Badge variant="secondary" className="tech-card">Competitive Intelligence</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Platform Impact</span>
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

      {/* Dashboard Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Analytics Dashboard</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <Card className="tech-card overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-card border-b border-border p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Competitive Intelligence Dashboard</h3>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Live Data</Badge>
                    <Badge variant="outline">Last Updated: 2 min ago</Badge>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Analytics */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Platform Performance */}
                    <Card className="tech-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-primary" />
                          Platform Performance Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {platforms.map((platform, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{platform.name}</div>
                                <div className="text-sm text-muted-foreground">Coverage: {platform.coverage}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{platform.insights}</div>
                                <div className="text-sm text-muted-foreground">insights</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Trend Analysis */}
                    <Card className="tech-card">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Trending Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-medium">Top Hashtags</h4>
                            <div className="space-y-2">
                              {["#AI", "#TechTrends", "#Innovation", "#FutureTech"].map((tag, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Hash className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-sm">{tag}</span>
                                  <Badge variant="outline" className="ml-auto">
                                    {Math.floor(Math.random() * 100) + 50}%
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-medium">Emerging Trends</h4>
                            <div className="space-y-2">
                              {["Voice AI", "Short-form Education", "AR Filters", "Live Shopping"].map((trend, index) => (
                                <div key={index} className="flex items-center justify-between">
                                  <span className="text-sm">{trend}</span>
                                  <div className="flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-green-500">+{Math.floor(Math.random() * 50) + 10}%</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar Analytics */}
                  <div className="space-y-6">
                    {/* Real-time Stats */}
                    <Card className="tech-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Real-time Stats</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">847K</div>
                          <div className="text-sm text-muted-foreground">Videos Analyzed Today</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500">94.2%</div>
                          <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-500">156</div>
                          <div className="text-sm text-muted-foreground">New Trends Detected</div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Competitor Tracking */}
                    <Card className="tech-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Competitor Tracking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {["Brand A", "Brand B", "Brand C"].map((brand, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm font-medium">{brand}</span>
                              <div className="flex items-center gap-2">
                                <Eye className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs">{Math.floor(Math.random() * 50) + 20}M</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Technical Architecture */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Technical Stack</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>
                  Scalable AI-driven platform built for real-time competitive intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Data Processing</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">NLP Analysis</Badge>
                      <Badge variant="outline">Real-time Streaming</Badge>
                      <Badge variant="outline">Data Pipeline</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Analytics Engine</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Trend Detection</Badge>
                      <Badge variant="outline">Sentiment Analysis</Badge>
                      <Badge variant="outline">Pattern Recognition</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Infrastructure</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Cloud Computing</Badge>
                      <Badge variant="outline">Microservices</Badge>
                      <Badge variant="outline">API Gateway</Badge>
                      <Badge variant="outline">Real-time Database</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Business Impact</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Strategic Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">60% faster competitive analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">94% accuracy in trend prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Real-time market intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Cross-platform unified insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Brand strategy optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Content performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Influencer partnership insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Market trend forecasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortVideoAnalystLab;