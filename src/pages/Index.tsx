import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Services />
      <Testimonials />
      <Portfolio />
      <Booking />
      <footer className="bg-muted py-8 text-center text-muted-foreground">
        <p>&copy; 2024 Deutsche Vermögensberatung. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default Index;
