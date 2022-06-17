import Vaporwave from "./Vaporwave";
import imageReveal from "./imageReveal";
import ASScroll from "@ashthornton/asscroll";

import "../scss/index.scss";

const canvas = document.getElementById("screen");
Vaporwave(canvas);

const asscroll = new ASScroll();
window.addEventListener("load", () => {
  asscroll.enable({ horizontalScroll: true });
}, { passive: true });


const revealElements = document.querySelectorAll("[data-reveal-image]");
Array.from(revealElements).forEach(el => {
  imageReveal(el)
})

