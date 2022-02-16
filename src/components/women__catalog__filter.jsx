const women__catalog__filter = () => {
  return (
    <div>
      <section class="filter">
        <div class="inner__container">
          <ul class="filter__list">
            <li class="filter__list__item">
              <ul class="filter__list__item__sublist">
                <li class="filter__list__item__sublist__item">
                  <button class="button__filter"></button>
                </li>
                <li class="filter__list__item__sublist__item">Filter</li>
              </ul>
            </li>
            <li class="filter__list__item">
              <ul class="filter__list__item__sublist buttons__grid">
                <li class="filter__list__item__sublist__item">
                  <button class="button__filter button__grid__list"></button>
                </li>
                <li class="filter__list__item__sublist__item">
                  <button class="button__filter button__grid__square"></button>
                </li>
              </ul>
            </li>
            <li class="filter__list__item">
              <ul class="filter__list__item__sublist buttons__sorting">
                <li class="filter__list__item__sublist__item">Bestsellers</li>
                <li class="filter__list__item__sublist__item">
                  <button class="button__filter button__sorting"></button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { women__catalog__filter };
