const Banners = () => {
  return (
    <div>
      <section className="banners__section">
        <div className="inner__container">
          <ul className="banners__section__container">
            <li className="banners__section__container__item">
              <div className="banners__section__container__item__title">
                <h3 className="h3">New Season</h3>
                <h2 className="h2">Lookbook Collection</h2>
              </div>
            </li>
            <li className="banners__section__container__item">
              <div className="banners__section__container__item__title">
                <h3 className="h3">Sale</h3>
                <h2 className="h2">Get Up To 50% Off</h2>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Banners };
