import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer__links">
        <div className="inner__container">
          <ul className="footer__links__container">
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__item">
                  Categories
                </li>
                <li className="footer__links__container__list__item">Men</li>
                <li className="footer__links__container__list__item">Women</li>
                <li className="footer__links__container__list__item">
                  Accessories
                </li>
                <li className="footer__links__container__list__item">Beauty</li>
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__item">
                  Infomation
                </li>
                <li className="footer__links__container__list__item">
                  About Us
                </li>
                <li className="footer__links__container__list__item">
                  Contact Us
                </li>
                <li className="footer__links__container__list__item">Blog</li>
                <li className="footer__links__container__list__item">FAQs</li>
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__item">
                  Useful links
                </li>
                <li className="footer__links__container__list__item">
                  Terms &amp; Conditions
                </li>
                <li className="footer__links__container__list__item">
                  Returns &amp; Exchanges
                </li>
                <li className="footer__links__container__list__item">
                  Shipping &amp; Delivery
                </li>
                <li className="footer__links__container__list__item">
                  Privacy Policy
                </li>
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__item">
                  Contact Us
                </li>
                <li className="footer__links__container__list__item">
                  <span className="icon location"></span>Belarus, Gomel, Lange
                  17
                </li>
                <li className="footer__links__container__list__item">
                  <span className="icon phone"></span>+375 29 100 20 30
                </li>
                <li className="footer__links__container__list__item">
                  <span className="icon clock"></span>All week 24/7
                </li>
                <li className="footer__links__container__list__item">
                  <span className="icon mail"></span>info@clevertec.ru
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer outer__container">
        <div className="inner__container">
          <h3 className="h3">Copyright © 2022 all rights reserved</h3>
          <ul className="footer__wrapper">
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
            <li className="footer__wrapper__item"></li>
          </ul>
          <h3 className="h3">
            <a
              href="https://clevertec.ru/training"
              target="_blank"
              rel="noreferrer"
            >
              Clevertec.ru/training
            </a>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
