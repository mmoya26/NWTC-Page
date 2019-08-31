( function () {
    // All of my code inside an IIFE for better pratice :)
    var number = 10;
    var determiner = 'positive';
    var counter = 0;
    var msg = '';
    var el = document.getElementById('answer');

    if (determiner === 'positive') {
        while (counter < 11) {
            msg += 'We are at ' + counter + '</br>';
            counter++;
            console.log(msg);
        }
    } else {
        while (counter < 11) {
            msg += 'False, write this 10 times.' + '</br>';
            counter++;
        }
    }

    el.innerHTML = msg;
}());