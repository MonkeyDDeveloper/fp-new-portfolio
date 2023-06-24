(()=> {

    const allGridItems = document.querySelectorAll('.gridItem');

    for(let gridItem of allGridItems) {
        
        gridItem.addEventListener('mouseover', gridItemMouseOver);
        gridItem.addEventListener('mouseout', gridItemMouseOut);

    }
    
    function gridItemMouseOver(e) {
        // hacer que todos los elementos grid menos el que ejecuto el evento se vuelvan opacos
        for(let gridItem of allGridItems) {
            gridItem.style.opacity = '0.2';
        }

        this.style.opacity = '1';
    }

    function gridItemMouseOut(e) {

        for(let gridItem of allGridItems) {
            gridItem.style.opacity = '1';
        }

    }

})(document, window)