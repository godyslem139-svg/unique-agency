import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesTicker from "./components/ServicesTicker";

const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
const ShowcaseSection = dynamic(() => import("./components/ShowcaseSection"));
const StatsChart = dynamic(() => import("./components/StatsChart"));
const StatsSection = dynamic(() => import("./components/StatsSection"));
const LocationSection = dynamic(() => import("./components/LocationSection"));
const ContactForm = dynamic(() => import("./components/ContactForm"));

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