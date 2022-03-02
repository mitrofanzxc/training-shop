import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HeaderNav } from "../../shared/HeaderNav";
import { Contacts } from "../Contacts/Contacts";
import { Socials } from "../Socials/Socials";

import "./Header.scss";

const Header = () => {
  const [isVisible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <header className="header__first outer__container">
        <div className="inner__container">
          <div className="header__first__wrapper">
            <Contacts />
          </div>
          <Socials />
        </div>
      </header>
      <div className="header__second outer__container">
        <div className="inner__container">
          <h1 className="h1">
            <Link
              to="/"
              className="header-nav-logo"
              data-test-id="header-logo-link"
            />
          </h1>
          <nav
            className={isVisible ? "nav visible" : "nav"}
            data-test-id="menu"
          >
            <ul
              className={
                isVisible
                  ? "header__second__wrapper visible"
                  : "header__second__wrapper"
              }
            >
              {HeaderNav.map((HeaderNavItem) => {
                return (
                  <li
                    className={
                      isVisible
                        ? "header__second__wrapper__item visible"
                        : "header__second__wrapper__item"
                    }
                  >
                    <Link
                      onClick={handleToggle}
                      key={HeaderNavItem.id}
                      to={`/${HeaderNavItem.path}`}
                      className="nav__link"
                      data-test-id={`menu-link-${HeaderNavItem.path}`}
                    >
                      {HeaderNavItem.header}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className="socials__wrapper">
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
            <button
              onClick={handleToggle}
              className={isVisible ? "hamburger visible" : "hamburger"}
              data-test-id="burger-menu-btn"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Header };
