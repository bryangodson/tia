document.addEventListener("DOMContentLoaded", () => {
  const hero_image = document.querySelector(".hero img");
  document.addEventListener("scroll", (e) => {
    let y_axis = window.scrollY;
    hero_image.style.transform = `translateY(${y_axis * 0.25}px)`;
  });
  ScrollReveal({
    reset: true,
  }).reveal(".readmore > div > h1", {
    delay: 300,
  });
  ScrollReveal({
    reset: true,
  }).reveal(".readmore > div > p", {
    delay: 400,
  });
  ScrollReveal({
    reset: true,
  }).reveal(".readmore > div > a", {
    delay: 500,
  });
});
