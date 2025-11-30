import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  de: {
    translation: {
      nav: {
        home: "Startseite",
        services: "Leistungen",
        testimonials: "Referenzen",
        portfolio: "Portfolio",
        contact: "Kontakt"
      },
      hero: {
        title: "Ihre finanzielle Zukunft in guten Händen",
        subtitle: "Professionelle Beratung für Ihre Absicherung und Vermögensaufbau"
      },
      services: {
        title: "Unsere Leistungen",
        subtitle: "Umfassende Beratung für Ihre finanzielle Sicherheit",
        retirement: {
          title: "Altersvorsorge",
          description: "Individuelle Lösungen für einen sorgenfreien Ruhestand. Wir helfen Ihnen, Ihre finanzielle Zukunft abzusichern."
        },
        health: {
          title: "Krankenversicherung",
          description: "Optimaler Schutz für Ihre Gesundheit. Finden Sie die passende Versicherung für Ihre Bedürfnisse."
        },
        liability: {
          title: "Haftpflichtversicherung",
          description: "Schutz vor finanziellen Risiken im Alltag. Sichern Sie sich und Ihre Familie ab."
        }
      },
      testimonials: {
        title: "Was unsere Kunden sagen",
        subtitle: "Erfahrungen zufriedener Kunden"
      },
      portfolio: {
        title: "Unser Portfolio",
        subtitle: "Erfolgreiche Projekte und zufriedene Kunden"
      },
      booking: {
        title: "Vereinbaren Sie einen Termin",
        subtitle: "Ich freue mich auf ein persönliches Gespräch mit Ihnen"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        testimonials: "Testimonials",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      hero: {
        title: "Your Financial Future in Good Hands",
        subtitle: "Professional consulting for your security and wealth building"
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive consulting for your financial security",
        retirement: {
          title: "Retirement Planning",
          description: "Individual solutions for a worry-free retirement. We help you secure your financial future."
        },
        health: {
          title: "Health Insurance",
          description: "Optimal protection for your health. Find the right insurance for your needs."
        },
        liability: {
          title: "Liability Insurance",
          description: "Protection against financial risks in everyday life. Secure yourself and your family."
        }
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Experiences from satisfied clients"
      },
      portfolio: {
        title: "Our Portfolio",
        subtitle: "Successful projects and satisfied clients"
      },
      booking: {
        title: "Schedule an Appointment",
        subtitle: "I look forward to a personal conversation with you"
      }
    }
  },
  mk: {
    translation: {
      nav: {
        home: "Дома",
        services: "Услуги",
        testimonials: "Референци",
        portfolio: "Портфолио",
        contact: "Контакт"
      },
      hero: {
        title: "Вашата финансиска иднина во добри раце",
        subtitle: "Професионално советување за вашата сигурност и градење богатство"
      },
      services: {
        title: "Наши Услуги",
        subtitle: "Сеопфатно советување за вашата финансиска сигурност",
        retirement: {
          title: "Пензиско планирање",
          description: "Индивидуални решенија за беззагрижено пензионирање. Ви помагаме да ја обезбедите вашата финансиска иднина."
        },
        health: {
          title: "Здравствено осигурување",
          description: "Оптимална заштита за вашето здравје. Најдете го вистинското осигурување за вашите потреби."
        },
        liability: {
          title: "Осигурување од одговорност",
          description: "Заштита од финансиски ризици во секојдневието. Обезбедете се вие и вашето семејство."
        }
      },
      testimonials: {
        title: "Што велат нашите клиенти",
        subtitle: "Искуства од задоволни клиенти"
      },
      portfolio: {
        title: "Нашето Портфолио",
        subtitle: "Успешни проекти и задоволни клиенти"
      },
      booking: {
        title: "Закажете состанок",
        subtitle: "Се радувам на личен разговор со вас"
      }
    }
  },
  bg: {
    translation: {
      nav: {
        home: "Начало",
        services: "Услуги",
        testimonials: "Препоръки",
        portfolio: "Портфолио",
        contact: "Контакт"
      },
      hero: {
        title: "Вашето финансово бъдеще в добри ръце",
        subtitle: "Професионално консултиране за вашата сигурност и изграждане на богатство"
      },
      services: {
        title: "Нашите Услуги",
        subtitle: "Цялостно консултиране за вашата финансова сигурност",
        retirement: {
          title: "Пенсионно планиране",
          description: "Индивидуални решения за безгрижна пенсия. Помагаме ви да обезпечите финансовото си бъдеще."
        },
        health: {
          title: "Здравно осигуряване",
          description: "Оптимална защита за вашето здраве. Намерете подходящата застраховка за вашите нужди."
        },
        liability: {
          title: "Застраховка отговорност",
          description: "Защита срещу финансови рискове в ежедневието. Обезпечете себе си и семейството си."
        }
      },
      testimonials: {
        title: "Какво казват нашите клиенти",
        subtitle: "Опит от доволни клиенти"
      },
      portfolio: {
        title: "Нашето Портфолио",
        subtitle: "Успешни проекти и доволни клиенти"
      },
      booking: {
        title: "Запазете час",
        subtitle: "Очаквам с нетърпение личен разговор с вас"
      }
    }
  },
  hr: {
    translation: {
      nav: {
        home: "Početna",
        services: "Usluge",
        testimonials: "Reference",
        portfolio: "Portfolio",
        contact: "Kontakt"
      },
      hero: {
        title: "Vaša financijska budućnost u dobrim rukama",
        subtitle: "Profesionalno savjetovanje za vašu sigurnost i izgradnju bogatstva"
      },
      services: {
        title: "Naše Usluge",
        subtitle: "Sveobuhvatno savjetovanje za vašu financijsku sigurnost",
        retirement: {
          title: "Planiranje mirovine",
          description: "Individualna rješenja za bezbrižnu mirovinu. Pomažemo vam osigurati vašu financijsku budućnost."
        },
        health: {
          title: "Zdravstveno osiguranje",
          description: "Optimalna zaštita za vaše zdravlje. Pronađite pravo osiguranje za vaše potrebe."
        },
        liability: {
          title: "Osiguranje od odgovornosti",
          description: "Zaštita od financijskih rizika u svakodnevnom životu. Osigurajte sebe i svoju obitelj."
        }
      },
      testimonials: {
        title: "Što kažu naši klijenti",
        subtitle: "Iskustva zadovoljnih klijenata"
      },
      portfolio: {
        title: "Naš Portfolio",
        subtitle: "Uspješni projekti i zadovoljni klijenti"
      },
      booking: {
        title: "Zakažite sastanak",
        subtitle: "Radujem se osobnom razgovoru s vama"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    lng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
