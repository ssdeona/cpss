// Импорт стилей
import '../scss/main.scss';

// Импорт модулей
import initSidebar from './modules/sidebar';
import initModals from './modules/modals';
import initSliders from './modules/sliders';
import initButtons from './modules/buttons';
import initTextToggle from './modules/text-toggle';

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initModals();
  initSliders();
  initButtons();
  initTextToggle();
});