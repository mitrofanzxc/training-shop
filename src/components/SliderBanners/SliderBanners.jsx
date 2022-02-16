import "./SliderBanners.css";

const SliderBanners = () => {
  return (
    <div>
      <section className="banners">
        <div className="inner__container">
          <div className="banners__container">
            <div className="slider">
              <div className="slider__arrow"></div>
              <div className="slider__title">
                <h3 className="h3">Banner</h3>
                <h2 className="h2">Your title text</h2>
              </div>
              <div className="slider__arrow"></div>
            </div>
            <div className="accessories">
              <div className="slider__title">
                <h2 className="h2">Accessories</h2>
              </div>
            </div>
            <div className="women">
              <div className="slider__title">
                <h2 className="h2">Women</h2>
              </div>
            </div>
            <div className="men">
              <div className="slider__title">
                <h2 className="h2">Men</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SliderBanners };
