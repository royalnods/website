import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import MinecraftPlans from "@/components/MinecraftPlans";
import VpsPlans from "@/components/VpsPlans";
import WhyChooseUs from "@/components/WhyChooseUs";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Pricing />
      <MinecraftPlans />
      <VpsPlans />
      <WhyChooseUs />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
