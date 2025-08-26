window.onload = () => {
  const slides = document.querySelectorAll('.slide');
  const carousel = document.querySelector('.carousel');
  let current = 0;

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.style.transition = 'transform 0.8s, opacity 0.8s';
      slide.style.opacity = 0;
      slide.style.zIndex = 1;

      if (i === current) {
        slide.style.transform = "translateX(-50%) scale(1) rotateY(0deg)";
        slide.style.opacity = 1;
        slide.style.zIndex = 3;
      } else if (i === (current - 1 + slides.length) % slides.length) {
        slide.style.transform = "translateX(-150%) scale(0.8) rotateY(-20deg)";
        slide.style.opacity = 1;
      } else if (i === (current + 1) % slides.length) {
        slide.style.transform = "translateX(50%) scale(0.8) rotateY(20deg)";
        slide.style.opacity = 1;
      } else {
        // Hide other slides behind
        slide.style.transform = "translateX(-50%) scale(0.7) rotateY(0deg)";
        slide.style.opacity = 0;
      }
    });
  }

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });

  updateSlides(); // initial state
};
