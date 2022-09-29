let nav = document.querySelector(".nav");
let icon = document.querySelector(".icon");
let links = document.querySelector(".another-links");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");

icon.addEventListener("click", () => {
  nav.classList.toggle("show");
  icon.classList.toggle("change");
});
arrow1.addEventListener("click", () => {
  li1.classList.toggle("open-links");
  arrow1.classList.toggle("transform");
  link1.classList.toggle("change-color");
});
link1.addEventListener("click", () => {
  li1.classList.toggle("open-links");
  arrow1.classList.toggle("transform");
  link1.classList.toggle("change-color");
});
arrow2.addEventListener("click", () => {
  li2.classList.toggle("show-links");
  arrow2.classList.toggle("transform");
  link2.classList.toggle("change-color");
});
link2.addEventListener("click", () => {
  li2.classList.toggle("show-links");
  arrow2.classList.toggle("transform");
  link2.classList.toggle("change-color");
});
arrow3.addEventListener("click", () => {
  li3.classList.toggle("appear-links");
  arrow3.classList.toggle("transform");
  link3.classList.toggle("change-color");
});
link3.addEventListener("click", () => {
  li3.classList.toggle("appear-links");
  arrow3.classList.toggle("transform");
  link3.classList.toggle("change-color");
});
