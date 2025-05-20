
// Збереження інформації про браузер
const browserInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
};
localStorage.setItem('browserInfo', JSON.stringify(browserInfo));

// Вивід інформації
document.addEventListener('DOMContentLoaded', () => {
  const infoContainer = document.getElementById('storage-info');
  const storedInfo = JSON.parse(localStorage.getItem('browserInfo'));
  if (storedInfo) {
    infoContainer.textContent = `ОС: ${storedInfo.platform}, Браузер: ${storedInfo.userAgent}, Мова: ${storedInfo.language}`;
  }

  const openModalBtn = document.getElementById('open-modal');
  const modal = document.getElementById('feedback-modal');
  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  const hour = new Date().getHours();
  if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark');
  }

  setTimeout(() => {
    if (modal) modal.classList.remove('hidden');
  }, 60000);
});
