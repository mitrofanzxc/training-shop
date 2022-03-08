import "./CatalogHeader.scss";

const CatalogHeader = (props) => {
  return (
    <>
      <section className="catalog__header">
        <div className="inner__container">
          <div className="catalog__header__wrapper">
            <div className="catalog__header__wrapper__item">
              <div className="catalog__header__wrapper__item__subwrapper">
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  Home
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item arrow">
                  ►
                </div>
                <div className="catalog__header__wrapper__item__subwrapper__item">
                  {`${
                    props.category.charAt(0).toUpperCase() +
                    props.category.slice(1)
                  }`}
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
          <h2 className="catalog__heading">{`${props.category}`}</h2>
        </div>
      </section>
    </>
  );
};

export { CatalogHeader };
