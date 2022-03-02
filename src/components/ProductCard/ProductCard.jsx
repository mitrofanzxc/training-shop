import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCardSliderVerticalImg } from "../../shared/ProductCardSliderImg";
import { ProductCardSliderMainImg } from "../../shared/ProductCardSliderImg";
import { ProductCardColorImg } from "../../shared/ProductCardColorImg";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "./ProductCard.scss";

SwiperCore.use([Navigation]);

const ProductCard = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <section className="product__card">
        <div className="inner__container">
          <ul className="side__container">
            <li className="side__left">
              <ul className="side__left__columns">
                <Swiper
                  className="side__left__columns__item vertical__left"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={15}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  direction={"vertical"}
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
                  <ul className="buttons__arrow__container">
                    <li>
                      <div
                        className="button__arrow arrow__up"
                        ref={navigationPrevRef}
                      />
                    </li>
                    <li>
                      <div
                        className="button__arrow arrow__down"
                        ref={navigationNextRef}
                      />
                    </li>
                  </ul>
                  <ul className="product__card__slider__vertical">
                    {ProductCardSliderVerticalImg.map(
                      (ProductCardSliderVerticalImgItem) => {
                        return (
                          <SwiperSlide>
                            <li className="product__card__slider__vertical__item">
                              <img
                                className={
                                  ProductCardSliderVerticalImgItem.className
                                }
                                src={ProductCardSliderVerticalImgItem.img}
                                alt={ProductCardSliderVerticalImgItem.alt}
                              />
                            </li>
                          </SwiperSlide>
                        );
                      }
                    )}
                  </ul>
                </Swiper>
                <Swiper
                  className="side__left__columns__item vertical__right"
                  spaceBetween={30}
                  slidesPerView={1}
                  sliderPerGroup={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs]}
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
                  <div
                    className="product__card__main"
                    data-test-id="main-slider"
                  >
                    {ProductCardSliderMainImg.map(
                      (ProductCardSliderMainImgItem) => {
                        return (
                          <img
                            className={ProductCardSliderMainImgItem.className}
                            src={ProductCardSliderMainImgItem.img}
                            alt={ProductCardSliderMainImgItem.alt}
                          />
                        );
                      }
                    )}
                    <div className="product__card__main__slider">
                      <div
                        className="button__arrow arrow__left"
                        ref={navigationPrevRef}
                      />
                      <div
                        className="button__arrow arrow__right"
                        ref={navigationNextRef}
                      />
                    </div>
                  </div>
                </Swiper>
              </ul>
            </li>
            <li className="side__right">
              <div className="color__text">
                <h4 className="h4">Color:</h4>
                <p className="paragraph">Blue</p>
              </div>
              <ul className="color__img">
                {ProductCardColorImg.map((ProductCardColorImgItem) => {
                  return (
                    <li className="color__img__item">
                      <Link
                        to={ProductCardColorImgItem.path}
                        className={ProductCardColorImgItem.className}
                      >
                        <img
                          src={ProductCardColorImgItem.img}
                          alt={ProductCardColorImgItem.alt}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="size__text">
                <h4 className="h4">Size:</h4>
                <p className="paragraph">S</p>
              </div>
              <ul className="size__img">
                <li className="size__img__item">XS</li>
                <li className="size__img__item">S</li>
                <li className="size__img__item">M</li>
                <li className="size__img__item">L</li>
              </ul>
              <ul className="size__guide">
                <li className="size__guide__item"></li>
                <li className="size__guide__item">Size guide</li>
              </ul>
              <ul className="product__price__and__buttons">
                <li className="product__price__and__buttons__item">
                  <h2 className="h2 price">$ 379.99</h2>
                </li>
                <li className="product__price__and__buttons__item">
                  <button className="button__cart">Add To Cart</button>
                </li>
                <li className="product__price__and__buttons__item">
                  <button className="button__wishlist"></button>
                </li>
                <li className="product__price__and__buttons__item">
                  <button className="button__scale"></button>
                </li>
              </ul>
              <ul className="benefits__wrapper">
                <div className="benefits__subwrapper">
                  <li className="benefits__item delivery"></li>
                  <li className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Shipping &amp; Delivery
                    </h3>
                  </li>
                </div>
                <div className="benefits__subwrapper">
                  <li className="benefits__item refresh"></li>
                  <li className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Returns &amp; Exchanges
                    </h3>
                  </li>
                </div>
                <div className="benefits__subwrapper">
                  <li className="benefits__item mail"></li>
                  <li className="benefits__text">
                    <h3 className="h3 benefits__text">Ask a question</h3>
                  </li>
                </div>
              </ul>
              <ul className="guaranteed">
                <li className="guaranteed__text">Guaranteed Safe Checkout</li>
                <li className="guaranteed__line"></li>
              </ul>
              <ul className="footer__wrapper">
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
                <li className="footer__wrapper__item"></li>
              </ul>
              <div className="product__description">Description</div>
              <ul className="additional__information__list">
                <li className="additional__information__list__header">
                  Additional Information
                </li>
                <li className="additional__information__list__property additional__text">
                  <h4 className="h4">Color:</h4>
                  <p className="paragraph">Blue, White, Black, Grey</p>
                </li>
                <li className="additional__information__list__property additional__text">
                  <h4 className="h4">Size:</h4>
                  <p className="paragraph">XS, S, M, L</p>
                </li>
                <li className="additional__information__list__property additional__text">
                  <h4 className="h4">Material:</h4>
                  <p className="paragraph">100% Polyester</p>
                </li>
              </ul>
              <ul className="reviews__list">
                <li className="reviews__list__header">Reviews</li>
                <li className="reviews__list__item">
                  <ul className="reviews__list__item__sublist">
                    <li className="reviews__list__item__sublist__item">
                      <ul className="reviews__list__item__sublist__item__sublist">
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          <ul className="product__card__rating">
                            <li className="product__card__rating__item__main"></li>
                            <li className="product__card__rating__item__main"></li>
                            <li className="product__card__rating__item__main"></li>
                            <li className="product__card__rating__item__main"></li>
                            <li className="product__card__rating__item__main"></li>
                          </ul>
                        </li>
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          2 Reviews
                        </li>
                      </ul>
                    </li>
                    <li className="reviews__list__item__sublist__item">
                      <ul className="reviews__list__item__sublist__item__sublist">
                        <li className="reviews__list__item__sublist__item__sublist__item message"></li>
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          Write a review
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="reviews__list__item">
                  <ul className="reviews__list__item__sublist">
                    <li className="reviews__list__item__sublist__item name">
                      Oleh Chabanov
                    </li>
                    <li className="reviews__list__item__sublist__item">
                      <ul className="reviews__list__item__sublist__item__sublist">
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </li>
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          <ul className="product__card__rating">
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="reviews__list__item review">
                  On the other hand, we denounce with righteous indignation and
                  like men who are so beguiled and demoralized by the charms of
                  pleasure of the moment
                </li>
                <li className="reviews__list__item">
                  <ul className="reviews__list__item__sublist">
                    <li className="reviews__list__item__sublist__item name">
                      ShAmAn design
                    </li>
                    <li className="reviews__list__item__sublist__item">
                      <ul className="reviews__list__item__sublist__item__sublist">
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </li>
                        <li className="reviews__list__item__sublist__item__sublist__item">
                          <ul className="product__card__rating">
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                            <li className="product__card__rating__item"></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="reviews__list__item review">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { ProductCard };
