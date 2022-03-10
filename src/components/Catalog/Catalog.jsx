import { Link } from "react-router-dom";

import { PRODUCTS } from "../../shared/Products";

import loading from "./assets/img/loading.gif";
import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "./Catalog.scss";

const Catalog = (props) => {
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
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
                <div className="product__card">
                  <Link to={`/${PRODUCTSitem.category}/${PRODUCTSitem.id}`}>
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
              );
            })}
          </div>
          <button className="button__loading">
            <img src={loading} alt="loading" />
          </button>
        </div>
      </section>
    </>
  );
};

export { Catalog };
