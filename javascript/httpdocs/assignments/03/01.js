( function () {
    
    // Functions that will convert yards to meters.
    function toMeters () {
        // elYards is my element with ID of yards in HTML
        var elYards = document.getElementById("yards");

        // return the content (number) from the HTML (200)
        // and divide that by 1.0936 to convert it to meters.
        return elYards.textContent / 1.0936;
    }
    
    // elMeters is my element with ID of meters in HTML
    var elMeters = document.getElementById("meters");

    // Add the result as a content to that element, and round
    // to two decimals places.
    elMeters.textContent = toMeters().toFixed(2);
}());