import { useRef } from "react";

import { Link } from "react-router-dom";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PRODUCTS } from "../../shared/Products";

import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "swiper/scss";
import "swiper/scss/navigation";

import "./RelatedProducts.scss";

const RelatedProducts = (props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <section className="catalog">
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
                <SwiperSlide className="product__card">
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
