// Script du carrousel

// Tableau des différents slides du carrousel
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

// Récupération des éléments sur le DOM avec document.querySelector
const banner_img = document.querySelector(".banner-img");
const banner_tagLine = document.querySelector("#banner p");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots_container = document.querySelector(".dots");

// Création d'un dot pour chaque slide
// Ajout de la class .dot
// Ajout du dot dans dots_container
slides.forEach(() => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots_container.appendChild(dot);
});

// Récupération des dots créés dans le tableau dots[]
const dots = document.querySelectorAll(".dot");

// Initialisation du compteur de slides à 0
let slide_counter = 0;

// Appel de la fonction update_slider pour afficher le slider 0
update_slider();

// Déclaration de la fonction update_slider()
// Ajout de la class .dot_selected à dots[slide_counter]
// Mise à jour du src de l'image du slider
// Mise à jour de la tagLine du slider
function update_slider() {
  dots[slide_counter].classList.add("dot_selected");
  banner_img.src = `./assets/images/slideshow/${slides[slide_counter].image}`;
  banner_tagLine.innerHTML = slides[slide_counter].tagLine;
}

// Au clique sur arrow_left:
// On enlève la class .dot_selected au dot du slide actuel, dots[slide_counter]
// On vérifie si slide_counter - 1 est inférieur 0
//    si oui, on est arrivé au début du tableau alors slider_counter prend la dernière valeur du tableau, slides.length - 1
//    si non, on décrémente slide_counter. il vaut alors slide_counter - 1
// On appel la fonction update_slider() avec la nouvelle valeur de slide_counter
arrow_left.addEventListener("click", () => {
  dots[slide_counter].classList.remove("dot_selected");
  slide_counter - 1 < 0 ? (slide_counter = slides.length - 1) : slide_counter--;
  update_slider();
});

// Au clique sur arrow_Right:
// On enlève la class .dot_selected au dot du slide actuel, dots[slide_counter]
// On vérifie si slide_counter + 1 est supérieur au dernier élément du tableau, slides.length - 1
//    si oui, on est arrivé à la fin du tableau alors slider_counter prend la première valeur du tableau, 0
//    si non, on incrémente slide_counter. il vaut alors slide_counter + 1
// On appel la fonction update_slider() avec la nouvelle valeur de slide_counter
arrow_right.addEventListener("click", () => {
  dots[slide_counter].classList.remove("dot_selected");
  slide_counter + 1 > slides.length - 1 ? (slide_counter = 0) : slide_counter++;
  update_slider();
});
