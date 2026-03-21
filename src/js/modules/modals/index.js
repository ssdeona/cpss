export default function initModals() {
  const callModalOverlay = document.getElementById('callModalOverlay');
  const feedbackModalOverlay = document.getElementById('feedbackModalOverlay');
  const closeCallModalBtn = document.getElementById('closeCallModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const contactsSidebarBtn = document.getElementById('contactsSidebarBtn');
  const contactsHeaderBtn = document.getElementById('contactsHeaderBtn');
  const feedbackSidebarBtn = document.getElementById('feedbackSidebarBtn');
  const feedbackHeaderBtn = document.getElementById('feedbackHeaderBtn');

  function openCallModal() {
    if (callModalOverlay) {
      callModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCallModal() {
    if (callModalOverlay) {
      callModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openFeedbackModal() {
    if (feedbackModalOverlay) {
      feedbackModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeFeedbackModal() {
    if (feedbackModalOverlay) {
      feedbackModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (contactsSidebarBtn) {
    contactsSidebarBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      openCallModal();
    });
  }

  if (contactsHeaderBtn) {
    contactsHeaderBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      openCallModal();
    });
  }

  if (closeCallModalBtn) {
    closeCallModalBtn.addEventListener('click', function() {
      closeCallModal();
    });
  }

  if (callModalOverlay) {
    callModalOverlay.addEventListener('click', function(event) {
      if (event.target === callModalOverlay) {
        closeCallModal();
      }
    });
  }

  if (feedbackSidebarBtn) {
    feedbackSidebarBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      openFeedbackModal();
    });
  }

  if (feedbackHeaderBtn) {
    feedbackHeaderBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      openFeedbackModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      closeFeedbackModal();
    });
  }

  if (feedbackModalOverlay) {
    feedbackModalOverlay.addEventListener('click', function(event) {
      if (event.target === feedbackModalOverlay) {
        closeFeedbackModal();
      }
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (callModalOverlay && callModalOverlay.classList.contains('active')) {
        closeCallModal();
      }
      if (feedbackModalOverlay && feedbackModalOverlay.classList.contains('active')) {
        closeFeedbackModal();
      }
    }
  });

  const callForm = document.getElementById('callForm');
  if (callForm) {
    callForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const phoneInput = document.getElementById('callPhoneInput');
      if (phoneInput && phoneInput.value.trim()) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        closeCallModal();
        callForm.reset();
      } else {
        alert('Пожалуйста, введите номер телефона.');
      }
    });
  }

  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Спасибо! Ваше сообщение отправлено.');
      closeFeedbackModal();
      feedbackForm.reset();
    });
  }
}
