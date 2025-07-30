import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Wifi, Zap } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      features: ["Premium DDoS Protection", "NVMe SSD", "10Gbps Network"],
      latency: "15ms",
      status: "Operational",
      flag: "🇦🇪",
      description: "Strategic location serving the Middle East and Asia-Pacific regions"
    },
    {
      city: "Mumbai",
      country: "India",
      region: "South Asia",
      features: ["AMD Ryzen CPUs", "Premium Bandwidth", "24/7 Monitoring"],
      latency: "8ms",
      status: "Operational",
      flag: "🇮🇳",
      description: "High-performance servers in India's financial capital"
    },
    {
      city: "Bangalore",
      country: "India",
      region: "South Asia",
      features: ["Intel CPUs", "Reliable Infrastructure", "Cost Effective"],
      latency: "12ms",
      status: "Operational",
      flag: "🇮🇳",
      description: "Affordable hosting solutions in India's tech hub"
    }
  ];

  const globalStats = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      value: "3 Locations",
      description: "Strategically positioned data centers"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low Latency",
      value: "< 20ms",
      description: "Average response time worldwide"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Network Speed",
      value: "10Gbps",
      description: "High-speed connectivity"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Global <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategically located data centers ensure optimal performance and reliability for your applications
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {globalStats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.title}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{location.flag}</div>
                  <Badge 
                    variant="secondary" 
                    className="bg-green-500/20 text-green-400 border-green-500/30"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    {location.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                  {location.city}
                </CardTitle>
                
                <CardDescription className="text-base">
                  <div className="font-medium text-foreground">{location.country}</div>
                  <div className="text-sm text-muted-foreground">{location.region}</div>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {location.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average Latency</span>
                    <span className="font-bold text-primary">{location.latency}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground mb-2">Key Features:</div>
                  {location.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-800">
          <p className="text-muted-foreground">
            More locations coming soon! Need a specific region? <span className="text-primary cursor-pointer hover:underline">Let us know</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;