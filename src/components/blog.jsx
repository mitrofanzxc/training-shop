const blog = () => {
  return (
    <div>
      <section class="blog">
        <div class="inner__container">
          <div class="blog__header">
            <h2 class="h2">Latest From Blog</h2>
            <button class="button__all">See All</button>
          </div>
          <ul class="blog__slider">
            <li class="blog__slider__item">
              <div class="blog__slider__item__title">
                <h3 class="h3">The Easiest Way to Break</h3>
                <div class="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
            <li class="blog__slider__item">
              <div class="blog__slider__item__title">
                <h3 class="h3">Wedding Season</h3>
                <div class="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
            <li class="blog__slider__item">
              <div class="blog__slider__item__title">
                <h3 class="h3">Recent Favorites On Repeat</h3>
                <div class="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { blog };
