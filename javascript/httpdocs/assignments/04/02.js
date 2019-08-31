( function () {
    // All of my code inside an IIFE for better pratice :)

    // Declaring variable numberThree as an INT == 3
    var numberThree = 3;

    // Declaring variable $numberThree as STRING == 'three'
    var $numberThree = 'three'

    // Declaring variable areTheyTheSame == is numberThree strictly not equal to $numberThree 
    // Which is true they are not the same data type or value.
    var areTheyTheSame = numberThree !== $numberThree;

    // DOM element to show the results.
    var el = document.getElementById('answer');
    el.textContent = areTheyTheSame;
}());