// Styled welcome message
console.log('%c Welcome to Assignment 11 - %cError Handling', 'color: red; font-size: 25px; font-weight: bold;', 'color: black; font-size: 25px; font-weight: bold;');

// %O
var anchorTags = document.getElementsByTagName('a');
console.log('%o', anchorTags);

// Different types of logs
console.info('This is the info property of the console object');
console.warn('This is the warn property of the console object');
console.error('This is the error property of the console object');

// Grouping items
console.group('Grouping items');
  console.log('All of these logs');
  console.log('are all grouped');
  console.log('together.');
console.groupEnd();

// teslas object
var teslasPerfomanceModels = {
  "Model 3": {
    "Before Savings Price": "59,500 US Dollars",
    "Acceleration 0-60 MPH": "3.2 seconds",
    "Top Speed": "162 MPH"
  },

  "Model S": {
    "Before Savings Price": "99,000 US Dollars",
    "Acceleration 0-60 MPH": "2.4 seconds",
    "Top Speed": "155 MPH"
  },

  "Model X": {
    "Before Savings Price": "124,000 US Dollars",
    "Acceleration 0-60 MPH": "2.8 seconds",
    "Top Speed": "155 MPH"
  }
};

console.table(teslasPerfomanceModels);

// Array of colors
var words = ['Red', 'Black', 'White', 'Blue', 'Green', 'Violet', 'Pink'];

// Generates random number 0 - 6 inclusive
var rNumber = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

// Display assert with the color depending on the random number generated
console.assert(false, 'The random color is %s', words[rNumber]);

// If the random number equals to 6 the a breakpoint will be set
if (rNumber == 6) {
  debugger;
}
