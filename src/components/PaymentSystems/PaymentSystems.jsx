import { PaymentSystemsList } from "../../shared/PaymentSystemsList";

import "./PaymentSystems.scss";

const PaymentSystems = () => {
  return (
    <>
      <div className="footer__wrapper">
        {PaymentSystemsList.map((PaymentSystem) => {
          return (
            <div className={PaymentSystem.className} key={PaymentSystem.key} />
          );
        })}
      </div>
    </>
  );
};

export { PaymentSystems };
