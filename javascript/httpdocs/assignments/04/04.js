( function () {
  // All of my code inside an IIFE for better pratice :)

  var carMaker = 'Tesla';
  var el = document.getElementById('answer');

  switch (carMaker) {
    case 'Tesla':
      el.innerHTML = "Tesla's are high-end, very nice looking, but most importantly, all electric cars.";
      break;

    case 'Ford':
      el.innerHTML = "Good looking cars, currently working into getting into the all electric market";
      break;

    case 'Chevy':
      el.innerHTML = "They have an electric car, thought I believe they are going to stop making them?";
      break;

    default:
      el.innerHTML = 'Electric cars are the future of cars!';
  }
  
}());
