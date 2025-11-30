const Hero = () => {
  return (
    <section id="hero" className="relative h-[40vh] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,0 100,0 100,60 0,40"
            fill="hsl(var(--primary))"
            opacity="1"
          />
          <polygon
            points="0,40 100,60 100,100 0,100"
            fill="hsl(var(--background))"
            opacity="1"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full md:w-1/2 lg:w-2/5 p-8">
        <div className="w-full h-screen rounded-lg overflow-hidden shadow-2xl border-4 border-background">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
            alt="Financial Advisor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
