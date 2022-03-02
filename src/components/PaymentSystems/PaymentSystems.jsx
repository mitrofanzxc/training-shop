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
              className={PaymentSystemsUlLi.className}
            />
          );
        })}
      </div>
    </>
  );
};

export { PaymentSystems };
