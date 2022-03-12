import Search from "../components/Socials/assets/img/search.svg";
import Globe from "../components/Socials/assets/img/globe.svg";
import User from "../components/Socials/assets/img/user.svg";
import Cart from "../components/Socials/assets/img/cart.svg";

const SocialsList = [
  {
    className: "socials__wrapper__item facebook",
    link: "https://www.facebook.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Facebook Social",
  },
  {
    className: "socials__wrapper__item twitter",
    link: "https://twitter.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Twitter Social",
  },
  {
    className: "socials__wrapper__item instagram",
    link: "https://www.instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Instagram Social",
  },
  {
    className: "socials__wrapper__item pinterest",
    link: "https://www.pinterest.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Pinterest Social",
  },
];

export { SocialsList };

const NavSecondaryList = [
  {
    src: Search,
    alt: "Search",
    key: "Search Button",
  },
  {
    src: Globe,
    alt: "Globe",
    key: "Globe Button",
  },
  {
    src: User,
    alt: "User",
    key: "User Button",
  },
  {
    src: Cart,
    alt: "Cart",
    key: "Cart Button",
  },
];

export { NavSecondaryList };
