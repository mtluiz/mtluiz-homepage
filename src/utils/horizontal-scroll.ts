export default function beginHorizontalScroll(){
    window.addEventListener('wheel', (event)=>{
        event.preventDefault();
        window.scroll(window.scrollX + event.deltaY, 0)

        const teste = document.querySelector('.portfolio-works') as HTMLElement
        console.log('position works:',teste.offsetLeft)
        console.log('window:',window.scrollX)

  }, {passive: false});
}