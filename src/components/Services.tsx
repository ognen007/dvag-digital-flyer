import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Shield, Banknote, PiggyBank, Home, TrendingUp, ChevronDown, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: "insurance",
      icon: Shield,
      title: t("services.insurance.title"),
      description: t("services.insurance.description"),
    },
    {
      id: "loans",
      icon: Banknote,
      title: t("services.loans.title"),
      description: t("services.loans.description"),
    },
    {
      id: "retirement",
      icon: PiggyBank,
      title: t("services.retirement.title"),
      description: t("services.retirement.description"),
    },
    {
      id: "building",
      icon: Home,
      title: t("services.building.title"),
      description: t("services.building.description"),
    },
    {
      id: "investments",
      icon: TrendingUp,
      title: t("services.investments.title"),
      description: t("services.investments.description"),
    },
    {
      id: "factoring",
      icon: FileText,
      title: t("services.factoring.title"),
      description: t("services.factoring.description"),
      badge: t("services.factoring.badge"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <Card
                key={service.id}
                className="p-6 cursor-pointer transition-all hover:shadow-xl"
                onClick={() =>
                  setExpandedService(isExpanded ? null : service.id)
                }
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  {service.badge && (
                    <Badge variant="secondary" className="mb-2">{service.badge}</Badge>
                  )}
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground mt-4">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
