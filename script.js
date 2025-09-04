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

  // Auto-hide mobile menu when screen reaches 768px or above
  if (mobileMenu) {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.remove("active");
        // Also close any open submenus
        if (productSubmenu) {
          productSubmenu.classList.remove("open");
        }
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Check on initial load as well
    handleResize();
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
  "/image/testimonial/testimonial3.png",
];

const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 8000,
  slidesPerView: 1, // always one slide
  spaceBetween: 20, // no gap since only one slide visible
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

const blogs = [
  {
    img: "/Product-page/product-page-image/blog/blog1.png",
    date: "26 Mar, 2023",
    title: "The Complete Web Developer Guideline 2023",
    text: "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    img: "/Product-page/product-page-image/blog/blog2.png",
    date: "26 Mar, 2023",
    title: "The Complete Web Developer Guideline 2023",
    text: "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    img: "/Product-page/product-page-image/blog/blog3.png",
    date: "26 Mar, 2023",
    title: "The Complete Web Developer Guideline 2023",
    text: "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    img: "/Product-page/product-page-image/blog/blog1.png",
    date: "27 Mar, 2023",
    title: "Another Web Dev Post",
    text: "This is another example blog content...",
  },
  {
    img: "/Product-page/product-page-image/blog/blog2.png",
    date: "28 Mar, 2023",
    title: "Frontend Best Practices",
    text: "Some best practices for frontend development...",
  },
];

// ✅ Declare only once
let currentPage = 1;
const perPage = 3;

function renderBlogs(page) {
  const container = document.getElementById("blog-list");
  if (!container) return;

  container.innerHTML = "";

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageBlogs = blogs.slice(start, end);

  pageBlogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "card blog-card mb-4";
    card.innerHTML = `
      <img src="${blog.img}" class="img-fluid" alt="Blog Image">
      <div class="card-body">
        <div class="blog-meta">
          <span class="badge-custom">Development</span>
          <div class="post-date mb-2"><i class="far fa-clock"></i> ${blog.date}</div>
        </div>
        <h4 class="card-title"><strong>${blog.title}</strong></h4>
        <p>${blog.text}</p>
        <div class="blog-author">
          <div class="author-info">
            <div class="author-icon">👤</div>
            <div>
              <p class="author-name">Darrell Steward</p>
              <p class="author-role">Frontend Developer</p>
            </div>
          </div>
          <a href="/blog/blog-details-page/blog-details-1.html" class="read-more-btn">➝</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function goToPage(page) {
  const totalPages = Math.ceil(blogs.length / perPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderBlogs(currentPage);
  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";
  const totalPages = Math.ceil(blogs.length / perPage);

  // Previous
  pagination.innerHTML += `
    <li class="page-item rounded ${currentPage === 1 ? "disabled" : ""}">
      <a class="page-link" href="#" onclick="goToPage(${currentPage - 1})"><</a>
    </li>
  `;

  // Numbers
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <li class="page-item rounded ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
      </li>
    `;
  }

  // Next
  pagination.innerHTML += `
    <li class="page-item rounded ${currentPage === totalPages ? "disabled" : ""}">
      <a class="page-link" href="#" onclick="goToPage(${currentPage + 1})">></a>
    </li>
  `;
}

// ✅ Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs(currentPage);
  renderPagination();
});

// Scroll Animation Script
class ScrollAnimator {
  constructor() {
    this.animatedElements = new Set();
    this.init();
  }

  init() {
    this.createObserver();
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0.1, 0.3],
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          this.animateElement(entry.target);
        }
      });
    }, options);

    this.observeElements();
  }

  observeElements() {
    const selectors = [".heading", ".about-box", ".about-img", ".about-img-2"];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        this.observer.observe(el);
      });
    });
  }

  animateElement(element) {
    if (this.animatedElements.has(element)) return;

    const delay = this.animatedElements.size * 100;

    setTimeout(() => {
      element.classList.add("animate");
      this.animatedElements.add(element);
    }, delay);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ScrollAnimator();
});
