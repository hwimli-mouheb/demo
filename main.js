document.querySelector('body').addEventListener('click',
(e)=>e.target.style.color=getRandomColor()) ;


function getRandomColor(){
var hexa = '0123456789ABCDEF';
    var total = '#';
    for (var i = 0; i < 6; i++) {
      total += hexa[Math.floor(Math.random() * 16)];
    }
    return total;
}