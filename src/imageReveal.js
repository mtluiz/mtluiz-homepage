import { getMousePosition } from "./utils";

export default function createImageReveal(element) {
    const DOM = { el: element };

    const createImage = (e) => {
        const mousePositions = getMousePosition(e);
        DOM.reveal = document.createElement('div');
        DOM.reveal.style.backgroundImage = `url("${DOM.el.dataset.img}")`
        DOM.reveal.className = "image-reveal";
        DOM.reveal.style.top = `${mousePositions.y + 100}px`;
        DOM.reveal.style.left = `${mousePositions.x}px`;
        document.body.appendChild(DOM.reveal)
    }

    const moveImage = (e) => {
        const mousePositions = getMousePosition(e);
        DOM.reveal.style.top = `${mousePositions.y + 20}px`;
        DOM.reveal.style.left = `${mousePositions.x}px`;
    }

    const removeImage = () => {
        document.body.removeChild(DOM.reveal);
    }

    DOM.el.addEventListener("mouseenter", createImage, {passive: true});
    DOM.el.addEventListener("mousemove", moveImage, {passive: true});
    DOM.el.addEventListener("mouseleave", removeImage , {passive: true});
}
