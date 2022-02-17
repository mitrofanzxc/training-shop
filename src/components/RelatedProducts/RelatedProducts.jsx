import RelatedProducts1 from "./assets/img/related__products__1.jpg";
import RelatedProducts2 from "./assets/img/related__products__2.jpg";
import RelatedProducts3 from "./assets/img/related__products__3.jpg";
import RelatedProducts4 from "./assets/img/related__products__4.jpg";

const RelatedProducts = () => {
  return (
    <div>
      <section class="catalog">
        <div class="inner__container">
          <div class="catalog__header">
            <h2 class="h2">Related Products</h2>
            <div class="catalog__filter">
              <button class="button__arrow arrow__left"></button>
              <button class="button__arrow arrow__right"></button>
            </div>
          </div>
          <div class="products__container related__products">
            <ul class="product__card">
              <li>
                <img
                  src={RelatedProducts1}
                  class="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li class="product__card__title">Women's tracksuit Q109</li>
              <ul class="product__card__price__list">
                <li class="product__card__price__item">$ 30.00</li>
                <ul class="product__card__rating">
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul class="product__card">
              <li>
                <img
                  src={RelatedProducts2}
                  class="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li class="product__card__title">Women's tracksuit Q109</li>
              <ul class="product__card__price__list">
                <li class="product__card__price__item">$ 30.00</li>
                <ul class="product__card__rating">
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul class="product__card">
              <li>
                <img
                  src={RelatedProducts3}
                  class="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li class="product__card__title">Women's tracksuit Q109</li>
              <ul class="product__card__price__list">
                <li class="product__card__price__item">$ 30.00</li>
                <ul class="product__card__rating">
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
            <ul class="product__card">
              <li>
                <img
                  src={RelatedProducts4}
                  class="product__card__image"
                  alt="product__card__women"
                />
              </li>
              <li class="product__card__title">Women's tracksuit Q109</li>
              <ul class="product__card__price__list">
                <li class="product__card__price__item">$ 30.00</li>
                <ul class="product__card__rating">
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                  <li class="product__card__rating__item"></li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export { RelatedProducts };
