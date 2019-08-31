$(document).ready(function () {
    var $containerOfImages = $('.everything'); // Container that will be moved
    var $arrowRight = $('#arrowRight'); // Right arrow
    var $arrowLeft = $('#arrowLeft'); // Left arrow
    var big_container = document.getElementsByClassName('big-wrap')[0]; // big container where the event 'click' will be place (event delegation)
    var imageCounter = 0; // image counter, determines which image we are currently viewing
    
    big_container.addEventListener('click', function (e) {
        var target = e.target;
        
        // Triggers if right arrow is clicked
        if (target.getAttribute('id') == 'arrowRight') {

            // increment imageCounter (indicates which picture we are currently viewing)
            // starts at 0 - 2 = (3)
            imageCounter++;

            // determines the distance div will travel.
            var distance = imageCounter * -400;

            if (imageCounter > 0) {
                // if they clicked right, then left arrow will be visible
                $arrowLeft.css('visibility', 'visible');
            }

            if (imageCounter === 2) {
                // if the imageCounter === 2, means that we are at
                // the very last picture, so then hide the right arrow
                $arrowRight.css('visibility', 'hidden');
            } 

            // Animation + Easing
            $containerOfImages.animate({
                left: distance
            }, {
                queue: false,
                duration: 1000,
                easing: "easeOutExpo"
            });    
        }

        //Triggers if left arrow is clicked
        if (target.getAttribute('id') == 'arrowLeft') {

            // decrements imageCounter (indicates which picture we are currently viewing)
            // starts at 0 - 2 = (3)
            imageCounter--;

            // determines the distance div will travel.
            var distance = imageCounter * -400;

            if (imageCounter == 0 ) {
                // if they clicked right and then when back all the way
                // to image 0, hide left arrow.
                // (initially the left arrow is hidden with css)
                $arrowLeft.css('visibility', 'hidden');
            }

            // if they are at the last picture (2) but then clicked
            // left, make right arrow visible again
            if (imageCounter < 2) {
                $arrowRight.css('visibility', 'visible');
            }

            // Animation + Easing
            $containerOfImages.animate({
                left: distance
            }, {
                queue: false,
                duration: 1000,
                easing: "easeOutExpo"
            });
        }
    }, false);
});