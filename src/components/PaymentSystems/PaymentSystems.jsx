import { PaymentSystemsUl } from "../../shared/PaymentSystemsUl";

import "./PaymentSystems.scss";

const PaymentSystems = () => {
  return (
    <>
      <div className="footer__wrapper">
        {PaymentSystemsUl.map((PaymentSystemsUlLi) => {
          return (
            <img
              src={PaymentSystemsUlLi.src}
              alt={PaymentSystemsUlLi.alt}
              key={PaymentSystemsUlLi.key}
              className="footer__wrapper__item"
            />
          );
        })}
      </div>
    </>
  );
};

export { PaymentSystems };
