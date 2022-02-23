import React from "react";

import "./SubscribeSecondary.scss";

const SubscribeSecondary = () => {
  return (
    <div>
      <section className="subscribe__secondary">
        <div className="inner__container">
          <ul className="subscribe__secondary__container">
            <li className="subscribe__secondary__container__item">
              <h2 className="h2">Be In Touch With Us:</h2>
            </li>
            <li className="subscribe__secondary__container__item email__container">
              <input
                type="email"
                placeholder="Enter your email"
                className="input__email"
              />
              <button className="button__dark">Join Us</button>
            </li>
            <li className="subscribe__secondary__container__item">
              <ul className="socials__wrapper">
                <li className="socials__wrapper__item icon"></li>
                <li className="socials__wrapper__item icon"></li>
                <li className="socials__wrapper__item icon"></li>
                <li className="socials__wrapper__item icon"></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { SubscribeSecondary };
