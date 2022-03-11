import { useState } from "react";

import { Link } from "react-router-dom";

import { PRODUCTS } from "../../shared/Products";

import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "./CatalogMain.scss";

const CatalogMain = (props) => {
  const Category = props.category;
  const [newArrivals, setNewArrivals] = useState(null);
  const NewArrivals = () => {
    PRODUCTS[Category].slice(0, 8).map((PRODUCTSitem) => {
      const RATING = PRODUCTSitem.rating;
      const RATING_STARS_FILL = (
        <img
          src={STAR_FILL}
          alt="star"
          className="product__card__rating__item"
        />
      );
      const RATING_STARS_EMPTY = (
        <img
          src={STAR_EMPTY}
          alt="star"
          className="product__card__rating__item"
        />
      );
      const ARR_FILL = Array(5)
        .fill(RATING_STARS_EMPTY)
        .fill(RATING_STARS_FILL, 0, RATING);
      return (
        <>
          <div className="product__card">
            <Link to={`${PRODUCTSitem.category}/${PRODUCTSitem.id}`}>
              <img
                src={`https://training.cleverland.by/shop${PRODUCTSitem.images[0].url}`}
                className="product__card__image"
                alt="Product Card Men Img"
              />
            </Link>
            <div className="product__card__title">{PRODUCTSitem.name}</div>
            <div className="product__card__price__list">
              <div className="product__card__price__item">
                {`$ ${PRODUCTSitem.price.toFixed(2)}`}
              </div>
              <div className="product__card__rating">{ARR_FILL}</div>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">{`${props.category}'s`}</h2>
            <div className="catalog__filter">
              <div
                className="catalog__filter__item"
                onClick={() => setNewArrivals(NewArrivals)}
              >
                New Arrivals
              </div>
              <div className="catalog__filter__item">Specials</div>
              <div className="catalog__filter__item">Bestsellers</div>
              <div className="catalog__filter__item">Most Viewed</div>
              <div className="catalog__filter__item">Feautured Products</div>
            </div>
          </div>
          <div className="products__container">{newArrivals}</div>
          <div className="products__container">
            {PRODUCTS[props.category].slice(0, 8).map((PRODUCTSitem) => {
              const RATING = PRODUCTSitem.rating;
              const RATING_STARS_FILL = (
                <img
                  src={STAR_FILL}
                  alt="star"
                  className="product__card__rating__item"
                />
              );
              const RATING_STARS_EMPTY = (
                <img
                  src={STAR_EMPTY}
                  alt="star"
                  className="product__card__rating__item"
                />
              );
              const ARR_FILL = Array(5)
                .fill(RATING_STARS_EMPTY)
                .fill(RATING_STARS_FILL, 0, RATING);
              return (
                <>
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
                      <div className="product__card__rating">{ARR_FILL}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <button className="button__all">
            <Link to={`/${props.category}`} className="button__all__link">
              See All
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export { CatalogMain };
