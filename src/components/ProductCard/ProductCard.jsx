import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCardSliderVerticalImg } from "../../shared/ProductCardSliderImg";
import { ProductCardSliderMainImg } from "../../shared/ProductCardSliderImg";
import { ProductCardColorImg } from "../../shared/ProductCardColorImg";
import { PaymentSystems } from "../PaymentSystems/PaymentSystems";
import { Rating } from "../Rating/Rating";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import "./ProductCard.scss";

const ProductCard = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="product__card">
        <div className="inner__container">
          <div className="side__container">
            <div className="side__left">
              <div className="side__left__columns">
                <Swiper
                  className="side__left__columns__item vertical__left"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={0}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  direction={"vertical"}
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
                  <div className="buttons__arrow__container">
                    <div
                      className="button__arrow arrow__up"
                      ref={navigationPrevRef}
                    />
                    <div
                      className="button__arrow arrow__down"
                      ref={navigationNextRef}
                    />
                  </div>
                  <div className="product__card__slider__vertical">
                    {ProductCardSliderVerticalImg.map(
                      (ProductCardSliderVerticalImgItem) => {
                        return (
                          <SwiperSlide>
                            <img
                              className={
                                ProductCardSliderVerticalImgItem.className
                              }
                              src={ProductCardSliderVerticalImgItem.img}
                              alt={ProductCardSliderVerticalImgItem.alt}
                            />
                          </SwiperSlide>
                        );
                      }
                    )}
                  </div>
                </Swiper>
                <Swiper
                  className="side__left__columns__item vertical__right"
                  spaceBetween={0}
                  slidesPerView={1}
                  direction={"horizontal"}
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
                  <div className="product__card__main">
                    {ProductCardSliderMainImg.map(
                      (ProductCardSliderMainImgItem) => {
                        return (
                          <SwiperSlide>
                            <img
                              className={ProductCardSliderMainImgItem.className}
                              src={ProductCardSliderMainImgItem.img}
                              alt={ProductCardSliderMainImgItem.alt}
                            />
                          </SwiperSlide>
                        );
                      }
                    )}
                  </div>
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
                </Swiper>
              </div>
            </div>
            <div className="side__right">
              <div className="color__text">
                <h4 className="h4">Color:</h4>
                <p className="paragraph">Blue</p>
              </div>
              <div className="color__img">
                {ProductCardColorImg.map((ProductCardColorImgItem) => {
                  return (
                    <div className="color__img__item">
                      <Link
                        to={ProductCardColorImgItem.path}
                        className={ProductCardColorImgItem.className}
                      >
                        <img
                          src={ProductCardColorImgItem.img}
                          alt={ProductCardColorImgItem.alt}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="size__text">
                <h4 className="h4">Size:</h4>
                <p className="paragraph">S</p>
              </div>
              <div className="size__img">
                <div className="size__img__item">XS</div>
                <div className="size__img__item">S</div>
                <div className="size__img__item">M</div>
                <div className="size__img__item">L</div>
              </div>
              <div className="size__guide">
                <div className="size__guide__item"></div>
                <div className="size__guide__item">Size guide</div>
              </div>
              <div className="product__price__and__buttons">
                <div className="product__price__and__buttons__item">
                  <h2 className="h2 price">$ 379.99</h2>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__cart">Add To Cart</button>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__wishlist"></button>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__scale"></button>
                </div>
              </div>
              <div className="benefits__wrapper">
                <div className="benefits__subwrapper">
                  <div className="benefits__item delivery"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Shipping &amp; Delivery
                    </h3>
                  </div>
                </div>
                <div className="benefits__subwrapper">
                  <div className="benefits__item refresh"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Returns &amp; Exchanges
                    </h3>
                  </div>
                </div>
                <div className="benefits__subwrapper">
                  <div className="benefits__item mail"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">Ask a question</h3>
                  </div>
                </div>
              </div>
              <div className="guaranteed">
                <div className="guaranteed__text">Guaranteed Safe Checkout</div>
                <div className="guaranteed__line"></div>
              </div>
              <PaymentSystems />
              <div className="product__description">Description</div>
              <div className="additional__information__list">
                <div className="additional__information__list__header">
                  Additional Information
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Color:</h4>
                  <p className="paragraph">Blue, White, Black, Grey</p>
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Size:</h4>
                  <p className="paragraph">XS, S, M, L</p>
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Material:</h4>
                  <p className="paragraph">100% Polyester</p>
                </div>
              </div>
              <div className="reviews__list">
                <div className="reviews__list__header">Reviews</div>
                <div className="reviews__list__item">
                  <div className="reviews__list__item__sublist">
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          <Rating />
                        </div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          2 Reviews
                        </div>
                      </div>
                    </div>
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item message"></div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          Write a review
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews__list__item">
                  <div className="reviews__list__item__sublist">
                    <div className="reviews__list__item__sublist__item name">
                      Oleh Chabanov
                    </div>
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          <Rating />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews__list__item review">
                  On the other hand, we denounce with righteous indignation and
                  like men who are so beguiled and demoralized by the charms of
                  pleasure of the moment
                </div>
                <div className="reviews__list__item">
                  <div className="reviews__list__item__sublist">
                    <div className="reviews__list__item__sublist__item name">
                      ShAmAn design
                    </div>
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          <Rating />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews__list__item review">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductCard };
