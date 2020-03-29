var changedElements = [];

var mouseHold = false;

document.onmousedown = (e)=>{
    mouseHold = true;
    changedElements = [];

}

document.onmouseup = function(e){
    mouseHold = false;
    console.log(changedElements);
    for(let ce of changedElements){
        ce.style.BackgroundColor = 'inherit';
    }
}


document.onmousemove = function(e){
    if(mouseHold){
        const element = document.elementFromPoint(e.pageX, e.pageY);
        if(element != document.body && element != document.documentElement)
        {
            if(!changedElements.includes(element)){
                //changedElements.push([element, 'azure']);
                element.savedBgColor =  window.getComputedStyle( 
                    element , null).getPropertyValue("background-color");
                
                changedElements.push(element);

            }
            element.style.BackgroundColor = 'lime';

        }else{
            // window.d5.innerText = element.nodeName;
        }
    }
}