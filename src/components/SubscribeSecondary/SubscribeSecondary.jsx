import { Socials } from "../Socials/Socials";

import "./SubscribeSecondary.scss";

const SubscribeSecondary = () => {
  return (
    <>
      <section className="subscribe__secondary">
        <div className="inner__container">
          <div className="subscribe__secondary__container">
            <div className="subscribe__secondary__container__item">
              <h2 className="h2">Be In Touch With Us:</h2>
            </div>
            <div className="subscribe__secondary__container__item email__container">
              <input
                type="email"
                placeholder="Enter your email"
                className="input__email"
              />
              <button className="button__dark">Join Us</button>
            </div>
            <div className="subscribe__secondary__container__item">
              <Socials />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { SubscribeSecondary };
