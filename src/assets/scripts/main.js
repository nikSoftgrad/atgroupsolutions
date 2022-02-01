// Hamburger

const fullScreenInfoRow = document.querySelector('.main-content');
const fullScreenInfo = document.querySelector('.header__menu-nav');
const burgerMenu = document.querySelector('.header__burger-btn');
const iconMenu = document.querySelector('.header__line');
if (burgerMenu) {
   burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('js-lock');
      iconMenu.classList.toggle('js-is-active');
      fullScreenInfoRow.classList.toggle('js-is-active');
      fullScreenInfo.classList.toggle('js-is-active');
   });
}