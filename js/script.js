document.addEventListener("DOMContentLoaded", function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-image");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  // Función para mostrar la imagen actual
  function showImage(index) {
    const slideWidth = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
  }

  // Mostrar la primera imagen al cargar la página
  showImage(currentIndex);

  // Mostrar la imagen anterior al hacer clic en el botón "Anterior"
  prevButton.addEventListener("click", function () {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselImages.length - 1;
    showImage(currentIndex);
  });

  // Mostrar la siguiente imagen al hacer clic en el botón "Siguiente"
  nextButton.addEventListener("click", function () {
    currentIndex =
      currentIndex < carouselImages.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });
});
