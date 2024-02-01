const initProductShowcaseSlider = () => {
  const sliders = document.querySelectorAll('.product-showcase__products');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const sliderInner = slider.querySelector('.product-showcase__products-inner');
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
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  });
};

export { initProductShowcaseSlider };
