$(document).foundation()

//slider javascript
//variable holding element which will have the slider
var blue = document.getElementById("slidy");
<<<<<<< HEAD
=======

>>>>>>> 91aa30cb457711deefe7b743c819eb09718b4953
//image array
var purple = ["url('../img/1.jpg')", "url('../img/2.jpg')", "url('../img/3.jpg')", "url('../img/4.jpg')", "url('../img/5.jpg')"];

var counter = 0;

function slider() {
<<<<<<< HEAD
=======


>>>>>>> 91aa30cb457711deefe7b743c819eb09718b4953
    blue.style.backgroundImage = purple[counter];
    counter++;
    //counter reset
    if (counter >= purple.length) {
        counter = 0;
    }
<<<<<<< HEAD
}
//interval
setInterval(slider, 4000);
=======

}
//interval
setInterval(slider, 3000);




var $bubbles = $('.bubbles');

function bubbles() {

  // Settings
  var min_bubble_count = 20, // Minimum number of bubbles
      max_bubble_count = 60, // Maximum number of bubbles
      min_bubble_size = 3, // Smallest possible bubble diameter (px)
      max_bubble_size = 12; // Maximum bubble blur amount (px)

  // Calculate a random number of bubbles based on our min/max
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

  // Create the bubbles
  for (var i = 0; i < bubbleCount; i++) {
    $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
  }

  // Now randomise the various bubble elements
  $bubbles.find('.bubble-container').each(function(){

    // Randomise the bubble positions (0 - 100%)
    var pos_rand = Math.floor(Math.random() * 101);

    // Randomise their size
    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

    // Randomise the time they start rising (0-15s)
    var delay_rand = Math.floor(Math.random() * 16);

    // Randomise their speed (3-8s)
    var speed_rand = 3 + Math.floor(Math.random() * 9);

    // Random blur
    var blur_rand = Math.floor(Math.random() * 3);

    // Cache the this selector
    var $this = $(this);

    // Apply the new styles
    $this.css({
      'left' : pos_rand + '%',

      '-webkit-animation-duration' : speed_rand + 's',
      '-moz-animation-duration' : speed_rand + 's',
      '-ms-animation-duration' : speed_rand + 's',
      'animation-duration' : speed_rand + 's',

      '-webkit-animation-delay' : delay_rand + 's',
      '-moz-animation-delay' : delay_rand + 's',
      '-ms-animation-delay' : delay_rand + 's',
      'animation-delay' : delay_rand + 's',

      '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
      '-moz-filter' : 'blur(' + blur_rand  + 'px)',
      '-ms-filter' : 'blur(' + blur_rand  + 'px)',
      'filter' : 'blur(' + blur_rand  + 'px)',
    });

    $this.children('.bubble').css({
      'width' : size_rand + 'px',
      'height' : size_rand + 'px'
    });

  });
}

>>>>>>> 91aa30cb457711deefe7b743c819eb09718b4953
