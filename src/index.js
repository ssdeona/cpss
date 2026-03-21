// Импорт стилей
import './scss/main.scss';

// Импорт модулей
import initSidebar from './js/modules/sidebar';
import initModals from './js/modules/modals';
import initSliders from './js/modules/sliders';
import initButtons from './js/modules/buttons';
import initTextToggle from './js/modules/text-toggle';

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initModals();
  initSliders();
  initButtons();
  initTextToggle();
});