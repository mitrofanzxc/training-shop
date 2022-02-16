const women__catalog__header = () => {
  return (
    <div>
      <section class="catalog__header">
        <div class="inner__container">
          <ul class="catalog__header__wrapper">
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Home
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Men
                </li>
              </ul>
            </li>
            <li class="catalog__header__wrapper__item">
              <ul class="catalog__header__wrapper__item__subwrapper">
                <li class="catalog__header__wrapper__item__subwrapper__item share"></li>
                <li class="catalog__header__wrapper__item__subwrapper__item">
                  Share
                </li>
              </ul>
            </li>
          </ul>
          <h2 class="catalog__heading">Men</h2>
        </div>
      </section>
    </div>
  );
};

export { women__catalog__header };
