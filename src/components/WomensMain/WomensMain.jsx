import React from "react";

import { Link } from "react-router-dom";

import product__card__women1 from "./assets/img/product__card__women1.jpg";
import product__card__women2 from "./assets/img/product__card__women2.jpg";
import product__card__women3 from "./assets/img/product__card__women3.jpg";
import product__card__women4 from "./assets/img/product__card__women4.jpg";
import product__card__women5 from "./assets/img/product__card__women5.jpg";
import product__card__women6 from "./assets/img/product__card__women6.jpg";
import product__card__women7 from "./assets/img/product__card__women7.jpg";
import product__card__women8 from "./assets/img/product__card__women8.jpg";

import "./WomensMain.scss";

const WomensMain = () => {
  return (
    <div>
      <section className="catalog">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Women's</h2>
            <ul className="catalog__filter">
              <li className="catalog__filter__item">New Arrivals</li>
              <li className="catalog__filter__item">Specials</li>
              <li className="catalog__filter__item">Bestsellers</li>
              <li className="catalog__filter__item">Most Viewed</li>
              <li className="catalog__filter__item">Feautured Products</li>
            </ul>
          </div>
          <div className="products__container">
            <ul className="product__card">
              <li>
                <Link to="/women/1" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women1}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/2" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women2}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/3" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women3}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/4" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women4}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/5" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women5}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/6" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women6}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/7" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women7}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
                <Link to="/women/8" data-test-id="clothes-card-women">
                  <img
                    src={product__card__women8}
                    className="product__card__image"
                    alt="product__card__women"
                  />
                </Link>
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
          <button className="button__all">
            <Link to="/women" className="button__all__link">
              See All
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export { WomensMain };
