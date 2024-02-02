const initArticleShowcaseSlider = () => {
  const sliders = document.querySelectorAll('.article-showcase__articles');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const sliderInner = slider.querySelector('.article-showcase__articles-inner');
    const prevBtn = slider.querySelector('.slider-btn--prev');
    const nextBtn = slider.querySelector('.slider-btn--next');
    const navigation = {
      prevEl: prevBtn,
      nextEl: nextBtn,
    };

    // eslint-disable-next-line no-undef
    const swiper = new Swiper(sliderInner, {
      slidesPerView: 1.5,
      spaceBetween: 16,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  });
};

export { initArticleShowcaseSlider };
