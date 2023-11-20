document.addEventListener("DOMContentLoaded", () => {
  const hero_image = document.querySelector(".hero img");
  document.addEventListener("scroll", (e) => {
    let y_axis = window.scrollY;
    hero_image.style.transform = `translateY(${y_axis * 0.5}px)`;
  });
  const elements = [
    {
      el: ".readmore > div > h1",
      delay: 300,
    },
    {
      el: ".readmore > div > p",
      delay: 400,
    },
    {
      el: ".readmore > div > a",
      delay: 450,
    },
    {
      el: ".overlay h1",
      delay: 300,
    },
    {
      el: ".overlay p",
      delay: 400,
    },

    {
      el: ".overlay a:nth-child(1)",
      delay: 450,
    },
    {
      el: ".overlay a:nth-child(2)",
      delay: 500,
    },
  ];

  for (const obj in elements) {
    let currentElement = elements[obj];
    ScrollReveal({
      reset: true,
    }).reveal(currentElement.el, {
      delay: currentElement.delay,
    });
  }
});
