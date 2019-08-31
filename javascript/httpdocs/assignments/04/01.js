( function () {
    // All of my code inside an IIFE for better pratice :)

    // Declartion of all of my variables
    var studentScore = 85;
    var passingScore = 60;
    var passMsg = "Yes, you've passed!"
    var failMsg = "Hmmmm.. Maybe next year :("

    // DOM element that will be used to display the results.
    var el = document.getElementById('answer');

    // If studentScore is greater than or equal  to passingScore then..
    if (studentScore >= passingScore) {
        // change the context of my DOM element to be equals to my passMsg variable.
        el.textContent = passMsg;
    } else {
        // Otherwise change the context of my DOM element to be equals to my failMsg variable.
        el.textContent = failMsg;
    }
}());