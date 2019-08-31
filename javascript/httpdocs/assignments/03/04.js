( function () {

    // Template function for creating more classes
    function CollegeClass(name, totalSpots, enrolled) {
        this.name = name;
        this.totalSpots = totalSpots;
        this.enrolled = enrolled;
        this.checkForSpots = function () {
            return this.totalSpots - this.enrolled;
        };
    }

    // Creating both of my new classes, website coding and javascript.
    var websiteCodingClass = new CollegeClass('Website Coding', 25, 15);
    var javaScriptClass = new CollegeClass('JavaScript', 30, 25);

    // Get the element with the ID of website-coding-span.
    // And change the content of that element with the result of method checkForSpots for that object.
    var elWebsite_coding = document.getElementById('website-coding-span');
    elWebsite_coding.textContent = websiteCodingClass.checkForSpots();

    // Get the element with the ID of javascript-span
    // And change the content of that element with the result of method checkForSpots for that object.
    var elJavascript = document.getElementById('javascript-span');
    elJavascript.textContent = javaScriptClass.checkForSpots();

}());