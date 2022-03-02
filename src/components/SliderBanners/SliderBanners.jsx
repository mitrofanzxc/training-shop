import React, { useRef } from "react";

import { Link } from "react-router-dom";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderImg from "./assets/img/slider.jpg";
import AccessoriesImg from "./assets/img/accessories.jpg";
import WomenImg from "./assets/img/women.jpg";
import MenImg from "./assets/img/men.jpg";

import "swiper/scss";
import "swiper/scss/navigation";

import "./SliderBanners.scss";

const SliderBanners = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <section className="banners">
        <div className="inner__container">
          <div className="banners__container">
            <Swiper
              className="slider"
              data-test-id="main-slider"
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              sliderPerGroup={1}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide>
                <img className="slider__img" src={SliderImg} alt="Slider Img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider__img" src={SliderImg} alt="Slider Img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider__img" src={SliderImg} alt="Slider Img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider__img" src={SliderImg} alt="Slider Img" />
              </SwiperSlide>
              <div className="buttons__container">
                <div
                  className="button__arrow arrow__left"
                  ref={navigationPrevRef}
                />
                <button className="slider__title header">
                  <Link to="/">
                    <h3 className="h3">Banner</h3>
                    <h2 className="h2">Your title text</h2>
                  </Link>
                </button>
                <div
                  className="button__arrow arrow__right"
                  ref={navigationNextRef}
                />
              </div>
            </Swiper>
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
    </>
  );
};

export { SliderBanners };
