import { Link } from "react-router-dom";

import { PRODUCTS } from "../../shared/Products";

import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "./MensMain.scss";

const MensMain = () => {
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Men's</h2>
            <div className="catalog__filter">
              <div className="catalog__filter__item">New Arrivals</div>
              <div className="catalog__filter__item">Specials</div>
              <div className="catalog__filter__item">Bestsellers</div>
              <div className="catalog__filter__item">Most Viewed</div>
              <div className="catalog__filter__item">Feautured Products</div>
            </div>
          </div>
          <div className="products__container">
            {PRODUCTS.men.slice(0, 8).map((PRODUCTSitem) => {
              let RATING = PRODUCTSitem.rating;
              let RATING_STARS_FILLED = (
                <img
                  src={STAR_FILL}
                  alt="star"
                  className="product__card__rating__item"
                />
              );
              let RATING_STARS_EMPTY = (
                <img
                  src={STAR_EMPTY}
                  alt="star"
                  className="product__card__rating__item"
                />
              );
              let ARR_FILLED = Array(RATING).fill(RATING_STARS_FILLED);
              let ARR_FILLED_FULL = ARR_FILLED.fill(
                RATING_STARS_EMPTY,
                ARR_FILLED.length,
                5
              );
              console.log(ARR_FILLED_FULL);
              return (
                <div className="product__card">
                  <Link to={`${PRODUCTSitem.category}/${PRODUCTSitem.id}`}>
                    <img
                      src={`https://training.cleverland.by/shop${PRODUCTSitem.images[0].url}`}
                      className="product__card__image"
                      alt="Product Card Men Img"
                    />
                  </Link>
                  <div className="product__card__title">
                    {PRODUCTSitem.name}
                  </div>
                  <div className="product__card__price__list">
                    <div className="product__card__price__item">
                      {`$ ${PRODUCTSitem.price.toFixed(2)}`}
                    </div>
                    <div className="product__card__rating">
                      {ARR_FILLED_FULL}
                    </div>
                  </div>
                </div>
              );
            })}
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
