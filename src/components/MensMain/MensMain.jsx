import { Link } from "react-router-dom";

import product__card__men1 from "./assets/img/product__card__men1.jpg";
import product__card__men2 from "./assets/img/product__card__men2.jpg";
import product__card__men3 from "./assets/img/product__card__men3.jpg";
import product__card__men4 from "./assets/img/product__card__men4.jpg";
import product__card__men5 from "./assets/img/product__card__men5.jpg";
import product__card__men6 from "./assets/img/product__card__men6.jpg";
import product__card__men7 from "./assets/img/product__card__men7.jpg";
import product__card__men8 from "./assets/img/product__card__men8.jpg";

import "./MensMain.scss";

const MensMain = () => {
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Men's</h2>
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
                <Link to="/men/1" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men1}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/2" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men2}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/3" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men3}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/4" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men4}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/5" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men5}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/6" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men6}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/7" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men7}
                    className="product__card__image"
                    alt="product__card__men"
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
                <Link to="/men/8" data-test-id="clothes-card-men">
                  <img
                    src={product__card__men8}
                    className="product__card__image"
                    alt="product__card__men"
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
            <Link to="/men" className="button__all__link">
              See All
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export { MensMain };
