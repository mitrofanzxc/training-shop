import { Link } from "react-router-dom";

import { PRODUCTS } from "../../shared/Products";
import { Rating } from "../Rating/Rating";

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
                    <Rating />
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
