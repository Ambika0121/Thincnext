document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.feature-item');
    const mainImg = document.getElementById('main-img');
    let currentIndex = 0;
    let autoPlay;

    function activate(index) {
        clearInterval(autoPlay);
        
        // Remove active from all
        items.forEach(item => item.classList.remove('active'));
        
        // Set new active
        currentIndex = index;
        const activeItem = items[currentIndex];
        activeItem.classList.add('active');

        // Swap Image
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = activeItem.getAttribute('data-img');
            mainImg.style.opacity = '1';
        }, 300);

        // Auto move to next after 5 seconds
        autoPlay = setInterval(() => {
            let next = (currentIndex + 1) % items.length;
            activate(next);
        }, 5000);
    }

    // Manual Click
    items.forEach((item, index) => {
        item.addEventListener('click', () => activate(index));
    });

    activate(0);
});


var swiper = new Swiper(".mySwiperTestimonials", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });