import { Link } from "react-router-dom";

import STAR_FILL from "./assets/img/star__filled.svg";
import STAR_EMPTY from "./assets/img/star.svg";

import "./ProductPageHeader.scss";

const ProductPageHeader = (props) => {
  // Take all necessary props
  const RATING = props.rating;
  const ProductSizes = props.sizes;
  const ProductId = props.id;

  // Check availability
  const STOCK = () => (ProductSizes.length > 0 ? "In Stock" : "Out of Stock");

  // Create rating stars
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
      <section className="catalog__header">
        <div className="inner__container">
          <div className="catalog__header__wrapper">
            <div className="catalog__header__wrapper__item">
              <div className="catalog__header__wrapper__item__subwrapper">
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  <Link
                    className="catalog__header__wrapper__item__subwrapper__item__link"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  <Link
                    className="catalog__header__wrapper__item__subwrapper__item__link"
                    to={`/${props.category}`}
                  >
                    {props.category.charAt(0).toUpperCase() +
                      props.category.slice(1)}
                  </Link>
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  {props.name}
                </div>
              </div>
            </div>
            <div className="catalog__header__wrapper__item">
              <div className="catalog__header__wrapper__item__subwrapper">
                <div className="catalog__header__wrapper__item__subwrapper__item share"></div>
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  Share
                </div>
              </div>
            </div>
          </div>
          <h2 className="catalog__heading__item">{props.name}</h2>
          <div className="catalog__header__wrapper availability">
            <div className="catalog__header__wrapper__item">
              <div className="catalog__header__wrapper__item__subwrapper">
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  <div className="product__card__rating">{ARR_FILL}</div>
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item reviews">
                  {`${props.reviews.length} reviews`}
                </div>
              </div>
            </div>
            <div className="catalog__header__wrapper__item">
              <div className="catalog__header__wrapper__item__subwrapper">
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  SKU:
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item bold">
                  {ProductId.slice(0, 10)}
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  Availability:
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item bold">
                  {STOCK()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductPageHeader };
