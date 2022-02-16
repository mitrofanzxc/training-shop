const subscribe = () => {
  return (
    <div>
      <section class="subscribe">
        <div class="inner__container">
          <form class="form__subscribe">
            <fieldset class="form__fieldset">
              <legend class="form__legend">Special offer</legend>
              <h2 class="h2">
                Subscribe
                <br />
                and <span class="sale">Get 10% Off</span>
              </h2>
              <input
                type="email"
                class="input__email"
                placeholder="Enter your email"
              />
              <button class="button__dark">Subscribe</button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export { subscribe };
