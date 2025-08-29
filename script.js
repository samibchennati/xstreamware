window.onload = () => {
  const slides = document.querySelectorAll('.slide');
  const radios = document.querySelectorAll('.controls input');

  function updateSlides(current) {
    slides.forEach((slide, i) => {
      slide.style.opacity = 0;
      slide.style.zIndex = 0;

      if (i === current) {
        slide.style.opacity = 1;
        slide.style.transform = "translateX(-50%) scale(1) rotateY(0deg)";
        slide.style.zIndex = 2;
      } else if (i === (current - 1 + slides.length) % slides.length) {
        slide.style.opacity = 1;
        slide.style.transform = "translateX(-150%) scale(0.8) rotateY(-20deg)";
        slide.style.zIndex = 1;
      } else if (i === (current + 1) % slides.length) {
        slide.style.opacity = 1;
        slide.style.transform = "translateX(50%) scale(0.8) rotateY(20deg)";
        slide.style.zIndex = 1;
      }
    });
  }

  radios.forEach((radio, i) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        updateSlides(i);
      }
    });
  });

  updateSlides(0); // initial
};





let currentLang = 'en'; // default language

const langBtn = document.getElementById('languageButton');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  
  // update all text elements
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-lang-${currentLang}`);
  });

  // update language label
  langBtn.textContent = currentLang === 'en' ? 'Français' : 'English';
});

