import { SocialsList } from "../../shared/SocialsList";

import "./Socials.scss";

const Socials = () => {
  return (
    <>
      <div className="socials__wrapper">
        {SocialsList.map((SocialsListLi) => {
          return (
            <a
              href={SocialsListLi.link}
              target={SocialsListLi.target}
              rel={SocialsListLi.rel}
              className={SocialsListLi.className}
            >
              <img src={SocialsListLi.src} alt={SocialsListLi.alt} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export { Socials };
