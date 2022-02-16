const ProductCard = () => {
  return (
    <div>
      <section class="product__card">
        <div class="inner__container">
          <ul class="side__container">
            <li class="side__left">
              <ul class="side__left__columns">
                <li class="side__left__columns__item">
                  <ul class="buttons__arrow__container">
                    <li>
                      <button class="button__arrow arrow__up"></button>
                    </li>
                    <li>
                      <button class="button__arrow arrow__down"></button>
                    </li>
                  </ul>
                  <ul class="product__card__slider__vertical">
                    <li class="product__card__slider__vertical__item"></li>
                    <li class="product__card__slider__vertical__item"></li>
                    <li class="product__card__slider__vertical__item"></li>
                    <li class="product__card__slider__vertical__item"></li>
                  </ul>
                </li>
                <li class="side__left__columns__item">
                  <div class="product__card__main">
                    <div class="product__card__main__slider">
                      <button class="button__arrow arrow__left"></button>
                      <button class="button__arrow arrow__right"></button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="side__right">
              <div class="color__text">
                <h4 class="h4">Color:</h4>
                <p class="paragraph">Blue</p>
              </div>
              <ul class="color__img">
                <li class="color__img__item"></li>
                <li class="color__img__item"></li>
                <li class="color__img__item"></li>
                <li class="color__img__item"></li>
              </ul>
              <div class="size__text">
                <h4 class="h4">Size:</h4>
                <p class="paragraph">S</p>
              </div>
              <ul class="size__img">
                <li class="size__img__item">XS</li>
                <li class="size__img__item">S</li>
                <li class="size__img__item">M</li>
                <li class="size__img__item">L</li>
              </ul>
              <ul class="size__guide">
                <li class="size__guide__item"></li>
                <li class="size__guide__item">Size guide</li>
              </ul>
              <ul class="product__price__and__buttons">
                <li class="product__price__and__buttons__item">
                  <h2 class="h2 price">$ 379.99</h2>
                </li>
                <li class="product__price__and__buttons__item">
                  <button class="button__cart">Add To Cart</button>
                </li>
                <li class="product__price__and__buttons__item">
                  <button class="button__wishlist"></button>
                </li>
                <li class="product__price__and__buttons__item">
                  <button class="button__scale"></button>
                </li>
              </ul>
              <ul class="benefits__wrapper">
                <li class="benefits__item"></li>
                <ul class="benefits__text">
                  <h3 class="h3 benefits__text">Shipping & Delivery</h3>
                </ul>
                <li class="benefits__item"></li>
                <ul class="benefits__text">
                  <h3 class="h3 benefits__text">Returns & Exchanges</h3>
                </ul>
                <li class="benefits__item"></li>
                <ul class="benefits__text">
                  <h3 class="h3 benefits__text">Ask a question</h3>
                </ul>
              </ul>
              <ul class="guaranteed">
                <li class="guaranteed__text">Guaranteed Safe Checkout</li>
                <li class="guaranteed__line"></li>
              </ul>
              <ul class="footer__wrapper">
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
                <li class="footer__wrapper__item"></li>
              </ul>
              <div class="product__description">Description</div>
              <ul class="additional__information__list">
                <li class="additional__information__list__header">
                  Additional Information
                </li>
                <li class="additional__information__list__property">
                  Color:
                  <span class="additional__information__list__value">
                    Blue, White, Black, Grey
                  </span>
                </li>
                <li class="additional__information__list__property">
                  Size:
                  <span class="additional__information__list__value">
                    XS, S, M, L
                  </span>
                </li>
                <li class="additional__information__list__property">
                  Material:
                  <span class="additional__information__list__value">
                    100% Polyester
                  </span>
                </li>
              </ul>
              <ul class="reviews__list">
                <li class="reviews__list__header">Reviews</li>
                <li class="reviews__list__item">
                  <ul class="reviews__list__item__sublist">
                    <li class="reviews__list__item__sublist__item">
                      <ul class="reviews__list__item__sublist__item__sublist">
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          <ul class="product__card__rating">
                            <li class="product__card__rating__item__main"></li>
                            <li class="product__card__rating__item__main"></li>
                            <li class="product__card__rating__item__main"></li>
                            <li class="product__card__rating__item__main"></li>
                            <li class="product__card__rating__item__main"></li>
                          </ul>
                        </li>
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          2 Reviews
                        </li>
                      </ul>
                    </li>
                    <li class="reviews__list__item__sublist__item">
                      <ul class="reviews__list__item__sublist__item__sublist">
                        <li class="reviews__list__item__sublist__item__sublist__item message"></li>
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          Write a review
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="reviews__list__item">
                  <ul class="reviews__list__item__sublist">
                    <li class="reviews__list__item__sublist__item name">
                      Oleh Chabanov
                    </li>
                    <li class="reviews__list__item__sublist__item">
                      <ul class="reviews__list__item__sublist__item__sublist">
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </li>
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          <ul class="product__card__rating">
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="reviews__list__item review">
                  On the other hand, we denounce with righteous indignation and
                  like men who are so beguiled and demoralized by the charms of
                  pleasure of the moment
                </li>
                <li class="reviews__list__item">
                  <ul class="reviews__list__item__sublist">
                    <li class="reviews__list__item__sublist__item name">
                      ShAmAn design
                    </li>
                    <li class="reviews__list__item__sublist__item">
                      <ul class="reviews__list__item__sublist__item__sublist">
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          3 month ago
                        </li>
                        <li class="reviews__list__item__sublist__item__sublist__item">
                          <ul class="product__card__rating">
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                            <li class="product__card__rating__item"></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="reviews__list__item review">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { ProductCard };
