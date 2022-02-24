import React from "react";

import { Link } from "react-router-dom";
import { ProductCardSliderImg } from "../../shared/ProductCardSliderImg";
import { ProductCardColorImg } from "../../shared/ProductCardColorImg";
import ProductCardMain1 from "./assets/img/product__card__main.jpg";

import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div>
      <section className="product__card">
        <div className="inner__container">
          <ul className="side__container">
            <li className="side__left">
              <ul className="side__left__columns">
                <li className="side__left__columns__item vertical__left">
                  <ul className="buttons__arrow__container">
                    <li>
                      <button className="button__arrow arrow__up"></button>
                    </li>
                    <li>
                      <button className="button__arrow arrow__down"></button>
                    </li>
                  </ul>
                  <ul className="product__card__slider__vertical">
                    {ProductCardSliderImg.map((ProductCardSliderImgItem) => {
                      return (
                        <li className="product__card__slider__vertical__item">
                          <img
                            className={ProductCardSliderImgItem.className}
                            src={ProductCardSliderImgItem.img}
                            alt={ProductCardSliderImgItem.alt}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="side__left__columns__item vertical__right">
                  <div
                    className="product__card__main"
                    data-test-id="main-slider"
                  >
                    <img
                      className="product__card__main__img"
                      src={ProductCardMain1}
                      alt="Product Card Main Slider 1"
                    />
                    <div className="product__card__main__slider">
                      <button className="button__arrow arrow__left"></button>
                      <button className="button__arrow arrow__right"></button>
                    </div>
                  </div>
                </li>
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
