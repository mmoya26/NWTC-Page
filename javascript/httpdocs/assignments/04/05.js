( function () {
  // All of my code inside an IIFE for better pratice :)

  var thingsILike = ['Apple products', 'Color red', 'Computers', 'Web development','Watching Youtube', 'Sleeping', 'Sour Candy', 'Pizza', 'Vans', 'Javascript'];
  var arraySize = thingsILike.length;
  var msg = '';
  var counter;

  for (var i = 0; i < arraySize; i++) {
    counter = i + 1;
    msg += counter + '.' + " " + thingsILike[i] + ' ' + '</br>';
  }

  var el = document.getElementById('answer');
  el.innerHTML = msg;

}());
