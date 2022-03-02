import { Link } from "react-router-dom";

import NewSeasonImg from "./assets/img/section__newseason.jpg";
import SaleImg from "./assets/img/section__sale.jpg";
import "./Banners.scss";

const Banners = () => {
  return (
    <>
      <section className="banners__section">
        <div className="inner__container">
          <ul className="banners__section__container">
            <li className="banners__section__container__item">
              <img
                className="banner__img"
                src={NewSeasonImg}
                alt="New Season Img"
              />
              <button className="banners__section__container__item__title">
                <Link to="/women">
                  <h3 className="h3">New Season</h3>
                  <h2 className="h2">Lookbook Collection</h2>
                </Link>
              </button>
            </li>
            <li className="banners__section__container__item">
              <img className="banner__img" src={SaleImg} alt="Sale Img" />
              <button className="banners__section__container__item__title">
                <Link to="/sale">
                  <h3 className="h3">Sale</h3>
                  <h2 className="h2">
                    Get Up To <span className="sale">50% Off</span>
                  </h2>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export { Banners };
