const menuIcon = document.getElementById('menu-icon');
const topMenu = document.getElementById('top-menu');
const nationalityToggle = document.getElementById('nationality-toggle');
const nationalityDropdown = nationalityToggle ? nationalityToggle.closest('.nav-dropdown') : null;

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
      if (nationalityDropdown && nationalityToggle) {
        nationalityDropdown.classList.remove('active');
        nationalityToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

if (nationalityToggle && nationalityDropdown) {
  nationalityToggle.addEventListener('click', () => {
    const isOpen = nationalityDropdown.classList.toggle('active');
    nationalityToggle.setAttribute('aria-expanded', String(isOpen));
  });
}