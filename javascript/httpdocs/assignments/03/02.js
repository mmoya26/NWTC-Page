( function () {

    // classRoom new literal object
    // with 3 properties and 1 method.
    var classRoom = {
        roomNumber: "BT251",
        totalSeats: 20,
        seatsTaken: 18,
        checkSeats: function () {
            return this.totalSeats - this.seatsTaken;
        }
    }

    // elSeats is my element from HTML with ID of "seats"
    var elSeats = document.getElementById("seats");

    // Change the element content according to the result of
    // the method inside my classRoom object called checkSeats
    // which subtract totalSeats property from the seatsTaken property.
    elSeats.textContent = classRoom.checkSeats();
}());