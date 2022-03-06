import "./MenCatalogFilter.scss";

const MenCatalogFilter = () => {
  return (
    <>
      <section className="filter">
        <div className="inner__container">
          <ul className="filter__list">
            <li className="filter__list__item">
              <ul className="filter__list__item__sublist">
                <li className="filter__list__item__sublist__item">
                  <button className="button__filter"></button>
                </li>
                <li className="filter__list__item__sublist__item">Filter</li>
              </ul>
            </li>
            <li className="filter__list__item">
              <ul className="filter__list__item__sublist buttons__grid">
                <li className="filter__list__item__sublist__item">
                  <button className="button__filter button__grid__list"></button>
                </li>
                <li className="filter__list__item__sublist__item">
                  <button className="button__filter button__grid__square"></button>
                </li>
              </ul>
            </li>
            <li className="filter__list__item">
              <ul className="filter__list__item__sublist buttons__sorting">
                <li className="filter__list__item__sublist__item">
                  Bestsellers
                </li>
                <li className="filter__list__item__sublist__item">
                  <button className="button__filter button__sorting"></button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export { MenCatalogFilter };
