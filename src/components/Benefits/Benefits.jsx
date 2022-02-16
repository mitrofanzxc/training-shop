import "./Benefits.css";

const Benefits = () => {
  return (
    <div>
      <section className="benefits">
        <div className="inner__container">
          <ul className="benefits__wrapper">
            <li className="benefits__item"></li>
            <ul className="benefits__text">
              <h3 className="h3 benefits__text">Free Shipping</h3>
              <h4 className="h4 benefits__text">
                On all UA order or order above $100
              </h4>
            </ul>
            <li className="benefits__item"></li>
            <ul className="benefits__text">
              <h3 className="h3 benefits__text">30 Days Return</h3>
              <h4 className="h4 benefits__text">
                Simply return it within 30 days for an exchange
              </h4>
            </ul>
            <li className="benefits__item"></li>
            <ul className="benefits__text">
              <h3 className="h3 benefits__text">Support 24/7</h3>
              <h4 className="h4 benefits__text">
                Contact us 24 hours a day, 7 days a week
              </h4>
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Benefits };
