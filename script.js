window.onload = () => {
  const slides = document.querySelectorAll('.slide');
  const radios = document.querySelectorAll('.controls input');

  let currentIndex = 0;

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

    // update radio buttons to match current slide
    if (radios[current]) radios[current].checked = true;
  }

  radios.forEach((radio, i) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        currentIndex = i;  
        updateSlides(currentIndex);
      }
    });
  });

  updateSlides(currentIndex); // initial slide

  // automatic rotation every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);
  }, 5000);
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

