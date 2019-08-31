( function () {
    // All of my code inside an IIFE for better pratice :)
    
    var msg = '';
    
    if ( false === '0') {
        msg = 'That was a truthy statement.';
    } else {
        msg = 'That was a falsy statement.';
    }

    var el = document.getElementById('answer');
    el.innerHTML = msg;
}());