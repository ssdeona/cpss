export default function initTextToggle() {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const additionalText = document.getElementById('additionalText');
  const duplicateText = document.querySelector('.additional-text');
  
  if (!readMoreBtn) {
    console.log('Кнопка readMoreBtn не найдена');
    return;
  }
  
  const readMoreBtnText = readMoreBtn.querySelector('.services__read-more-text');
  
  if (!readMoreBtnText) {
    console.log('Элемент .services__read-more-text не найден');
    return;
  }

  function handleClick() {
    const isDesktop = window.innerWidth >= 1120;
    
    if (isDesktop) {
      // На ПК работаем с duplicateText
      if (duplicateText) {
        const isOpen = duplicateText.classList.contains('show');
        if (isOpen) {
          duplicateText.classList.remove('show');
          readMoreBtnText.textContent = 'Читать далее';
          readMoreBtn.classList.remove('open');
        } else {
          duplicateText.classList.add('show');
          readMoreBtnText.textContent = 'Скрыть';
          readMoreBtn.classList.add('open');
        }
      }
    } else {
      // На мобилке и планшете работаем с additionalText
      if (additionalText) {
        const isOpen = additionalText.classList.contains('show');
        if (isOpen) {
          additionalText.classList.remove('show');
          readMoreBtnText.textContent = 'Читать далее';
          readMoreBtn.classList.remove('open');
        } else {
          additionalText.classList.add('show');
          readMoreBtnText.textContent = 'Скрыть';
          readMoreBtn.classList.add('open');
        }
      }
    }
  }

  readMoreBtn.addEventListener('click', handleClick);
  console.log('Кнопка "Читать далее" инициализирована');
}
