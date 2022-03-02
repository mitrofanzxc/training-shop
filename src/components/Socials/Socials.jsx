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
            >
              <img
                src={SocialsUlLi.src}
                alt={SocialsUlLi.alt}
                className={SocialsUlLi.className}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export { Socials };
