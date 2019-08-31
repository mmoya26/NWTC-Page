( function () {
    // Settings my new object with the constructor.
    var bagOfChips = new Object();

    // bagOfChips object properties.
    bagOfChips.make = 'Lays';
    bagOfChips.numberOfChips = 50;
    bagOfChips.numberOfChipsEaten = 30;
    bagOfChips.checkTotalChips = function () {
        return this.numberOfChips - this.numberOfChipsEaten; // method that will return the number of chips left in the bag.
    };

    // Getting element with ID chips from the DOM.
    var resultChips = document.getElementById("chips");
    
    // Assigning that element the total of the checkTotalChips method (20).
    resultChips.textContent = bagOfChips.checkTotalChips();

}());