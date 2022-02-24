import React from "react";

import { Link } from "react-router-dom";
import { ProductCardDataBaseWomen } from "../../shared/ProductCardDataBaseWomen";

import loading from "./assets/img/loading.gif";
import "./WomenCatalog.scss";

const WomenCatalog = () => {
  return (
    <div>
      <section className="catalog">
        <div className="inner__container">
          <div className="products__container">
            {ProductCardDataBaseWomen.map((ProductCardDataBaseWomenItem) => {
              return (
                <ul className="product__card">
                  <li>
                    <Link
                      to={`/${ProductCardDataBaseWomenItem.productType}/${ProductCardDataBaseWomenItem.id}`}
                      data-test-id={`clothes-card-${ProductCardDataBaseWomenItem.productType}`}
                    >
                      <img
                        src={ProductCardDataBaseWomenItem.img}
                        className={ProductCardDataBaseWomenItem.className}
                        alt={ProductCardDataBaseWomenItem.alt}
                      />
                    </Link>
                  </li>
                  <li className="product__card__title">
                    {ProductCardDataBaseWomenItem.header}
                  </li>
                  <ul className="product__card__price__list">
                    <li className="product__card__price__item">
                      {ProductCardDataBaseWomenItem.price}
                    </li>
                    <ul className="product__card__rating">
                      <li className="product__card__rating__item"></li>
                      <li className="product__card__rating__item"></li>
                      <li className="product__card__rating__item"></li>
                      <li className="product__card__rating__item"></li>
                      <li className="product__card__rating__item"></li>
                    </ul>
                  </ul>
                </ul>
              );
            })}
          </div>
          <button className="button__loading">
            <img src={loading} alt="loading" />
          </button>
        </div>
      </section>
    </div>
  );
};

export { WomenCatalog };
