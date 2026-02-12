document.addEventListener('DOMContentLoaded', (e) => {
  (function () {
    const modal = document.getElementById('spriteModal');
    const closeBtn = document.getElementById('closeAd');
    function showAd() {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }
    function hideAd() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
    closeBtn.addEventListener('click', hideAd);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) hideAd();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideAd();
    });
    setInterval(showAd, 10000); // every 20 seconds

    // prevent Tab navigation
    function disableTabNavigation() {
      document.addEventListener(
        'keydown',
        function (e) {
          if (e.key === 'Tab') e.preventDefault();
        },
        true,
      );
    }
    disableTabNavigation();
  })();
});
