import "slick-carousel";

export class Plugins {

  init() {
    this.HeaderTopSlider();
    this.marqureeSlider();
    this.TestimonialSlider();
  }

  HeaderTopSlider() {
    $(".header-top-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: ".mega-menu .prev-arrow",
      nextArrow: ".mega-menu .next-arrow",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
  }
  marqureeSlider() {
    $(".marquree-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 7000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
  }
  TestimonialSlider() {
    $(".testimonial-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: ".mega-menu .prev-arrow",
      nextArrow: ".mega-menu .next-arrow",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    });
  }

}
