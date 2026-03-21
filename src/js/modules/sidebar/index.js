export default function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const burgerBtn = document.getElementById('burgerBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function() {
      openSidebar();
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', function() {
      closeSidebar();
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      closeSidebar();
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });
}
