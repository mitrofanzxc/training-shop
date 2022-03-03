import { ContactsUl } from "../../shared/ContactsUl";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <>
      <div className="contacts__wrapper">
        {ContactsUl.map((ContactsUlLi) => {
          return (
            <>
              <div className={ContactsUlLi.className}>
                <img
                  src={ContactsUlLi.src}
                  alt={ContactsUlLi.alt}
                  className={ContactsUlLi.classNameImg}
                />
                <a
                  href={ContactsUlLi.link}
                  target={ContactsUlLi.target}
                  rel={ContactsUlLi.rel}
                  className={ContactsUlLi.classNameLink}
                >
                  {ContactsUlLi.description}
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { Contacts };
