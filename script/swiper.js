var swiper = new Swiper(".testimonial", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {           
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {          
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {         
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});

var swiper = new Swiper(".v2Testimonials", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
