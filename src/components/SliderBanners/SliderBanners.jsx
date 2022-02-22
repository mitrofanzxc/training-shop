import React from "react";

import { Link } from "react-router-dom";

import SliderImg from "./assets/img/slider.jpg";
import AccessoriesImg from "./assets/img/accessories.jpg";
import WomenImg from "./assets/img/women.jpg";
import MenImg from "./assets/img/men.jpg";
import "./SliderBanners.scss";

const SliderBanners = () => {
  return (
    <div>
      <section className="banners">
        <div className="inner__container">
          <div className="banners__container">
            <div className="slider">
              <img className="slider__img" src={SliderImg} alt="Slider Img" />
              <div className="buttons__container">
                <button className="slider__arrow arrow__left"></button>
                <button className="slider__title">
                  <Link to="/">
                    <h3 className="h3">Banner</h3>
                    <h2 className="h2">Your title text</h2>
                  </Link>
                </button>
                <button className="slider__arrow arrow__right"></button>
              </div>
            </div>
            <div className="banners__container__right">
              <div className="banners__container__right__gender">
                <div className="women">
                  <img className="banner__img" src={WomenImg} alt="Women Img" />
                  <button className="slider__title">
                    <Link to="/women">
                      <h2 className="h2">Women</h2>
                    </Link>
                  </button>
                </div>
                <div className="men">
                  <img className="banner__img" src={MenImg} alt="Men Img" />
                  <button className="slider__title">
                    <Link to="/men">
                      <h2 className="h2">Men</h2>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="accessories">
                <img
                  className="banner__img"
                  src={AccessoriesImg}
                  alt="Accessories Img"
                />
                <button className="slider__title">
                  <Link to="/accessories">
                    <h2 className="h2">Accessories</h2>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SliderBanners };
