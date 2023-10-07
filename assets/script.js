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

const banner_img = document.querySelector(".banner-img");
const banner_tagLine = document.querySelector("#banner p");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots_container = document.querySelector(".dots");

function update_slider() {
  dots[slide_index].classList.add("dot_selected");
  banner_img.src = `./assets/images/slideshow/${slides[slide_index].image}`;
  banner_tagLine.innerHTML = slides[slide_index].tagLine;
}

// create dots
slides.forEach(() => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots_container.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

let slide_index = 0;

update_slider();

// click left
arrow_left.addEventListener("click", () => {
  dots[slide_index].classList.remove("dot_selected");
  slide_index - 1 < 0 ? (slide_index = slides.length - 1) : slide_index--;
  update_slider();
});

//click right
arrow_right.addEventListener("click", () => {
  dots[slide_index].classList.remove("dot_selected");
  slide_index + 1 > slides.length - 1 ? (slide_index = 0) : slide_index++;
  update_slider();
});
