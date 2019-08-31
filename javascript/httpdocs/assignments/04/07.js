( function () { 
    // All of my code inside an IIFE for better pratice :)
    var string = 'Hello world';
    var msg = ''

    if (string) {
        msg = 'That was a truthy statement.';
    }

    var el = document.getElementById('answer');
    el.innerHTML = msg;

}());