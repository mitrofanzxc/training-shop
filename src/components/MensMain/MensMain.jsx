import { Link } from "react-router-dom";

import { ProductCardDataBaseMen } from "../../shared/ProductCardDataBaseMen";
import { Rating } from "../Rating/Rating";

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
            {ProductCardDataBaseMen.map((ProductCardDataBaseMenItem) => {
              return (
                <div className="product__card">
                  <div>
                    <Link
                      to={`/${ProductCardDataBaseMenItem.productType}/${ProductCardDataBaseMenItem.id}`}
                      data-test-id={`clothes-card-${ProductCardDataBaseMenItem.productType}`}
                    >
                      <img
                        src={ProductCardDataBaseMenItem.img}
                        className={ProductCardDataBaseMenItem.className}
                        alt={ProductCardDataBaseMenItem.alt}
                      />
                    </Link>
                  </div>
                  <div className="product__card__title">
                    {ProductCardDataBaseMenItem.header}
                  </div>
                  <div className="product__card__price__list">
                    <div className="product__card__price__item">
                      {ProductCardDataBaseMenItem.price}
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
