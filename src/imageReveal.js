
function getMousePosition(e) {
    var posx = 0;
    var posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log("y",posy);
    console.log("x",posx)
    return { x: posx, y: posy };
}

export function imageReveal(element) {
    const DOM = { el: element };

    const createImage = (e) => {
        DOM.reveal = document.createElement('div');
        DOM.reveal.className = "image-reveal";
        DOM.reveal.innerHTML = `<div class="hover-reveal__inner" style="background-image:url(${DOM.el.dataset.img}); width: 300px, height: 300px" ></div>`;
        DOM.el.appendChild(DOM.reveal)
    }

    const moveImage = (e) => {
        const mousePositions = getMousePosition(e);
        DOM.reveal.style.top = `${mousePositions.y}px`
        DOM.reveal.style.left = `${mousePositions.x}px`
        console.log(DOM.reveal)
    }

    const removeImage = (e) => {
        DOM.el.removeChild(DOM.reveal)
    }


    //document.addEventListener("mouseenter", createImage);
    //document.addEventListener("mousemove", moveImage);
    //document.addEventListener("mouseleave", removeImage);
}

export function testReveal() {
    let reveal = document.createElement('div');
    reveal.className = "image-reveal";
    reveal.innerHTML = `<div class="hover-reveal__inner" style="background-image:url(./assets/image.png); width: 100%; height: 100%" ></div>`;
    document.body.appendChild(reveal)

    const moveImage = (e) => {
        const mousePositions = getMousePosition(e);
        reveal.style.top = `${mousePositions.y}px`
        reveal.style.left = `${mousePositions.x}px`
        
    }

    document.addEventListener("mousemove", moveImage)
}