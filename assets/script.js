const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

slides.map((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
  slides.indexOf(slide) === 0 ? dot.classList.add("dot_selected") : "";
});

arrow_left.addEventListener("click", () => {
  console.log("click arrow left");
});
arrow_right.addEventListener("click", () => {
  console.log("click arrow right");
});
