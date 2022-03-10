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
    key: "Stripe Payment System",
  },
  {
    src: Aes256,
    alt: "Aes256",
    key: "Aes256 Payment System",
  },
  {
    src: PayPal,
    alt: "PayPal",
    key: "PayPal Payment System",
  },
  {
    src: Visa,
    alt: "Visa",
    key: "Visa Payment System",
  },
  {
    src: MasterCard,
    alt: "MasterCard",
    key: "MasterCard Payment System",
  },
  {
    src: Discover,
    alt: "Discover",
    key: "Discover Payment System",
  },
  {
    src: AmericanExpress,
    alt: "AmericanExpress",
    key: "AmericanExpress Payment System",
  },
];

export { PaymentSystemsUl };
