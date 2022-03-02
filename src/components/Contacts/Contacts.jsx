import { ContactsUl } from "../../shared/ContactsUl";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <>
      <div className="contacts__wrapper">
        {ContactsUl.slice(0, -1).map((ContactsUlLi) => {
          return (
            <>
              <div className={ContactsUlLi.className}>
                <img src={ContactsUlLi.src} alt={ContactsUlLi.alt} />
              </div>
              <div className={ContactsUlLi.className}>
                <a
                  href={ContactsUlLi.link}
                  target={ContactsUlLi.target}
                  rel={ContactsUlLi.rel}
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
