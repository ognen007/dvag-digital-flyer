import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Phone, Calendar } from "lucide-react";

const Angebot = () => {
  const { t } = useTranslation();

  return (
    <section id="angebot" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="p-8 md:p-12 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {t("angebot.text")}{" "}
            <a
              href="tel:+4917049735063"
              className="inline-flex items-center gap-2 text-[hsl(45,70%,35%)] hover:text-[hsl(45,70%,45%)] font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t("angebot.callMe")}
            </a>{" "}
            {t("angebot.or")}{" "}
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[hsl(45,70%,35%)] hover:text-[hsl(45,70%,45%)] font-semibold transition-colors"
            >
              <Calendar className="w-4 h-4" />
              {t("angebot.makeAppointment")}
            </a>{" "}
            {t("angebot.forMoreInfo")}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Angebot;
