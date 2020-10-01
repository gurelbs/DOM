var maxSize = 100;
var minSize = 6;

function defaultFontSize(){
    txt.style.fontSize = '30px';
}
function changeFontSize(x, num){
    txt =  document.querySelector(x);
    fSize = window.getComputedStyle(txt).getPropertyValue('font-size');
    currentSize = parseFloat(fSize);

    if (currentSize < maxSize && currentSize > minSize) {
        txt.style.fontSize = (currentSize + num) + 'px';
        if (currentSize < maxSize){
            para = document.querySelector('.para').innerHTML=`הגודל הנוכחי עומד על ${parseFloat(fSize) + num}px`;
        } 
    }
}

let header = document.querySelector('#h1');
let increase = document.querySelector('.plus');
let decrease = document.querySelector('.minus');

function increaseBtn(){
    fSize = window.getComputedStyle(header).getPropertyValue('font-size');
    let pxNum = parseFloat(fSize)
    increase.addEventListener('click', () => {
        if (pxNum > minSize && pxNum < maxSize){
            header.style.fontSize = `${pxNum + 2}px`;
        }
        console.log(fSize);
    });
}

function decreaseBtn(){
    fSize = window.getComputedStyle(header).getPropertyValue('font-size');
    let pxNum = parseFloat(fSize)
    decrease.addEventListener('click', () => {
        if (pxNum > minSize && pxNum < maxSize){
            header.style.fontSize = `${pxNum - 2}px`;
        }
        console.log(fSize);
    });
}