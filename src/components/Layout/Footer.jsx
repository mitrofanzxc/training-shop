import { Link } from "react-router-dom";
import { SubscribeSecondary } from "../SubscribeSecondary/SubscribeSecondary";
import { FooterNav1 } from "../../shared/FooterNav";
import { FooterNav2 } from "../../shared/FooterNav";
import { FooterNav3 } from "../../shared/FooterNav";
import { PaymentSystems } from "../PaymentSystems/PaymentSystems";
import { ContactsListFooter } from "../../shared/ContactsList";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <SubscribeSecondary />
      <section className="footer__links">
        <div className="inner__container">
          <div className="footer__links__container">
            <div className="footer__links__container__item">
              <div className="footer__links__container__list">
                <div className="footer__links__container__list__header">
                  Categories
                </div>
                {FooterNav1.map((FooterNav1Link) => {
                  return (
                    <div className="footer__links__container__list__item">
                      <Link
                        key={FooterNav1Link.id}
                        className={FooterNav1Link.className}
                        to={`/${FooterNav1Link.path}`}
                      >
                        {FooterNav1Link.description}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="footer__links__container__item">
              <div className="footer__links__container__list">
                <div className="footer__links__container__list__header">
                  Infomation
                </div>
                {FooterNav2.map((FooterNav2Link) => {
                  return (
                    <div className="footer__links__container__list__item">
                      <Link
                        key={FooterNav2Link.id}
                        className={FooterNav2Link.className}
                        to={`/${FooterNav2Link.path}`}
                      >
                        {FooterNav2Link.description}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="footer__links__container__item">
              <div className="footer__links__container__list">
                <div className="footer__links__container__list__header">
                  Useful links
                </div>
                {FooterNav3.map((FooterNav3Link) => {
                  return (
                    <div className="footer__links__container__list__item">
                      <Link
                        key={FooterNav3Link.id}
                        className={FooterNav3Link.className}
                        to={`/${FooterNav3Link.path}`}
                      >
                        {FooterNav3Link.description}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="footer__links__container__item">
              <div className="footer__links__container__list">
                <div className="footer__links__container__list__header">
                  Contact Us
                </div>
                {ContactsListFooter.map((ContactsListFooterItem) => {
                  return (
                    <>
                      <img
                        src={ContactsListFooterItem.src}
                        alt={ContactsListFooterItem.alt}
                        className="header__first__wrapper__img"
                      />
                      <a
                        href={ContactsListFooterItem.link}
                        target={ContactsListFooterItem.target}
                        rel={ContactsListFooterItem.rel}
                        className="header__first__wrapper__link"
                      >
                        {ContactsListFooterItem.description}
                      </a>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
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
