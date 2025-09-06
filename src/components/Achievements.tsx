import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, TrendingDown, TrendingUp, Building, Clock } from "lucide-react";

const achievements = [
  { metric: "100M+", label: "Users Served", icon: Users, color: "text-blue-400" },
  { metric: "$100B+", label: "Upsell Revenue", icon: DollarSign, color: "text-green-400" },
  { metric: "90%", label: "Cost Reduction", icon: TrendingDown, color: "text-orange-400" },
  { metric: "2×", label: "Business Growth", icon: TrendingUp, color: "text-purple-400" },
  { metric: "$5M+", label: "Enterprise Projects", icon: Building, color: "text-cyan-400" },
  { metric: "8+", label: "Years Experience", icon: Clock, color: "text-pink-400" }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-6">
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
    </section>
  );
};

export default Achievements;