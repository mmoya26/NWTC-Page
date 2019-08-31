( function () {

    // Creating my Date object
    var todays = new Date();

    // Array days, to store all of my days starting from Sunday all the way to Saturday
    // Array months, to st ore all of my months starting from January all the way to December
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // variables that will hold the result from my todays object
    var $day = todays.getDay();
    var $month = todays.getMonth();
    var $date = todays.getDate();
    var $year = todays.getFullYear();

    // elDate is my element from HTML with ID 'date'
    var elDate = document.getElementById('date');

    // Change the content of that element according to the results from my todays object.
    // we get numbers from todays = new Date(); so then does numbers will be used for the arrays that are already set up.
    elDate.textContent = days[$day] + ", " + months[$month] + " " +  $date + ", " +  $year;
}());