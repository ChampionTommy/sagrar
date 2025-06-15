export const Popular = () => {
  return (
    <section className="popular-pages">
      <div className="container">
        <div className="popular-pages__content">
          <div className="popular-pages-slider swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide-active">
                <a className="popular-page" href="/admission/">
                  <h4 className="popular-page__title">Приемная комиссия</h4>
                </a>
              </div>

              <div className="swiper-slide swiper-slide-next">
                <a
                  className="popular-page"
                  href="/education/"
                  target="_blank"
                  rel="noopener"
                >
                  <h4 className="popular-page__title">
                    Институты, факультеты, филиалы
                  </h4>
                </a>
              </div>

              <div className="swiper-slide">
                <a
                  className="popular-page"
                  href="/vuc/"
                  target="_blank"
                  rel="noopener"
                >
                  <h4 className="popular-page__title">Военный учебный центр</h4>
                </a>
              </div>

              <div className="swiper-slide">
                <a
                  className="popular-page"
                  href="/ospo/"
                  target="_blank"
                  rel="noopener"
                >
                  <h4 className="popular-page__title">Платное обучение</h4>
                </a>
              </div>

              <div className="swiper-slide">
                <a className="popular-page" href="https://uust.ru/ums">
                  <h4 className="popular-page__title">
                    Управление международного сотрудничества
                  </h4>
                </a>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
