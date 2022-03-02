import Image1 from "../components/Contacts/assets/img/phone.svg";
import Image2 from "../components/Contacts/assets/img/location.svg";
import Image3 from "../components/Contacts/assets/img/clock.svg";
import Image4 from "../components/Contacts/assets/img/mail.svg";

const ContactsUl = [
  {
    src: Image1,
    alt: "Phone",
    className: "contacts__wrapper__item",
    link: "tel:+375291002030",
    target: "_self",
    rel: "noopener noreferrer",
    description: "+375 29 100 20 30",
  },
  {
    src: Image2,
    alt: "Location",
    className: "contacts__wrapper__item",
    link: "https://goo.gl/maps/RykPu7YKkNk56NUCA",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Belarus, Gomel, Lange 17",
  },
  {
    src: Image3,
    alt: "Clock",
    className: "contacts__wrapper__item",
    link: "https://www.instagram.com/",
    target: "_self",
    rel: "noopener noreferrer",
    description: "All week 24/7",
  },
  {
    src: Image4,
    alt: "Mail",
    className: "contacts__wrapper__item",
    link: "mailto:info@clevertec.ru",
    target: "_self",
    rel: "noopener noreferrer",
    description: "info@clevertec.ru",
  },
];

export { ContactsUl };
