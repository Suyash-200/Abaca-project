  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const productToggle = document.getElementById('productToggle');
  const productSubmenu = document.getElementById('productSubmenu');

  openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  productToggle.addEventListener('click', (e) => {
    e.preventDefault();
    productSubmenu.style.display = productSubmenu.style.display === 'block' ? 'none' : 'block';
  });