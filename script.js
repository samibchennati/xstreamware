// carousel-alt-5
window.addEventListener('load', () => {
  const slidesAlt = document.querySelectorAll('.slide-alt-5');
  const radios = document.querySelectorAll('.controls-alt-5 input');

  let currentAlt = 0;
  const len = slidesAlt.length;

  function updateSlidesAlt() {
    slidesAlt.forEach((slide) => {
      slide.style.opacity = 0;
      slide.style.zIndex = 0;
      slide.style.transform = 'translateX(-50%) scale(0.8) rotateY(0deg)';
    });

    // Adjust spacing between each slide depending on screen size
    const isMobile = window.innerWidth <= 600;
    const offsetSmall = isMobile ? 120 : 200; // smaller gap on mobile
    const offsetLarge = isMobile ? 220 : 350; // outer slides closer

    const positions = [
      {offset: -2, scale: 0.8, rotate: -40, opacity: 0.6, z: 1, translateX: -offsetLarge},
      {offset: -1, scale: 0.9, rotate: -20, opacity: 0.8, z: 2, translateX: -offsetSmall},
      {offset: 0,  scale: 1.1, rotate: 0,   opacity: 1, z: 3, translateX: 0}, 
      {offset: 1,  scale: 0.9, rotate: 20,  opacity: 0.8, z: 2, translateX: offsetSmall},
      {offset: 2,  scale: 0.8, rotate: 40,  opacity: 0.6, z: 1, translateX: offsetLarge}
    ];

    positions.forEach(pos => {
      const slideIndex = (currentAlt + pos.offset + len) % len;
      const slide = slidesAlt[slideIndex];
      slide.style.opacity = pos.opacity;
      slide.style.zIndex = pos.z;

      slide.style.transform = `translateX(calc(-50% + ${pos.translateX}px)) scale(${pos.scale}) rotateY(${pos.rotate}deg)`;
    });

    if (radios[currentAlt]) radios[currentAlt].checked = true;
  }



  updateSlidesAlt();

  // Automatic rotation
  let interval = setInterval(() => {
    currentAlt = (currentAlt + 1) % len;
    updateSlidesAlt();
  }, 3500);

  // Radio buttons
  radios.forEach((radio, i) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        currentAlt = i;
        updateSlidesAlt();
        resetInterval();
      }
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      currentAlt = (currentAlt + 1) % len;
      updateSlidesAlt();
    }, 3500);
  }
});












// translation
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











// mobile navbar
function showMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if(mobileNav) {                 
      mobileNav.classList.toggle("show");
  } else {
      console.log("mobileNav not found!");
  }
}
