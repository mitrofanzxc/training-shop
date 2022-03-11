import { PaymentSystemsList } from "../../shared/PaymentSystemsList";

import "./PaymentSystems.scss";

const PaymentSystems = () => {
  return (
    <>
      <div className="footer__wrapper">
        {PaymentSystemsList.map((PaymentSystem) => {
          return (
            <img
              src={PaymentSystem.src}
              alt={PaymentSystem.alt}
              key={PaymentSystem.key}
            />
          );
        })}
      </div>
    </>
  );
};

export { PaymentSystems };
