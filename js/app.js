$(document).foundation()

//slider javascript
//variable holding element which will have the slider
var blue = document.getElementById("slidy");
//image array
var purple = ["url('../img/1.jpg')", "url('../img/2.jpg')", "url('../img/3.jpg')", "url('../img/4.jpg')", "url('../img/5.jpg')"];

var counter = 0;

function slider() {
    blue.style.backgroundImage = purple[counter];
    counter++;
    //counter reset
    if (counter >= purple.length) {
        counter = 0;
    }
}
//interval
setInterval(slider, 4000);
