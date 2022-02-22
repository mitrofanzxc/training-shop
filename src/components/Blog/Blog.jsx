import React from "react";

import { Link } from "react-router-dom";
import { BlogInfo } from "../../shared/BlogInfo";

import "./Blog.scss";

const Blog = () => {
  return (
    <div>
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
          <ul className="blog__slider">
            {BlogInfo.map((BlogInfoItem) => {
              return (
                <li className="blog__slider__item">
                  <img src={BlogInfoItem.img} alt={BlogInfoItem.alt} />
                  <div className="blog__slider__item__title">
                    <h3 className="h3">{BlogInfoItem.header}</h3>
                    <div className="blog__slider__item__text">
                      {BlogInfoItem.description}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Blog };
