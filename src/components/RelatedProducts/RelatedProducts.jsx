import React from "react";

import RelatedProducts1 from "./assets/img/related__products__1.jpg";
import RelatedProducts2 from "./assets/img/related__products__2.jpg";
import RelatedProducts3 from "./assets/img/related__products__3.jpg";
import RelatedProducts4 from "./assets/img/related__products__4.jpg";

const RelatedProducts = () => {
  return (
    <div>
      <section className="catalog" data-test-id="related-slider">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Related Products</h2>
            <div className="catalog__filter">
              <button className="button__arrow arrow__left"></button>
              <button className="button__arrow arrow__right"></button>
            </div>
          </div>
          <div className="products__container related__products">
            <ul className="product__card">
              <li>
                <img
                  src={RelatedProducts1}
                  className="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li className="product__card__title">Women's tracksuit Q109</li>
              <ul className="product__card__price__list">
                <li className="product__card__price__item">$ 30.00</li>
                <ul className="product__card__rating">
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul className="product__card">
              <li>
                <img
                  src={RelatedProducts2}
                  className="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li className="product__card__title">Women's tracksuit Q109</li>
              <ul className="product__card__price__list">
                <li className="product__card__price__item">$ 30.00</li>
                <ul className="product__card__rating">
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul className="product__card">
              <li>
                <img
                  src={RelatedProducts3}
                  className="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li className="product__card__title">Women's tracksuit Q109</li>
              <ul className="product__card__price__list">
                <li className="product__card__price__item">$ 30.00</li>
                <ul className="product__card__rating">
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul className="product__card">
              <li>
                <img
                  src={RelatedProducts4}
                  className="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li className="product__card__title">Women's tracksuit Q109</li>
              <ul className="product__card__price__list">
                <li className="product__card__price__item">$ 30.00</li>
                <ul className="product__card__rating">
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                  <li className="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export { RelatedProducts };
