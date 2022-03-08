import { Link } from "react-router-dom";

import { SubscribeSecondary } from "../SubscribeSecondary/SubscribeSecondary";
import { FooterNav } from "../../shared/FooterNav";
import { PaymentSystems } from "../PaymentSystems/PaymentSystems";
import { ContactsListFooter } from "../Contacts/ContactsList";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <SubscribeSecondary />
        <section className="footer__links">
          <div className="inner__container">
            <div className="footer__links__container">
              {FooterNav.map((FooterNavLinks) => {
                return (
                  <div className="footer__links__container__item">
                    <div className="footer__links__container__list">
                      <div className="footer__links__container__list__header">
                        {FooterNavLinks.header}
                      </div>
                      {FooterNavLinks.links.map((FooterNavLink) => {
                        return (
                          <div className="footer__links__container__list__item">
                            <Link
                              key={FooterNavLink.id}
                              className="footer__links__container__list__item__link"
                              to={`/${FooterNavLink.path}`}
                            >
                              {FooterNavLink.description}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div className="footer__links__container__item">
                <div className="footer__links__container__list">
                  <div className="footer__links__container__list__header">
                    Contact Us
                  </div>
                  {ContactsListFooter.map((ContactsListFooterItem) => {
                    return (
                      <>
                        <div className="footer__links__container__list__item">
                          <img
                            src={ContactsListFooterItem.src}
                            alt={ContactsListFooterItem.alt}
                            className="footer__links__container__list__item__link"
                          />
                          <a
                            href={ContactsListFooterItem.link}
                            target={ContactsListFooterItem.target}
                            rel={ContactsListFooterItem.rel}
                            className="footer__links__container__list__item__link"
                          >
                            {ContactsListFooterItem.description}
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
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
        </div>
      </footer>
    </>
  );
};

export { Footer };
