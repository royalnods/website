import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, Cpu } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      id: "dubai",
      name: "Dubai Premium",
      location: "Dubai, UAE",
      price: "34",
      currency: "₹",
      period: "per GB",
      description: "High-performance hosting in the heart of the Middle East",
      features: [
        "High-speed NVMe SSD",
        "Premium DDoS Protection",
        "99.9% Uptime Guarantee",
        "24/7 Premium Support",
        "Instant Deployment",
        "Full Root Access"
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      gradient: "from-primary to-accent"
    },
    {
      id: "india-ryzen",
      name: "India Ryzen",
      location: "Mumbai, India",
      price: "85",
      currency: "₹",
      period: "per GB",
      description: "Powerful AMD Ryzen performance for demanding applications",
      features: [
        "AMD Ryzen CPUs",
        "NVMe SSD Storage",
        "DDoS Protection",
        "99.9% Uptime",
        "cPanel/Pterodactyl",
        "24/7 Support"
      ],
      icon: <Cpu className="w-6 h-6" />,
      popular: false,
      gradient: "from-accent to-primary"
    },
    {
      id: "india-intel",
      name: "India Intel",
      location: "Bangalore, India",
      price: "60-70",
      currency: "₹",
      period: "per GB",
      description: "Reliable Intel-powered hosting with excellent value",
      features: [
        "Intel CPUs",
        "SSD Storage",
        "Basic DDoS Protection",
        "99.9% Uptime",
        "Control Panel Access",
        "Standard Support"
      ],
      icon: <Shield className="w-6 h-6" />,
      popular: false,
      gradient: "from-secondary to-muted"
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Regular Hosting Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect hosting solution for your needs with our global infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`
                relative overflow-hidden border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 
                animate-slide-up group cursor-pointer hover:border-primary/50 hover:rotate-1
                ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20' : 'border-border'}
              `}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-accent text-center py-2">
                    <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-0">
                      Most Popular
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className={`${plan.popular ? 'pt-12' : 'pt-6'} pb-4`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${plan.gradient} text-white`}>
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{plan.location}</div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-primary">{plan.currency}{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button 
                  className={`
                    w-full group relative overflow-hidden transition-all duration-300
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground'
                    }
                  `}
                  size="lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Buy Now
                    <Clock className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-800">
          <p className="text-muted-foreground">
            Need a custom solution? <Button variant="link" className="text-primary p-0 h-auto">Contact us</Button> for enterprise pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;