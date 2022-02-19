import React from "react";

import { BlogInfo } from "../../shared/BlogInfo";
import "./Blog.scss";

const Blog = () => {
  return (
    <div>
      <section className="blog">
        <div className="inner__container">
          <div className="blog__header">
            <h2 className="h2">Latest From Blog</h2>
            <button className="button__all">See All</button>
          </div>
          <ul className="blog__slider">
            {BlogInfo.map((BlogInfoItem) => {
              return (
                <li className="blog__slider__item">
                  <div className="blog__slider__item__title">
                    <h3 className="h3">
                      {BlogInfoItem.blog__slider__item__header}
                    </h3>
                    <div className="blog__slider__item__text">
                      {BlogInfoItem.blog__slider__item__text}
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
