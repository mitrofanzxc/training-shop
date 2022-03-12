import { SocialsList } from "../../shared/SocialsList";

import "./Socials.scss";

const Socials = () => {
  return (
    <>
      <div className="socials__wrapper">
        {SocialsList.map((Social) => {
          return (
            <a href={Social.link} target={Social.target} rel={Social.rel}>
              <div className={Social.className}></div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export { Socials };
