import { Link } from "react-router-dom";

import { ProductCardDataBaseWomen } from "../../shared/ProductCardDataBaseWomen";
import { Rating } from "../Rating/Rating";

import "./WomensMain.scss";

const WomensMain = () => {
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Women's</h2>
            <div className="catalog__filter">
              <div className="catalog__filter__item">New Arrivals</div>
              <div className="catalog__filter__item">Specials</div>
              <div className="catalog__filter__item">Bestsellers</div>
              <div className="catalog__filter__item">Most Viewed</div>
              <div className="catalog__filter__item">Feautured Products</div>
            </div>
          </div>
          <div className="products__container">
            {ProductCardDataBaseWomen.map((ProductCardDataBaseWomenItem) => {
              return (
                <div className="product__card">
                  <div>
                    <Link
                      to={`/${ProductCardDataBaseWomenItem.productType}/${ProductCardDataBaseWomenItem.id}`}
                    >
                      <img
                        src={ProductCardDataBaseWomenItem.img}
                        className={ProductCardDataBaseWomenItem.className}
                        alt={ProductCardDataBaseWomenItem.alt}
                      />
                    </Link>
                  </div>
                  <div className="product__card__title">
                    {ProductCardDataBaseWomenItem.header}
                  </div>
                  <div className="product__card__price__list">
                    <div className="product__card__price__item">
                      {ProductCardDataBaseWomenItem.price}
                    </div>
                    <Rating />
                  </div>
                </div>
              );
            })}
          </div>
          <button className="button__all">
            <Link to="/women" className="button__all__link">
              See All
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export { WomensMain };
