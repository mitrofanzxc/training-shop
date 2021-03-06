import { useState } from "react";

import { Link } from "react-router-dom";

import { ContactsListHeader } from "../Contacts/ContactsList";
import { Socials } from "../Socials/Socials";
import { HeaderNav } from "../../shared/HeaderNav";
import { NavSecondaryList } from "../../shared/SocialsList";

import "./Header.scss";

const Header = () => {
  const [isVisible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <header>
        <div className="header__first">
          <div className="inner__container">
            <div className="header__first__wrapper">
              {ContactsListHeader.map((Contact) => {
                return (
                  <>
                    <div className="header__first__wrapper__item">
                      <div className={Contact.className} />
                      <a
                        href={Contact.link}
                        target={Contact.target}
                        rel={Contact.rel}
                        className="header__first__wrapper__link"
                        key={Contact.key}
                      >
                        {Contact.description}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
            <Socials />
          </div>
        </div>
        <div className="header__second">
          <div className="inner__container">
            <h1 className="h1">
              <Link to="/" className="header__logo" />
            </h1>
            <nav className={isVisible ? "nav visible" : "nav"}>
              <div
                className={
                  isVisible
                    ? "header__second__wrapper visible"
                    : "header__second__wrapper"
                }
              >
                {HeaderNav.map((HeaderNavItem) => {
                  return (
                    <Link
                      onClick={handleToggle}
                      to={`/${HeaderNavItem.path}`}
                      className={
                        isVisible
                          ? "header__second__wrapper__item nav__link visible"
                          : "header__second__wrapper__item nav__link"
                      }
                      key={HeaderNavItem.key}
                    >
                      {HeaderNavItem.header}
                    </Link>
                  );
                })}
              </div>
            </nav>
            <div className="socials__wrapper">
              {NavSecondaryList.map((NavSecondaryListItem) => {
                return (
                  <>
                    <img
                      src={NavSecondaryListItem.src}
                      alt={NavSecondaryListItem.alt}
                      key={NavSecondaryListItem.key}
                    />
                  </>
                );
              })}
              <button
                onClick={handleToggle}
                className={isVisible ? "hamburger visible" : "hamburger"}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
