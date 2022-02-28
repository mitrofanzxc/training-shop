import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HeaderNav } from "../../shared/HeaderNav";
import "./Header.scss";

const Header = () => {
  const [isVisible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div data-test-id="header">
      <header className="header__first outer__container">
        <div className="inner__container">
          <ul className="header__first__wrapper">
            <div className="header__first__wrapper__div">
              <li className="header__first__wrapper__item icon phone"></li>
              <li className="header__first__wrapper__item">
                +375 29 100 20 30
              </li>
            </div>
            <div className="header__first__wrapper__div">
              <li className="header__first__wrapper__item icon location"></li>
              <li className="header__first__wrapper__item">
                Belarus, Gomel, Lange 17
              </li>
            </div>
            <div className="header__first__wrapper__div">
              <li className="header__first__wrapper__item icon clock"></li>
              <li className="header__first__wrapper__item">All week 24/7</li>
            </div>
          </ul>
          <ul className="header__socials__wrapper">
            <li className="header__socials__wrapper__item icon"></li>
            <li className="header__socials__wrapper__item icon"></li>
            <li className="header__socials__wrapper__item icon"></li>
            <li className="header__socials__wrapper__item icon"></li>
          </ul>
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
    </div>
  );
};

export { Header };
