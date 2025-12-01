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
        insurance: {
          title: "Versicherungen",
          description: "Umfassender Schutz für alle Lebenslagen. Von Kranken- bis Haftpflichtversicherung - wir finden die optimale Lösung für Sie."
        },
        loans: {
          title: "Kredite",
          description: "Günstige Finanzierungslösungen für Ihre Wünsche. Ob Auto, Immobilie oder persönliche Projekte - wir helfen Ihnen weiter."
        },
        retirement: {
          title: "Altersvorsorge",
          description: "Individuelle Lösungen für einen sorgenfreien Ruhestand. Wir helfen Ihnen, Ihre finanzielle Zukunft abzusichern."
        },
        building: {
          title: "Bausparen",
          description: "Der Weg zum Eigenheim. Mit Bausparverträgen schaffen Sie die ideale Grundlage für Ihr Wohneigentum."
        },
        investments: {
          title: "Investments",
          description: "Vermögensaufbau mit System. Professionelle Anlagestrategien für Ihre finanziellen Ziele und Renditeerwartungen."
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
        insurance: {
          title: "Insurance",
          description: "Comprehensive protection for all life situations. From health to liability insurance - we find the optimal solution for you."
        },
        loans: {
          title: "Loans",
          description: "Affordable financing solutions for your wishes. Whether car, property or personal projects - we help you succeed."
        },
        retirement: {
          title: "Retirement Planning",
          description: "Individual solutions for a worry-free retirement. We help you secure your financial future."
        },
        building: {
          title: "Building Savings",
          description: "The path to homeownership. Building savings contracts create the ideal foundation for your property."
        },
        investments: {
          title: "Investments",
          description: "Systematic wealth building. Professional investment strategies for your financial goals and return expectations."
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
        insurance: {
          title: "Осигурување",
          description: "Сеопфатна заштита за сите животни ситуации. От здравствено до осигурување од одговорност - наоѓаме оптимално решение за вас."
        },
        loans: {
          title: "Кредити",
          description: "Поволни решенија за финансирање на вашите желби. Без разлика дали е автомобил, имот или лични проекти - ви помагаме."
        },
        retirement: {
          title: "Пензиско планирање",
          description: "Индивидуални решенија за беззагрижено пензионирање. Ви помагаме да ја обезбедите вашата финансиска иднина."
        },
        building: {
          title: "Штедење за градба",
          description: "Патот кон сопствен дом. Со договори за штедење за градба создавате идеална основа за ваш имот."
        },
        investments: {
          title: "Инвестиции",
          description: "Систематско градење богатство. Професионални инвестициски стратегии за вашите финансиски цели и очекувања за принос."
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
        insurance: {
          title: "Застраховки",
          description: "Цялостна защита за всички житейски ситуации. От здравно до застраховка отговорност - намираме оптималното решение за вас."
        },
        loans: {
          title: "Кредити",
          description: "Изгодни решения за финансиране на вашите желания. Независимо дали е автомобил, имот или лични проекти - ние ви помагаме."
        },
        retirement: {
          title: "Пенсионно планиране",
          description: "Индивидуални решения за безгрижна пенсия. Помагаме ви да обезпечите финансовото си бъдеще."
        },
        building: {
          title: "Спестяване за строителство",
          description: "Пътят към собствен дом. С договори за спестяване за строителство създавате идеална основа за вашия имот."
        },
        investments: {
          title: "Инвестиции",
          description: "Системно изграждане на богатство. Професионални инвестиционни стратегии за вашите финансови цели и очаквания за доходност."
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
        insurance: {
          title: "Osiguranja",
          description: "Sveobuhvatna zaštita za sve životne situacije. Od zdravstvenog do osiguranja od odgovornosti - nalazimo optimalno rješenje za vas."
        },
        loans: {
          title: "Krediti",
          description: "Povoljni načini financiranja za vaše želje. Bilo da je automobil, nekretnina ili osobni projekti - pomažemo vam."
        },
        retirement: {
          title: "Planiranje mirovine",
          description: "Individualna rješenja za bezbrižnu mirovinu. Pomažemo vam osigurati vašu financijsku budućnost."
        },
        building: {
          title: "Štednja za gradnju",
          description: "Put do vlastitog doma. Ugovorima o štednji za gradnju stvarate idealan temelj za vašu nekretninu."
        },
        investments: {
          title: "Investicije",
          description: "Sustavna izgradnja bogatstva. Profesionalne investicijske strategije za vaše financijske ciljeve i očekivanja o prinosu."
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
