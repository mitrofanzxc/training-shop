import Stripe from "../components/PaymentSystems/assets/img/stripe__color.svg";
import Aes256 from "../components/PaymentSystems/assets/img/aes256__color.svg";
import PayPal from "../components/PaymentSystems/assets/img/paypal__color.svg";
import Visa from "../components/PaymentSystems/assets/img/visa__color.svg";
import MasterCard from "../components/PaymentSystems/assets/img/mastercard__color.svg";
import Discover from "../components/PaymentSystems/assets/img/discover__color.svg";
import AmericanExpress from "../components/PaymentSystems/assets/img/american__express__color.svg";

const PaymentSystemsUl = [
  {
    src: Stripe,
    alt: "Stripe",
    className: "footer__wrapper__item",
    key: "Stripe",
  },
  {
    src: Aes256,
    alt: "Aes256",
    className: "footer__wrapper__item",
    key: "Aes256",
  },
  {
    src: PayPal,
    alt: "PayPal",
    className: "footer__wrapper__item",
    key: "PayPal",
  },
  {
    src: Visa,
    alt: "Visa",
    className: "footer__wrapper__item",
    key: "Visa",
  },
  {
    src: MasterCard,
    alt: "MasterCard",
    className: "footer__wrapper__item",
    key: "MasterCard",
  },
  {
    src: Discover,
    alt: "Discover",
    className: "footer__wrapper__item",
    key: "Discover",
  },
  {
    src: AmericanExpress,
    alt: "AmericanExpress",
    className: "footer__wrapper__item",
    key: "AmericanExpress",
  },
];

export { PaymentSystemsUl };
