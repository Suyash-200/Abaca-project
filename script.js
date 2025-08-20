document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const productToggle = document.getElementById("productToggle");
  const productSubmenu = document.getElementById("productSubmenu");

  // Open mobile menu
  if (openMenu && mobileMenu) {
    openMenu.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  // Close mobile menu
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // Toggle product submenu (with smooth animation)
  if (productToggle && productSubmenu) {
    productToggle.addEventListener("click", (e) => {
      e.preventDefault();
      productSubmenu.classList.toggle("open");
    });
  }
});


   // Initialize Swiper
  new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      640: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 40,
      },
      1440: {
        spaceBetween: 60,
      },
    },
  });

    const images = [
    "/image/testimonial/testimonial1.png",
    "/image/testimonial/testimonial2.png",
    "/image/testimonial/testimonial3.png"
  ];

  const swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    slidesPerView: "auto",
    speed: 8000,
  slidesPerView: 1,   // always one slide
  spaceBetween: 20,    // no gap since only one slide visible
      autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".fa-arrow-left",
      prevEl: ".fa-arrow-right",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<img src="' + images[index] + '" class="' + className + '"/>';
      },
    },
  });