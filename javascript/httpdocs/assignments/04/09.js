( function () { 
    // All of my code inside an IIFE for better pratice :)
    var msg = '';
    var el = document.getElementById('answer');

    if ( (10 < 20) || (1 > 10 )) {
        msg = 'This if statement was true because, 10 is less than 20.';
    }

    el.innerHTML = msg;
    
}());