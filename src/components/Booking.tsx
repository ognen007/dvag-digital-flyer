import { useTranslation } from "react-i18next";

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

        <div className="w-full h-screen">
          <iframe
            src="https://calendly.com"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Booking"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
