import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div data-test-id="header">
      <header className="header__first outer__container">
        <div className="inner__container">
          <ul className="header__first__wrapper">
            <li className="header__first__wrapper__item icon"></li>
            <li className="header__first__wrapper__item">+375 29 100 20 30</li>
            <li className="header__first__wrapper__item icon"></li>
            <li className="header__first__wrapper__item">
              Belarus, Gomel, Lange 17
            </li>
            <li className="header__first__wrapper__item icon"></li>
            <li className="header__first__wrapper__item">All week 24/7</li>
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
          <nav className="nav" data-test-id="menu">
            <ul className="header__second__wrapper">
              <li className="header__second__wrapper__item">
                <Link
                  key="about-us"
                  to="/about"
                  className="nav__link"
                  data-test-id="menu-link-about"
                >
                  About Us
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="women"
                  to="/women"
                  className="nav__link"
                  data-test-id="menu-link-women"
                >
                  Women
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="men"
                  to="/men"
                  className="nav__link"
                  data-test-id="menu-link-men"
                >
                  Men
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="beauty"
                  to="/beauty"
                  className="nav__link"
                  data-test-id="menu-link-beauty"
                >
                  Beauty
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="accessories"
                  to="/accessories"
                  className="nav__link"
                  data-test-id="menu-link-accessories"
                >
                  Accessories
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="blog"
                  to="/blog"
                  className="nav__link"
                  data-test-id="menu-link-blog"
                >
                  Blog
                </Link>
              </li>
              <li className="header__second__wrapper__item">
                <Link
                  key="contacts"
                  to="/contacts"
                  className="nav__link"
                  data-test-id="menu-link-contacts"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="socials__wrapper">
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
            <li className="socials__wrapper__item icon"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Header };
