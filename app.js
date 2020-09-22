var maxSize = 100;
var minSize = 6;

function defaultFontSize(){
    txt.style.fontSize = '30px';
}
function changeFontSize(x, num){
    txt =  document.querySelector(x);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);

    if (currentSize < maxSize && currentSize > minSize) {
        txt.style.fontSize = (currentSize + num) + 'px';
        if (currentSize < maxSize){
            para = document.querySelector('.para').innerHTML=`הגודל הנוכחי עומד על ${parseFloat(style) + num}px`;
        } 
    }
}

