import { Phone, Mail, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "+49 170 4973563",
      href: "tel:+4917049735063",
      action: "Call"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
      action: "Email"
    },
    {
      icon: Calendar,
      label: "Calendar",
      value: "Schedule a meeting",
      href: "https://calendly.com/miki-lazarov44/30min",
      action: "Book"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coming soon",
      href: "#",
      action: "View",
      disabled: true
    }
  ];

  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <a
                  href={item.disabled ? undefined : item.href}
                  target={item.label === "Calendar" ? "_blank" : undefined}
                  rel={item.label === "Calendar" ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center text-center gap-3 ${
                    item.disabled ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-muted-foreground break-words">
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
