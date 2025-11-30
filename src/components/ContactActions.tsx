import { Mail, Phone, Calendar, Star } from "lucide-react";

const ContactActions = () => {
  const handleEmail = () => {
    window.location.href = "mailto:google@gmail.com";
  };

  const handlePhone = () => {
    window.location.href = "tel:+49 15510146936";
  };

  const handleCalendar = () => {
    const bookingElement = document.getElementById("booking");
    bookingElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTestimonials = () => {
    const testimonialsElement = document.getElementById("testimonials");
    testimonialsElement?.scrollIntoView({ behavior: "smooth" });
  };

  const actions = [
    {
      icon: Mail,
      label: "Email",
      onClick: handleEmail,
      color: "hover:text-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      onClick: handlePhone,
      color: "hover:text-green-600",
    },
    {
      icon: Calendar,
      label: "Calendar",
      onClick: handleCalendar,
      color: "hover:text-purple-600",
    },
    {
      icon: Star,
      label: "Testimonials",
      onClick: handleTestimonials,
      color: "hover:text-yellow-500",
    },
  ];

  return (
    <div className="relative z-20 flex justify-center gap-8 -mt-8 px-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            onClick={action.onClick}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-lg transition-all duration-300 ${action.color} hover:shadow-xl hover:scale-110`}
            title={action.label}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium text-gray-600">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ContactActions;
