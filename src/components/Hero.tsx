const Hero = () => {
  return (
    <section id="hero" className="relative h-[50vh] md:h-[60vh] pt-20">
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

      <div className="absolute bottom-0 right-0 z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 m-4 md:mb-8 md:mr-8">
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://i.ibb.co/ktG4qyV/image.png"
            alt="Financial Advisor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
