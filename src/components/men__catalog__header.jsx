const men__catalog__header = () => {
  return (
    <div>
      <section className="catalog__header">
        <div className="inner__container">
          <ul className="catalog__header__wrapper">
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Home
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Men
                </li>
              </ul>
            </li>
            <li className="catalog__header__wrapper__item">
              <ul className="catalog__header__wrapper__item__subwrapper">
                <li className="catalog__header__wrapper__item__subwrapper__item share"></li>
                <li className="catalog__header__wrapper__item__subwrapper__item">
                  Share
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="catalog__heading">Men</h2>
        </div>
      </section>
    </div>
  );
};

export { men__catalog__header };
