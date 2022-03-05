import { useRef } from "react";

import { Link } from "react-router-dom";
import { RelatedProductsDataBase } from "../../shared/RelatedProductsDataBase";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import "./RelatedProducts.scss";

const RelatedProducts = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <section className="catalog" data-test-id="related-slider">
        <div className="inner__container">
          <div className="catalog__header">
            <h2 className="h2">Related Products</h2>
            <div className="catalog__filter">
              <div
                className="button__arrow arrow__left"
                ref={navigationPrevRef}
              />
              <div
                className="button__arrow arrow__right"
                ref={navigationNextRef}
              />
            </div>
          </div>
          <Swiper
            className="products__container related__products"
            data-test-id="related-slider"
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              1200: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
              992: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              1: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {RelatedProductsDataBase.map((RelatedProductsDataBaseItem) => {
              return (
                <SwiperSlide>
                  <ul className="product__card related__product__card">
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
          </Swiper>
        </div>
      </section>
    </>
  );
};

export { RelatedProducts };
