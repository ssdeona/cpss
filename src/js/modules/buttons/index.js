export default function initButtons() {
  // Кнопки "Показать все" для брендов и ремонта
  const toggleBrandsBtn = document.getElementById('toggleBrands');
  const brandsList = document.getElementById('brandsList');
 var brandsBtnText = toggleBrandsBtn ? toggleBrandsBtn.querySelector('.services__read-more-text') : null;

  if (toggleBrandsBtn && brandsList && brandsBtnText) {
    toggleBrandsBtn.addEventListener('click', () => {
      brandsList.classList.toggle('open');
      toggleBrandsBtn.classList.toggle('open');
      brandsBtnText.textContent = brandsList.classList.contains('open') ? 'Скрыть' : 'Показать все';
    });
  }

  const toggleRepairBtn = document.getElementById('toggleRepair');
  const repairList = document.getElementById('repairList');
  const repairBtnText = toggleRepairBtn && toggleRepairBtn.querySelector('.services__read-more-text');

  if (toggleRepairBtn && repairList && repairBtnText) {
    toggleRepairBtn.addEventListener('click', () => {
      repairList.classList.toggle('open');
      toggleRepairBtn.classList.toggle('open');
      repairBtnText.textContent = repairList.classList.contains('open') ? 'Скрыть' : 'Показать все';
    });
  }
}