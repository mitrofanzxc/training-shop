import React from "react";

import { Link } from "react-router-dom";
import { ProductCardDataBaseMen } from "../../shared/ProductCardDataBaseMen";

import loading from "./assets/img/loading.gif";
import "./MenCatalog.scss";

const MenCatalog = () => {
  return (
    <div>
      <section className="catalog">
        <div className="inner__container">
          <div className="products__container">
            {ProductCardDataBaseMen.map((ProductCardDataBaseMenItem) => {
              return (
                <ul className="product__card">
                  <li>
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
                  </li>
                  <li className="product__card__title">
                    {ProductCardDataBaseMenItem.header}
                  </li>
                  <ul className="product__card__price__list">
                    <li className="product__card__price__item">
                      {ProductCardDataBaseMenItem.price}
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

export { MenCatalog };
