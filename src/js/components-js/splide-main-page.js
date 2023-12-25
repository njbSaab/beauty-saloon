document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    autoplay: true, // 'pause' не является валидным значением для autoplay
    perPage: 1,
  }).mount();
});
