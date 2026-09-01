import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesTicker from "./components/ServicesTicker";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ShowcaseSection from "./components/ShowcaseSection";
import StatsChart from "./components/StatsChart";
import StatsSection from "./components/StatsSection";
import LocationSection from "./components/LocationSection";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <main className="w-full bg-[#0D2B42] text-white overflow-x-clip">
      
      <Navbar />

      <HeroSection />

      <ServicesTicker />

      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      
      <ShowcaseSection />
      
      <StatsChart />
      <StatsSection />
      <LocationSection />
      <ContactForm />
      
    </main>
  );
}