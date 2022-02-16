const header = () => {
  return (
    <div>
      <header class="header__first outer__container">
        <div class="inner__container">
          <ul class="header__first__wrapper">
            <li class="header__first__wrapper__item icon"></li>
            <li class="header__first__wrapper__item">+375 29 100 20 30</li>
            <li class="header__first__wrapper__item icon"></li>
            <li class="header__first__wrapper__item">
              Belarus, Gomel, Lange 17
            </li>
            <li class="header__first__wrapper__item icon"></li>
            <li class="header__first__wrapper__item">All week 24/7</li>
          </ul>
          <ul class="header__socials__wrapper">
            <li class="header__socials__wrapper__item icon"></li>
            <li class="header__socials__wrapper__item icon"></li>
            <li class="header__socials__wrapper__item icon"></li>
            <li class="header__socials__wrapper__item icon"></li>
          </ul>
        </div>
      </header>
      <div class="header__second outer__container">
        <div class="inner__container">
          <h1 class="h1">C</h1>
          <nav class="nav">
            <ul class="header__second__wrapper">
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/about">
                  About Us
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/women">
                  Women
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/men">
                  Men
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/beauty">
                  Beauty
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/accessories">
                  Accessories
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/blog">
                  Blog
                </a>
              </li>
              <li class="header__second__wrapper__item">
                <a class="nav__link" href="/contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <ul class="socials__wrapper">
            <li class="socials__wrapper__item icon"></li>
            <li class="socials__wrapper__item icon"></li>
            <li class="socials__wrapper__item icon"></li>
            <li class="socials__wrapper__item icon"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { header };
