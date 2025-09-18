import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

interface MetricItem {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  description?: string;
}

interface MetricsModuleProps {
  title: string;
  description?: string;
  metrics: MetricItem[];
  className?: string;
}

const MetricsModule = ({ title, description, metrics, className = "" }: MetricsModuleProps) => {
  const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'neutral':
        return <Minus className="w-4 h-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      case 'neutral':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="tech-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className="w-6 h-6 text-primary" />
                  {metric.trend && (
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metric.trend)}
                      {metric.change && (
                        <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                          {metric.change}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  {metric.description && (
                    <CardDescription className="text-xs">
                      {metric.description}
                    </CardDescription>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsModule;