import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Anna Schmidt",
      role: "Kundin seit 2020",
      content:
        "Hervorragende Beratung! Ich fühle mich finanziell gut abgesichert.",
      rating: 5,
    },
    {
      name: "Michael Weber",
      role: "Kunde seit 2019",
      content:
        "Sehr professionell und kompetent. Die Beratung war genau auf meine Bedürfnisse zugeschnitten.",
      rating: 5,
    },
    {
      name: "Sarah Müller",
      role: "Kundin seit 2021",
      content:
        "Freundlich, vertrauenswürdig und immer erreichbar. Kann ich nur weiterempfehlen!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
