import React from "react";

import { Link } from "react-router-dom";
import { RelatedProductsDataBase } from "../../shared/RelatedProductsDataBase";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "./RelatedProducts.scss";

const RelatedProducts = () => {
  return (
    <div>
      <section className="catalog" data-test-id="related-slider">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Related Products</h2>
            <div className="catalog__filter">
              <button className="button__arrow arrow__left"></button>
              <button className="button__arrow arrow__right"></button>
            </div>
          </div>
          <Swiper
            data-test-id="related-slider"
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="products__container related__products">
              {RelatedProductsDataBase.map((RelatedProductsDataBaseItem) => {
                return (
                  <SwiperSlide>
                    <ul className="product__card">
                      <li>
                        <Link
                          to={`/${RelatedProductsDataBaseItem.productType}/${RelatedProductsDataBaseItem.id}`}
                          data-test-id={`clothes-card-${RelatedProductsDataBaseItem.productType}`}
                        >
                          <img
                            src={RelatedProductsDataBaseItem.img}
                            className={RelatedProductsDataBaseItem.className}
                            alt={RelatedProductsDataBaseItem.alt}
                          />
                        </Link>
                      </li>
                      <li className="product__card__title">
                        {RelatedProductsDataBaseItem.header}
                      </li>
                      <ul className="product__card__price__list">
                        <li className="product__card__price__item">
                          {RelatedProductsDataBaseItem.price}
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
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export { RelatedProducts };
