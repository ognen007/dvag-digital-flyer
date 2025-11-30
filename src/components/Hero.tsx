import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,0 55,0 45,100 0,100"
            fill="hsl(var(--primary))"
            opacity="1"
          />
          <polygon
            points="55,0 100,0 100,100 45,100"
            fill="hsl(var(--background))"
            opacity="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-background">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                alt="Financial Advisor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-6 order-1 md:order-2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
