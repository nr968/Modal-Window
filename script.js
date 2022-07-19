"use strict";

const buttonsEl = document.querySelectorAll(".btn");
console.log(buttonsEl);
const modelEl = document.querySelector(".model-window");
const overlayEl = document.querySelector(".overlay");

const closeEl = document.querySelector(".close-btn");

function hiddenToggle() {
  modelEl.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
}

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", hiddenToggle);
}
closeEl.addEventListener("click", hiddenToggle);
overlayEl.addEventListener("click", hiddenToggle);
