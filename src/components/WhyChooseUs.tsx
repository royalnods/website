import { Gauge, Headphones, Settings, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Ultra-low Latency",
      description: "Experience blazing-fast performance with our optimized global network infrastructure and strategically located data centers.",
      gradient: "from-primary to-accent"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our expert support team is available around the clock to help you with any technical issues or questions you may have.",
      gradient: "from-accent to-primary"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Full Panel Access",
      description: "Complete control with Pterodactyl and cPanel access, giving you the power to manage your hosting environment exactly as you need.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Get your services up and running in minutes, not hours. Our automated deployment system ensures rapid provisioning.",
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RoyalNode</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver enterprise-grade hosting solutions with unmatched performance, reliability, and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-600">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50ms</div>
            <div className="text-muted-foreground">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10Gbps</div>
            <div className="text-muted-foreground">Network Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15min</div>
            <div className="text-muted-foreground">Average Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;