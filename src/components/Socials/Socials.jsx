import { SocialsUl } from "../../shared/SocialsUl";

import "./Socials.scss";

const Socials = () => {
  return (
    <>
      <div className="socials__wrapper">
        {SocialsUl.map((SocialsUlLi) => {
          return (
            <a
              href={SocialsUlLi.link}
              target={SocialsUlLi.target}
              rel={SocialsUlLi.rel}
              className={SocialsUlLi.className}
            >
              <img src={SocialsUlLi.src} alt={SocialsUlLi.alt} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export { Socials };
