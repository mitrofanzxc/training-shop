import PhoneHeader from "./assets/img/phone__header.svg";
import LocationHeader from "./assets/img/location__header.svg";
import ClockHeader from "./assets/img/clock__header.svg";

import PhoneFooter from "./assets/img/phone.svg";
import LocationFooter from "./assets/img/location.svg";
import ClockFooter from "./assets/img/clock.svg";
import MailFooter from "./assets/img/mail.svg";

const ContactsListHeader = [
  {
    src: PhoneHeader,
    alt: "Phone",
    link: "tel:+375291002030",
    target: "_self",
    rel: "noopener noreferrer",
    description: "+375 29 100 20 30",
  },
  {
    src: LocationHeader,
    alt: "Location",
    link: "https://goo.gl/maps/RykPu7YKkNk56NUCA",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Belarus, Gomel, Lange 17",
  },
  {
    src: ClockHeader,
    alt: "Clock",
    link: "https://www.instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "All week 24/7",
  },
];

export { ContactsListHeader };

const ContactsListFooter = [
  {
    src: PhoneFooter,
    alt: "Phone",
    link: "tel:+375291002030",
    target: "_self",
    rel: "noopener noreferrer",
    description: "+375 29 100 20 30",
  },
  {
    src: LocationFooter,
    alt: "Location",
    link: "https://goo.gl/maps/RykPu7YKkNk56NUCA",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Belarus, Gomel, Lange 17",
  },
  {
    src: ClockFooter,
    alt: "Clock",
    link: "https://www.instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "All week 24/7",
  },
  {
    src: MailFooter,
    alt: "Mail",
    link: "mailto:info@clevertec.ru",
    target: "_self",
    rel: "noopener noreferrer",
    description: "info@clevertec.ru",
  },
];

export { ContactsListFooter };
