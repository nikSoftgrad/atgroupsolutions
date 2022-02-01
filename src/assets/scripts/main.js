// Hamburger

const fullScreenInfoRow = document.querySelector('.main-content');
const fullScreenInfo = document.querySelector('.header__menu-nav');
const iconMenu = document.querySelector('.header__line');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('js-lock');
      iconMenu.classList.toggle('js-is-active');
      fullScreenInfoRow.classList.toggle('js-is-active');
      fullScreenInfo.classList.toggle('js-is-active');
   });
}