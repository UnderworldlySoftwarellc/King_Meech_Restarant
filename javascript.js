const menuIcon = document.getElementById('menu-icon');
const topMenu = document.getElementById('top-menu');

if (menuIcon && topMenu) {
  menuIcon.addEventListener('click', () => {
    const isOpen = topMenu.classList.toggle('active');
    menuIcon.classList.toggle('active', isOpen);
    menuIcon.setAttribute('aria-expanded', String(isOpen));
  });

  topMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      topMenu.classList.remove('active');
      menuIcon.classList.remove('active');
      menuIcon.setAttribute('aria-expanded', 'false');
    });
  });
}