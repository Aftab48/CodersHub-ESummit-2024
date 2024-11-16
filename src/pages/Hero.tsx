import Forest from "@/components/Forest";
import CarbonFootprint from "@/sections/CarbonFootprint";
import CardComponent from "@/sections/CardComponent";
import HeroSection from "@/sections/HeroSection";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CardComponent />
      <Forest />
      <CarbonFootprint />
    </div>
  );
};

export default Hero;
