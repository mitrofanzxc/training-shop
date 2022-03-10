import Facebook from "../components/Socials/assets/img/facebook.svg";
import Twitter from "../components/Socials/assets/img/twitter.svg";
import Instagram from "../components/Socials/assets/img/instagram.svg";
import Pinterest from "../components/Socials/assets/img/pinterest.svg";

import Search from "../components/Socials/assets/img/search.svg";
import Globe from "../components/Socials/assets/img/globe.svg";
import User from "../components/Socials/assets/img/user.svg";
import Cart from "../components/Socials/assets/img/cart.svg";

const SocialsList = [
  {
    src: Facebook,
    alt: "Facebook",
    className: "socials__wrapper__item",
    link: "https://www.facebook.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Facebook Social",
  },
  {
    src: Twitter,
    alt: "Twitter",
    className: "socials__wrapper__item",
    link: "https://twitter.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Twitter Social",
  },
  {
    src: Instagram,
    alt: "Instagram",
    className: "socials__wrapper__item",
    link: "https://www.instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    key: "Instagram Social",
  },
  {
    src: Pinterest,
    alt: "Pinterest",
    className: "socials__wrapper__item",
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
    className: "socials__wrapper__item",
    key: "Search Button",
  },
  {
    src: Globe,
    alt: "Globe",
    className: "socials__wrapper__item",
    key: "Globe Button",
  },
  {
    src: User,
    alt: "User",
    className: "socials__wrapper__item",
    key: "User Button",
  },
  {
    src: Cart,
    alt: "Cart",
    className: "socials__wrapper__item",
    key: "Cart Button",
  },
];

export { NavSecondaryList };
