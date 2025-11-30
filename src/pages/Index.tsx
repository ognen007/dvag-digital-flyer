import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactActions from "@/components/ContactActions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Booking from "@/components/Booking";
import "@/i18n/config";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactActions />
      <Services />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Portfolio />
      <div id="booking">
        <Booking />
      </div>
    </div>
  );
};

export default Index;
