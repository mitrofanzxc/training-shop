import React from "react";

import { Link } from "react-router-dom";

import "./ProductPageHeader.scss";

const ProductPageHeader = () => {
  return (
    <div>
      <section className="catalog__header">
        <div className="inner__container">
          <ul className="catalog__header__wrapper">
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  <Link
                    className="catalog__header__wrapper__item__subwrapper__item__link"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  <Link
                    className="catalog__header__wrapper__item__subwrapper__item__link"
                    to="/women"
                  >
                    Women
                  </Link>
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Women's tracksuit Q109
                </li>
              </ul>
            </li>
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item share"></li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Share
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="catalog__heading__item">Women's tracksuit Q109</h2>
          <ul className="catalog__header__wrapper availability">
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  <ul className="product__card__rating">
                    <li className="product__card__rating__item"></li>
                    <li className="product__card__rating__item"></li>
                    <li className="product__card__rating__item"></li>
                    <li className="product__card__rating__item"></li>
                    <li className="product__card__rating__item"></li>
                  </ul>
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item reviews">
                  2 reviews
                </li>
              </ul>
            </li>
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  SKU:
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item bold">
                  777
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Availability:
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item bold">
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
