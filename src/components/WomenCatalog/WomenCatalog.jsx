import { Link } from "react-router-dom";

import { ProductCardDataBaseWomen } from "../../shared/ProductCardDataBaseWomen";
import { Rating } from "../Rating/Rating";

import loading from "./assets/img/loading.gif";
import "./WomenCatalog.scss";

const WomenCatalog = () => {
  return (
    <>
      <section className="catalog">
        <div className="inner__container">
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
          <button className="button__loading">
            <img src={loading} alt="loading" />
          </button>
        </div>
      </section>
    </>
  );
};

export { WomenCatalog };
