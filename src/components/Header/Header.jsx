import "./Header.css";

const Header = () => {
  return (
    <div>
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
          <a href="/">
            <h1 className="h1">Clevertec</h1>
          </a>
          <nav className="nav">
            <ul className="header__second__wrapper">
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/about">
                  About Us
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/women">
                  Women
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/men">
                  Men
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/beauty">
                  Beauty
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/accessories">
                  Accessories
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="header__second__wrapper__item">
                <a className="nav__link" href="/contacts">
                  Contacts
                </a>
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
