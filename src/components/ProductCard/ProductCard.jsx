import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PaymentSystems } from "../PaymentSystems/PaymentSystems";

import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import "./ProductCard.scss";

const ProductCard = (props) => {
  const { id } = useParams();
  const ProductCategory = props.category;
  const ProductImages = props.images;
  const ProductSizes = props.sizes;
  const ProductPrice = props.price;
  const ProductUniqueColors = [
    ...new Set(ProductImages.map((ProductImage) => ProductImage.color)),
  ];
  const ProductMaterial = props.material;
  const ProductReviews = props.reviews;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const RATING = props.rating;
  const RATING_STARS_FILL = (
    <img
      src={STAR_FILL}
      alt="star"
      className="product__card__rating__item"
      style={{ width: "1.25rem" }}
    />
  );
  const RATING_STARS_EMPTY = (
    <img
      src={STAR_EMPTY}
      alt="star"
      className="product__card__rating__item"
      style={{ width: "1.25rem" }}
    />
  );
  const ARR_FILL = Array(5)
    .fill(RATING_STARS_EMPTY)
    .fill(RATING_STARS_FILL, 0, RATING);
  return (
    <>
      <section className="product__card">
        <div className="inner__container">
          <div className="side__container">
            <div className="side__left">
              <div className="side__left__columns">
                <Swiper
                  className="side__left__columns__item vertical__left"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={30}
                  slidesPerView={4}
                  watchSlidesProgress={true}
                  direction={"vertical"}
                  modules={[Navigation, Thumbs]}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  <div className="buttons__arrow__container">
                    <div
                      className="button__arrow arrow__up"
                      ref={navigationPrevRef}
                    />
                    <div
                      className="button__arrow arrow__down"
                      ref={navigationNextRef}
                    />
                  </div>
                  <div className="product__card__slider__vertical">
                    {ProductImages.map((ProductImage) => {
                      return (
                        <SwiperSlide>
                          <img
                            src={`https://training.cleverland.by/shop${ProductImage.url}`}
                            alt="product__card__slider__vertical__item__img"
                            key={ProductImage.id}
                            className="product__card__slider__vertical__item__img"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
                <Swiper
                  className="side__left__columns__item vertical__right"
                  spaceBetween={0}
                  slidesPerView={1}
                  direction={"horizontal"}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs]}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  <div className="product__card__main">
                    {ProductImages.map((ProductImage) => {
                      return (
                        <SwiperSlide>
                          <img
                            src={`https://training.cleverland.by/shop${ProductImage.url}`}
                            alt="product__card__main__img"
                            key={ProductImage.id}
                            className="product__card__main__img"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </div>
                  <div className="product__card__main__slider">
                    <div
                      className="button__arrow arrow__left"
                      ref={navigationPrevRef}
                    />
                    <div
                      className="button__arrow arrow__right"
                      ref={navigationNextRef}
                    />
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="side__right">
              <div className="color__text">
                <h4 className="h4">Color:</h4>
                <p className="paragraph">{ProductUniqueColors[0]}</p>
              </div>
              <div className="color__img">
                {ProductImages.map((ProductImage) => {
                  return (
                    <Link to={`/${ProductCategory}/${id}`}>
                      <div className="color__img__item">
                        <img
                          src={`https://training.cleverland.by/shop${ProductImage.url}`}
                          alt={ProductImage.color}
                          className="color__img__item__img"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="size__text">
                <h4 className="h4">Size:</h4>
                <p className="paragraph">{ProductSizes[0]}</p>
              </div>
              <div className="size__img">
                {ProductSizes.map((ProductSize) => {
                  return <div className="size__img__item">{ProductSize}</div>;
                })}
              </div>
              <div className="size__guide">
                <div className="size__guide__item"></div>
                <div className="size__guide__item">Size guide</div>
              </div>
              <div className="product__price__and__buttons">
                <div className="product__price__and__buttons__item">
                  <h2 className="h2 price">{`$ ${ProductPrice.toFixed(2)}`}</h2>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__cart">Add To Cart</button>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__wishlist"></button>
                </div>
                <div className="product__price__and__buttons__item">
                  <button className="button__scale"></button>
                </div>
              </div>
              <div className="benefits__wrapper">
                <div className="benefits__subwrapper">
                  <div className="benefits__item delivery"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Shipping &amp; Delivery
                    </h3>
                  </div>
                </div>
                <div className="benefits__subwrapper">
                  <div className="benefits__item refresh"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">
                      Returns &amp; Exchanges
                    </h3>
                  </div>
                </div>
                <div className="benefits__subwrapper">
                  <div className="benefits__item mail"></div>
                  <div className="benefits__text">
                    <h3 className="h3 benefits__text">Ask a question</h3>
                  </div>
                </div>
              </div>
              <div className="guaranteed">
                <div className="guaranteed__text">Guaranteed Safe Checkout</div>
                <div className="guaranteed__line"></div>
              </div>
              <PaymentSystems />
              <div className="product__description">Description</div>
              <div className="additional__information__list">
                <div className="additional__information__list__header">
                  Additional Information
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Color:</h4>
                  {ProductUniqueColors.map((ProductUniqueColor) => {
                    return (
                      <p className="paragraph">{`${ProductUniqueColor},`}</p>
                    );
                  })}
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Size:</h4>
                  {ProductSizes.map((ProductSize) => {
                    return <p className="paragraph">{`${ProductSize},`}</p>;
                  })}
                </div>
                <div className="additional__information__list__property additional__text">
                  <h4 className="h4">Material:</h4>
                  <p className="paragraph">{ProductMaterial}</p>
                </div>
              </div>
              <div className="reviews__list">
                <div className="reviews__list__header">Reviews</div>
                <div className="reviews__list__item">
                  <div className="reviews__list__item__sublist">
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          {ARR_FILL}
                        </div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          {`${ProductReviews.length} reviews`}
                        </div>
                      </div>
                    </div>
                    <div className="reviews__list__item__sublist__item">
                      <div className="reviews__list__item__sublist__item__sublist">
                        <div className="reviews__list__item__sublist__item__sublist__item message"></div>
                        <div className="reviews__list__item__sublist__item__sublist__item">
                          Write a review
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {ProductReviews.map((ProductReview) => {
                  const RATING = ProductReview.rating;
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
                    <>
                      <div
                        key={ProductReview.id}
                        className="reviews__list__item"
                      >
                        <div className="reviews__list__item__sublist">
                          <div className="reviews__list__item__sublist__item name">
                            {ProductReview.name}
                          </div>
                          <div className="reviews__list__item__sublist__item">
                            <div className="reviews__list__item__sublist__item__sublist">
                              <div className="reviews__list__item__sublist__item__sublist__item">
                                {ARR_FILL}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews__list__item review">
                        {ProductReview.text}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductCard };
