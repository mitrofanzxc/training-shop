import { Link } from "react-router-dom";
import { BlogInfo } from "../../shared/BlogInfo";

import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="inner__container">
          <div className="blog__header">
            <h2 className="h2">Latest From Blog</h2>
            <button className="button__all">
              <Link className="button__all__text" to="/blog">
                See All
              </Link>
            </button>
          </div>
          <div className="blog__slider">
            {BlogInfo.map((BlogInfoItem) => {
              return (
                <div className="blog__slider__item">
                  <img
                    className="blog__img"
                    src={BlogInfoItem.img}
                    alt={BlogInfoItem.alt}
                    key={BlogInfoItem.key}
                  />
                  <div className="blog__slider__item__title">
                    <h3 className="h3">{BlogInfoItem.header}</h3>
                    <div className="blog__slider__item__text">
                      {BlogInfoItem.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { Blog };
