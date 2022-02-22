import React from "react";

import "./SubscribeSecondary.scss";

const SubscribeSecondary = () => {
  return (
    <div>
      <section class="subscribe__secondary">
        <div class="inner__container">
          <ul class="subscribe__secondary__container">
            <li class="subscribe__secondary__container__item">
              <h2 class="h2">Be In Touch With Us:</h2>
            </li>
            <li class="subscribe__secondary__container__item">
              <input
                type="email"
                placeholder="Enter your email"
                class="input__email"
              />
              <button class="button__dark">Join Us</button>
            </li>
            <li class="subscribe__secondary__container__item">
              <ul class="socials__wrapper">
                <li class="socials__wrapper__item icon"></li>
                <li class="socials__wrapper__item icon"></li>
                <li class="socials__wrapper__item icon"></li>
                <li class="socials__wrapper__item icon"></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { SubscribeSecondary };
