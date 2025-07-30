import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gamepad2, Shield, HardDrive, Cpu, Clock, Cloud } from "lucide-react";
import { useState } from "react";

const MinecraftPlans = () => {
  const [selectedLocation, setSelectedLocation] = useState("india");

  const minecraftPlans = [
    {
      name: "Stone Plan",
      ram: "4GB DDR4",
      storage: "12GB NVMe SSD",
      cpu: "150%",
      backups: "2 Cloud Backups",
      price: { india: "220", singapore: "129", dubai: "139", pakistan: "560" },
      popular: false
    },
    {
      name: "Coal Plan", 
      ram: "6GB DDR4",
      storage: "15GB NVMe SSD",
      cpu: "200%",
      backups: "2 Cloud Backups",
      price: { india: "330", singapore: "169", dubai: "208", pakistan: "840" },
      popular: false
    },
    {
      name: "Iron Plan",
      ram: "8GB DDR4", 
      storage: "20GB NVMe SSD",
      cpu: "250%",
      backups: "3 Cloud Backups",
      price: { india: "440", singapore: "269", dubai: "288", pakistan: "1120" },
      popular: false
    },
    {
      name: "Gold Plan",
      ram: "10GB DDR4",
      storage: "25GB NVMe SSD", 
      cpu: "300%",
      backups: "3 Cloud Backups",
      price: { india: "550", singapore: "329", dubai: "349", pakistan: "1400" },
      popular: true
    },
    {
      name: "Diamond Plan",
      ram: "12GB DDR4",
      storage: "30GB NVMe SSD",
      cpu: "350%", 
      backups: "4 Cloud Backups",
      price: { india: "660", singapore: "389", dubai: "410", pakistan: "1680" },
      popular: false
    },
    {
      name: "Emerald Plan",
      ram: "16GB DDR4",
      storage: "40GB NVMe SSD",
      cpu: "400%",
      backups: "4 Cloud Backups", 
      price: { india: "880", singapore: "519", dubai: "537", pakistan: "2240" },
      popular: false
    },
    {
      name: "Netherite Plan",
      ram: "20GB DDR4",
      storage: "45GB NVMe SSD",
      cpu: "450%",
      backups: "5 Cloud Backups",
      price: { india: "1100", singapore: "569", dubai: "664", pakistan: "2800" },
      popular: false
    },
    {
      name: "Obsidian Plan", 
      ram: "24GB DDR4",
      storage: "50GB NVMe SSD",
      cpu: "500%",
      backups: "5 Cloud Backups",
      price: { india: "1320", singapore: "699", dubai: "790", pakistan: "3360" },
      popular: false
    },
    {
      name: "Bedrock Plan",
      ram: "32GB DDR4",
      storage: "60GB NVMe SSD", 
      cpu: "600%",
      backups: "5 Cloud Backups",
      price: { india: "1760", singapore: "999", dubai: "1999", pakistan: "4480" },
      popular: false
    }
  ];

  const locations = [
    { id: "india", name: "India", currency: "₹", flag: "🇮🇳" },
    { id: "singapore", name: "Singapore", currency: "₹", flag: "🇸🇬" },
    { id: "dubai", name: "Dubai", currency: "₹", flag: "🇦🇪" },
    { id: "pakistan", name: "Pakistan", currency: "₨", flag: "🇵🇰" }
  ];

  return (
    <section id="minecraft" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Minecraft Hosting Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium Minecraft server hosting with DDoS protection and instant deployment
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary/50 rounded-full p-1 animate-scale-in">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`
                  px-6 py-3 rounded-full transition-all duration-500 flex items-center gap-2 font-medium
                  ${selectedLocation === location.id 
                    ? 'bg-primary text-primary-foreground shadow-lg transform scale-105' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                  }
                `}
              >
                <span className="text-lg">{location.flag}</span>
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {minecraftPlans.map((plan, index) => {
            const currentLocation = locations.find(loc => loc.id === selectedLocation);
            const price = plan.price[selectedLocation as keyof typeof plan.price];
            
            return (
              <Card 
                key={plan.name}
                className={`
                  relative overflow-hidden border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 
                  animate-slide-up group cursor-pointer hover:border-primary/50
                  ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20' : 'border-border'}
                  ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-primary to-accent text-center py-2 animate-pulse">
                      <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-0 font-bold">
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader className={`${plan.popular ? 'pt-12' : 'pt-6'} pb-4 text-center`}>
                  <div className="mb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {currentLocation?.flag} {currentLocation?.name}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-primary">{currentLocation?.currency}{price}</span>
                      <span className="text-muted-foreground ml-2">Monthly</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group-hover:animate-bounce animation-delay-100">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Cpu className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{plan.ram} RAM</span>
                    </li>
                    <li className="flex items-center gap-3 group-hover:animate-bounce animation-delay-200">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <HardDrive className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{plan.storage}</span>
                    </li>
                    <li className="flex items-center gap-3 group-hover:animate-bounce animation-delay-300">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Clock className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{plan.cpu} CPU</span>
                    </li>
                    <li className="flex items-center gap-3 group-hover:animate-bounce animation-delay-400">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Cloud className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{plan.backups}</span>
                    </li>
                    <li className="flex items-center gap-3 group-hover:animate-bounce animation-delay-500">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">DDoS Protected</span>
                    </li>
                  </ul>
                </CardContent>

                <CardFooter className="px-6 pb-6">
                  <Button 
                    className={`
                      w-full group relative overflow-hidden transition-all duration-500 transform hover:scale-105
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground shadow-lg' 
                        : 'bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground'
                      }
                    `}
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                      Order Now
                      <Gamepad2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-800">
          <p className="text-muted-foreground">
            Need custom mods or plugins? <Button variant="link" className="text-primary p-0 h-auto hover:underline">Contact our Minecraft experts</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MinecraftPlans;