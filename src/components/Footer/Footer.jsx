import { Link } from "react-router-dom";
import { SubscribeSecondary } from "../SubscribeSecondary/SubscribeSecondary";
import { FooterNav1 } from "../../shared/FooterNav";
import { FooterNav2 } from "../../shared/FooterNav";
import { FooterNav3 } from "../../shared/FooterNav";
import { PaymentSystems } from "../PaymentSystems/PaymentSystems";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <SubscribeSecondary />
      <section className="footer__links">
        <div className="inner__container">
          <ul className="footer__links__container">
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__header">
                  Categories
                </li>
                {FooterNav1.map((FooterNav1Link) => {
                  return (
                    <li className="footer__links__container__list__item">
                      <Link
                        key={FooterNav1Link.id}
                        className={FooterNav1Link.className}
                        to={`/${FooterNav1Link.path}`}
                        data-test-id={`footer-nav-link-${FooterNav1Link.path}`}
                      >
                        {FooterNav1Link.description}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__header">
                  Infomation
                </li>
                {FooterNav2.map((FooterNav2Link) => {
                  return (
                    <li className="footer__links__container__list__item">
                      <Link
                        key={FooterNav2Link.id}
                        className={FooterNav2Link.className}
                        to={`/${FooterNav2Link.path}`}
                        data-test-id={`footer-nav-link-${FooterNav2Link.path}`}
                      >
                        {FooterNav2Link.description}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__header">
                  Useful links
                </li>
                {FooterNav3.map((FooterNav3Link) => {
                  return (
                    <li className="footer__links__container__list__item">
                      <Link
                        key={FooterNav3Link.id}
                        className={FooterNav3Link.className}
                        to={`/${FooterNav3Link.path}`}
                        data-test-id={`footer-nav-link-${FooterNav3Link.path}`}
                      >
                        {FooterNav3Link.description}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="footer__links__container__item">
              <ul className="footer__links__container__list">
                <li className="footer__links__container__list__header">
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
          <PaymentSystems />
          <h3 className="h3">
            <a
              href="https://clevertec.ru/study/study.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clevertec.ru/training
            </a>
          </h3>
        </div>
      </footer>
    </>
  );
};

export { Footer };
