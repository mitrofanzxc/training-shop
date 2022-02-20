import React from "react";

import { Link } from "react-router-dom";
import "./SliderBanners.scss";

const SliderBanners = () => {
  return (
    <div>
      <section className="banners">
        <div className="inner__container">
          <div className="banners__container">
            <div className="slider">
              <button className="slider__arrow arrow__left"></button>
              <button className="slider__title">
                <Link to="/">
                  <h3 className="h3">Banner</h3>
                  <h2 className="h2">Your title text</h2>
                </Link>
              </button>
              <button className="slider__arrow arrow__right"></button>
            </div>
            <div className="accessories">
              <button className="slider__title">
                <Link to="/accessories">
                  <h2 className="h2">Accessories</h2>
                </Link>
              </button>
            </div>
            <div className="women">
              <button className="slider__title">
                <Link to="/women">
                  <h2 className="h2">Women</h2>
                </Link>
              </button>
            </div>
            <div className="men">
              <button className="slider__title">
                <Link to="/men">
                  <h2 className="h2">Men</h2>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SliderBanners };
