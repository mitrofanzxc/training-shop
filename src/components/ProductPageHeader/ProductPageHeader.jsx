import React from "react";

import "./ProductPageHeader.scss";

const ProductPageHeader = () => {
  return (
    <div>
      <section class="catalog__header">
        <div class="inner__container">
          <ul class="catalog__header__wrapper">
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Home
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Women
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Women's tracksuit Q109
                </li>
              </ul>
            </li>
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item share"></li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Share
                </li>
              </ul>
            </li>
          </ul>
          <h2 class="catalog__heading__item">Women's tracksuit Q109</h2>
          <ul class="catalog__header__wrapper availability">
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  <ul class="product__card__rating">
                    <li class="product__card__rating__item"></li>
                    <li class="product__card__rating__item"></li>
                    <li class="product__card__rating__item"></li>
                    <li class="product__card__rating__item"></li>
                    <li class="product__card__rating__item"></li>
                  </ul>
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item reviews">
                  2 reviews
                </li>
              </ul>
            </li>
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  SKU:
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item bold">
                  777
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Availability:
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item bold">
                  In Stock
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { ProductPageHeader };
