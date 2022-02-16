import "./Blog.css";

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
            <li className="blog__slider__item">
              <div className="blog__slider__item__title">
                <h3 className="h3">The Easiest Way to Break</h3>
                <div className="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
            <li className="blog__slider__item">
              <div className="blog__slider__item__title">
                <h3 className="h3">Wedding Season</h3>
                <div className="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
            <li className="blog__slider__item">
              <div className="blog__slider__item__title">
                <h3 className="h3">Recent Favorites On Repeat</h3>
                <div className="blog__slider__item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Blog };
