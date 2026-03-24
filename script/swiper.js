
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        speed: 2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
