export default function initSliders() {
  let brandsSwiper = null;
  let repairSwiper = null;
  let pricingSwiper = null;

  function initBrandsSwiper() {
    if (window.innerWidth <= 720 && brandsSwiper === null) {
      const slider = document.querySelector('.brands-slider');
      const wrapper = slider ? slider.querySelector('.swiper-wrapper') : null;
      
      if (slider && wrapper) {
        const brandItems = document.querySelectorAll('#brandsList .brand');
        wrapper.innerHTML = '';
        
        brandItems.forEach(item => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          const clonedItem = item.cloneNode(true);
          slide.appendChild(clonedItem);
          wrapper.appendChild(slide);
        });
        
        brandsSwiper = new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    }
  }

  function initRepairSwiper() {
    if (window.innerWidth <= 720 && repairSwiper === null) {
      const slider = document.querySelector('.repair-slider');
      const wrapper = document.getElementById('repairSliderWrapper');
      
      if (slider && wrapper) {
        const repairItems = document.querySelectorAll('#repairList .repair-item');
        wrapper.innerHTML = '';
        
        repairItems.forEach(item => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          const clonedItem = item.cloneNode(true);
          slide.appendChild(clonedItem);
          wrapper.appendChild(slide);
        });
        
        repairSwiper = new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    }
  }

  function buildPriceCards() {
    const wrapper = document.getElementById('pricingSliderWrapper');
    if (!wrapper) return;
    
    const tableRows = document.querySelectorAll('.pricing-table .table-row');
    if (!tableRows.length) return;
    
    wrapper.innerHTML = '';
    
    tableRows.forEach(row => {
      const serviceNameEl = row.querySelector('.service-name');
      const priceEl = row.querySelector('.price');
      const timeframeEl = row.querySelector('.timeframe');
      
      const serviceName = serviceNameEl ? serviceNameEl.innerText : '';
      const price = priceEl ? priceEl.innerText : '';
      const timeframe = timeframeEl ? timeframeEl.innerText : '';
      
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      
      slide.innerHTML = `
        <div class="price-card">
          <div class="price-card__category">Ремонтные услуги</div>
          <div class="price-card__title">${serviceName}</div>
          <div class="price-card__info">
            <div class="price-card__info-label">Цена</div>
            <div class="price-card__info-value">${price}</div>
          </div>
          <div class="price-card__footer">
            <div class="price-card__time">
              <div class="price-card__info-label">Срок</div>
              <div class="price-card__info-value">${timeframe}</div>
            </div>
            <button class="price-card__btn">
              ЗАКАЗАТЬ<span class="price-card__btn-arrow">›</span>
            </button>
          </div>
        </div>
      `;
      
      const btn = slide.querySelector('.price-card__btn');
      if (btn) {
        btn.addEventListener('click', () => alert(`Заказ услуги: ${serviceName}`));
      }
      
      wrapper.appendChild(slide);
    });
  }

  function initPricingSwiper() {
    if (window.innerWidth <= 720 && pricingSwiper === null) {
      const slider = document.getElementById('pricingSlider');
      if (slider) {
        buildPriceCards();
        
        pricingSwiper = new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    }
  }

  function updateVisibility() {
    const isMobile = window.innerWidth <= 720;
    
    const brandsList = document.getElementById('brandsList');
    const brandsSlider = document.querySelector('.brands-slider');
    const brandsToggle = document.getElementById('toggleBrands');
    
    if (brandsList) brandsList.style.display = isMobile ? 'none' : 'grid';
    if (brandsSlider) brandsSlider.style.display = isMobile ? 'block' : 'none';
    if (brandsToggle) brandsToggle.style.display = isMobile ? 'none' : 'flex';
    
    const repairList = document.getElementById('repairList');
    const repairSlider = document.querySelector('.repair-slider');
    const repairToggle = document.getElementById('toggleRepair');
    
    if (repairList) repairList.style.display = isMobile ? 'none' : 'grid';
    if (repairSlider) repairSlider.style.display = isMobile ? 'block' : 'none';
    if (repairToggle) repairToggle.style.display = isMobile ? 'none' : 'flex';
    
    const desktopTable = document.querySelector('.desktop-table');
    const pricingSlider = document.getElementById('pricingSlider');
    
    if (desktopTable) desktopTable.style.display = isMobile ? 'none' : 'block';
    if (pricingSlider) pricingSlider.style.display = isMobile ? 'block' : 'none';
  }

  updateVisibility();
  initBrandsSwiper();
  initRepairSwiper();
  initPricingSwiper();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateVisibility();
      if (window.innerWidth <= 720) {
        initBrandsSwiper();
        initRepairSwiper();
        initPricingSwiper();
      }
    }, 150);
  });
}
