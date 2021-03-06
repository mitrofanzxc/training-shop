import { Link } from "react-router-dom";

import { SubscribeSecondary } from "../SubscribeSecondary/SubscribeSecondary";
import { FooterNav } from "../../shared/FooterNav";
import { ContactsListFooter } from "../Contacts/ContactsList";
import { PaymentSystems } from "../PaymentSystems/PaymentSystems";

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
                              className="footer__links__container__list__item__link"
                              to={`/${FooterNavLink.path}`}
                              key={FooterNavLink.key}
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
                  {ContactsListFooter.map((Contact) => {
                    return (
                      <>
                        <div className="footer__links__container__list__item">
                          <div className={Contact.className} />
                          <a
                            href={Contact.link}
                            target={Contact.target}
                            rel={Contact.rel}
                            className="footer__links__container__list__item__link"
                            key={Contact.key}
                          >
                            {Contact.description}
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
            <h3 className="h3">Copyright ?? 2022 all rights reserved</h3>
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
