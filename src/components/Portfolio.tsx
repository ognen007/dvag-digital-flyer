import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Award, Heart } from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Zufriedene Kunden",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Kundenzufriedenheit",
    },
    {
      icon: Award,
      value: "15+",
      label: "Jahre Erfahrung",
    },
    {
      icon: Heart,
      value: "100%",
      label: "Engagement",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
