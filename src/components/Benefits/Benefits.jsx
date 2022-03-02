import "./Benefits.scss";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="inner__container">
          <div className="benefits__wrapper">
            <div className="benefits__wrapper__item">
              <div className="benefits__item delivery"></div>
              <div className="benefits__text">
                <h3 className="h3 benefits__text">Free Shipping</h3>
                <h4 className="h4 benefits__text">
                  On all UA order or order above $100
                </h4>
              </div>
            </div>
            <div className="benefits__wrapper__item">
              <div className="benefits__item refresh"></div>
              <div className="benefits__text">
                <h3 className="h3 benefits__text">30 Days Return</h3>
                <h4 className="h4 benefits__text">
                  Simply return it within 30 days for an exchange
                </h4>
              </div>
            </div>
            <div className="benefits__wrapper__item">
              <div className="benefits__item support"></div>
              <div className="benefits__text">
                <h3 className="h3 benefits__text">Support 24/7</h3>
                <h4 className="h4 benefits__text">
                  Contact us 24 hours a day, 7 days a week
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Benefits };
