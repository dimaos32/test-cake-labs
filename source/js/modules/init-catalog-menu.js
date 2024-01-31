import { FocusLock } from '../utils/focus-lock';
import scrollLock from '../vendor/scroll-lock.min';

const focusLock = new FocusLock();


const toggle = document.querySelector('.header__catalog-btn');
const menu = document.querySelector('.catalog-menu');

const initCatalogMenu = () => {
  if (!toggle || !menu) {
    return;
  }

  const overlay = menu.querySelector('.catalog-menu__overlay');

  const onOverlayClick = () => {
    closeMenu();
  };

  const onEscPress = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();

      closeMenu();
    }
  };

  const openMenu = () => {
    toggle.ariaPressed = true;
    menu.classList.add('is-opened');

    focusLock.lock('.catalog-menu', false);
    scrollLock.disablePageScroll();

    overlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscPress);
  };

  const closeMenu = () => {
    toggle.ariaPressed = false;
    menu.classList.remove('is-opened');

    focusLock.unlock(false);
    scrollLock.enablePageScroll();

    overlay.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscPress);
  };

  const onToggleMenu = () => {
    if (menu.classList.contains('is-opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onNavClick = ({ target }) => {
    if (target.closest('a')) {
      closeMenu();
    }
  };

  toggle.addEventListener('click', onToggleMenu);
  menu.addEventListener('click', onNavClick);
};

export { initCatalogMenu };
