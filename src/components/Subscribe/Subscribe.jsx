import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div>
      <section className="subscribe">
        <div className="inner__container">
          <form className="form__subscribe">
            <fieldset className="form__fieldset">
              <legend className="form__legend">Special offer</legend>
              <h2 className="h2">
                Subscribe
                <br />
                and <span className="sale">Get 10% Off</span>
              </h2>
              <input
                type="email"
                className="input__email"
                placeholder="Enter your email"
              />
              <button className="button__dark">Subscribe</button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export { Subscribe };
