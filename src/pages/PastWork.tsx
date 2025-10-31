import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import mobileDesignerScreenshot from "@/assets/cyclone-mobile-designer.png";
import aiPlatform1 from "@/assets/ai-platform-1.png";
import aiPlatform2 from "@/assets/ai-platform-2.png";
import aiPlatform3 from "@/assets/ai-platform-3.png";
import aiPlatform4 from "@/assets/ai-platform-4.png";
import aiPlatform5 from "@/assets/ai-platform-5.png";
import aiPlatform6 from "@/assets/ai-platform-6.png";
import aiPlatform7 from "@/assets/ai-platform-7.png";
import aiPlatform8 from "@/assets/ai-platform-8.png";
import aiPlatform9 from "@/assets/ai-platform-9.png";
import aiPlatform10 from "@/assets/ai-platform-10.png";
import aiPlatform11 from "@/assets/ai-platform-11.png";
import aiPlatform12 from "@/assets/ai-platform-12.png";
import voiceAssistant1 from "@/assets/voice-assistant-1.png";
import voiceAssistant2 from "@/assets/voice-assistant-2.png";
import voiceAssistant3 from "@/assets/voice-assistant-3.png";
import mobileSocialApp from "@/assets/mobile-social-app.png";
import aiRpaWorkflow from "@/assets/ai-rpa-workflow.png";

const PastWork = () => {
  const projects = [
    {
      id: 1,
      title: "AI-RPA Agentic Workflows",
      description: "AI-RPA SaaS agentic workflows platform — Cyclone",
      images: [mobileDesignerScreenshot, aiRpaWorkflow],
      technologies: ["OCR", "Agentic Workflows", "Computer Vision", "UI Automation"],
      date: "2022",
      link: "https://www.cyclone-robotics.com/product/info_2.html",
    },
    {
      id: 2,
      title: "SaaS Marketing & App Solutions",
      description: "SaaS Intelligent Marketing Platform — One Road",
      images: [aiPlatform1, aiPlatform2, aiPlatform3, aiPlatform4, aiPlatform5, aiPlatform6, aiPlatform7, aiPlatform8, aiPlatform9, aiPlatform10, aiPlatform11, aiPlatform12],
      technologies: ["Marketing Dashboard", "Digital Marketing", "Business Growth", "Customer Acquisition", "Lead Matching"],
      technologiesLabel: "KEY WORDS",
      date: "2022",
      link: "https://www.yilutong.com/officialWebsite/page/digital/zhangketong.html",
    },
    {
      id: 3,
      title: "B2B/B2C e-Commerce SaaS Solution",
      description: "All-in-one scalable B2B & B2C e-Commerce SaaS Platform — Alibaba Cloud",
      images: [voiceAssistant1, voiceAssistant2, voiceAssistant3],
      technologies: ["AWS", "Alibaba Cloud", "GCP", "SaaS", "OMS Omnichannel Order Management", "CEM Customer Engagement", "CDP Customer Data Platform"],
      date: "2018",
      link: "https://terminus.io/product/16042",
    },
    {
      id: 4,
      title: "China Mobile E-App",
      description: "Enterprise Social App for 570K Employees — by China Mobile",
      images: [mobileSocialApp],
      technologies: ["Employee Directory", "Conference Call", "Voice & Video Chat", "Corporate Circles", "Corporate Forum"],
      date: "2015",
      link: "https://apkpure.com/%E5%B0%8F%E7%A7%BB%E4%BA%BA%E5%AE%B6/com.cmri.chinamobile",
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
                <div className={`bg-gradient-to-br from-pink-100 via-pink-50 to-purple-50 dark:from-pink-900/20 dark:via-purple-900/10 dark:to-pink-800/10 min-h-[500px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {project.images.length > 0 ? (
                    project.images.length > 1 ? (
                      <Carousel 
                        className="w-full h-full min-h-[500px]"
                        plugins={[
                          Autoplay({
                            delay: 3000,
                          }),
                        ]}
                        opts={{
                          loop: true,
                        }}
                      >
                        <CarouselContent className="h-full min-h-[500px]">
                          {project.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex} className="h-full min-h-[500px] flex items-center justify-center p-4">
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    ) : (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center p-4">
                        <img 
                          src={project.images[0]} 
                          alt={`${project.title} screenshot`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )
                  ) : (
                    <div className="w-full h-full min-h-[500px] flex items-center justify-center">
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
                      {project.technologiesLabel || "Technologies"}
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
