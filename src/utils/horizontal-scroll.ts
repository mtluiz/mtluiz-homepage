export default function beginHorizontalScroll(){
    window.addEventListener('wheel', (event)=>{
        event.preventDefault();
        window.scroll(window.scrollX + event.deltaY, 0)
  }, {passive: false});
}