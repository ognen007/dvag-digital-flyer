import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

const Booking = () => {
  const { t } = useTranslation();

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("booking.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("booking.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Calendly Integration</h3>
            </div>
            <div className="bg-background rounded-lg p-8 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground mb-4">
                Hier wird das Calendly-Widget eingebettet
              </p>
              <p className="text-sm text-muted-foreground">
                Fügen Sie Ihren Calendly-Link in den Iframe unten ein
              </p>
              <div className="mt-6 h-96 bg-muted/30 rounded-lg flex items-center justify-center">
                {/* Replace with actual Calendly embed code */}
                <iframe
                  src="https://calendly.com"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Calendly Booking"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
