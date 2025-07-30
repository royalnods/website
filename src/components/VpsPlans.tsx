import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Shield, HardDrive, Cpu, Zap, Network } from "lucide-react";

const VpsPlans = () => {
  const vpsPlans = [
    {
      name: "Starter VPS",
      ram: "2GB DDR4",
      storage: "20GB NVMe SSD", 
      cpu: "1 vCPU",
      bandwidth: "1TB Transfer",
      price: "599",
      features: [
        "Full Root Access",
        "Ubuntu/CentOS/Debian",
        "99.9% Uptime SLA",
        "DDoS Protection",
        "24/7 Support",
        "1 IPv4 Address"
      ],
      popular: false,
      gradient: "from-secondary to-accent"
    },
    {
      name: "Professional VPS",
      ram: "4GB DDR4",
      storage: "40GB NVMe SSD",
      cpu: "2 vCPU", 
      bandwidth: "2TB Transfer",
      price: "1199",
      features: [
        "Full Root Access",
        "Multiple OS Options",
        "99.9% Uptime SLA",
        "Advanced DDoS Protection", 
        "Priority Support",
        "2 IPv4 Addresses"
      ],
      popular: true,
      gradient: "from-primary to-accent"
    },
    {
      name: "Enterprise VPS",
      ram: "8GB DDR4",
      storage: "80GB NVMe SSD",
      cpu: "4 vCPU",
      bandwidth: "5TB Transfer", 
      price: "2299",
      features: [
        "Full Root Access",
        "Custom OS Installation",
        "99.95% Uptime SLA",
        "Premium DDoS Protection",
        "Dedicated Support",
        "4 IPv4 Addresses"
      ],
      popular: false,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="vps" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-36 h-36 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      <div className="absolute bottom-20 left-10 w-28 h-28 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse">
              <Server className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-shimmer">
              VPS Hosting Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful Virtual Private Servers with full root access and premium performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {vpsPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`
                relative overflow-hidden border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 
                animate-slide-up group cursor-pointer hover:border-accent/50
                ${plan.popular ? 'border-accent shadow-lg shadow-accent/20 ring-2 ring-accent/20' : 'border-border'}
                ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}
              `}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-accent to-primary text-center py-2 animate-pulse">
                    <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-0 font-bold">
                      Recommended
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className={`${plan.popular ? 'pt-12' : 'pt-6'} pb-4 text-center`}>
                <div className="mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${plan.gradient} text-white mx-auto w-fit`}>
                    <Server className="w-6 h-6" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">Perfect for growing applications</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-accent">₹{plan.price}</span>
                    <span className="text-muted-foreground ml-2">Monthly</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-3 mb-6 text-center">
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                    <Cpu className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-xs font-medium">{plan.cpu}</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-xs font-medium">{plan.ram}</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                    <HardDrive className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-xs font-medium">{plan.storage}</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                    <Network className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-xs font-medium">{plan.bandwidth}</div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 group-hover:animate-bounce" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                      <div className="flex-shrink-0 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button 
                  className={`
                    w-full group relative overflow-hidden transition-all duration-500 transform hover:scale-105
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-primary-foreground shadow-lg' 
                      : 'bg-secondary hover:bg-accent text-secondary-foreground hover:text-primary-foreground'
                    }
                  `}
                  size="lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                    Deploy Now
                    <Server className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-800">
          <p className="text-muted-foreground">
            Need managed services? <Button variant="link" className="text-accent p-0 h-auto hover:underline">Explore our managed VPS options</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VpsPlans;