// Hamburger

const fullScreenInfoRow = document.querySelector('.main-content');
const fullScreenInfo = document.querySelector('.header__menu-nav');
const iconMenu = document.querySelector('.header__line');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      fullScreenInfoRow.classList.toggle('_active');
      fullScreenInfo.classList.toggle('_active');
   });
}