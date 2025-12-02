import { useTranslation } from "react-i18next";
import { Phone, Mail, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: "+49 170 4973563",
      href: "tel:+4917049735063",
    },
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "miki.lazarov44@gmail.com",
      href: "mailto:miki.lazarov44@gmail.com",
    },
    {
      icon: Calendar,
      labelKey: "contact.calendar",
      value: "Schedule a meeting",
      href: "https://calendly.com/miki-lazarov44/30min",
      target: "_blank",
    },
    {
      icon: MapPin,
      labelKey: "contact.location",
      value: "Hauptstraße 62\n77839 Lichtenau",
      href: "https://www.google.com/maps/search/Hauptstraße+62,+77839+Lichtenau",
      target: "_blank",
    }
  ];

  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          {t("contact.name")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t(item.labelKey)}</h3>
                    <p className="text-xs text-muted-foreground break-words whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
