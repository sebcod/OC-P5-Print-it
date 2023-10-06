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
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots_container = document.querySelector(".dots");

// init slide
slides.forEach((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots_container.appendChild(dot);
  slides.indexOf(slide) === 0 ? dot.classList.add("dot_selected") : "";
});

const dots = document.querySelectorAll(".dot");
const dots_array = Array.from(dots);
const banner_tagLine = document.getElementById("banner").children[3];
let current_slide_index = 0;

// click left
arrow_left.addEventListener("click", () => {
  get_current_slide();
  set_next_slide("next_slide_left");
});

//click right
arrow_right.addEventListener("click", () => {
  get_current_slide();
  set_next_slide("next_slide_right");
});

function get_current_slide() {
  dots_array.forEach((dot) => {
    if (dot.classList.contains("dot_selected")) {
      current_slide_index = dots_array.indexOf(dot);
      dots_array[current_slide_index].classList.remove("dot_selected");
    }
  });
}

function set_next_slide(arrow) {
  arrow === "next_slide_left"
    ? (current_slide_index -= 1)
    : (current_slide_index += 1);
  dots_array[current_slide_index].classList.add("dot_selected");
  banner_img.src = `./assets/images/slideshow/${slides[current_slide_index].image}`;
  banner_tagLine.innerHTML = slides[current_slide_index].tagLine;
}
