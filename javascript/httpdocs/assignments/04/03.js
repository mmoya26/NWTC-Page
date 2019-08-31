( function () { 
    // All of my code inside an IIFE for better pratice :)

    // Hungry bool = true.
    var hungry = true;

    // DOM element to display my results.
    var el = document.getElementById('answer');

    // If hungry then..
    if (hungry)
    {
        // Call this function.
        CallMeIfHungry();
    } else {
        // Otherwise call this one.
        CallMeIfNotHungry();
    }

    // Function for when I'm hungry
    function CallMeIfHungry() {
        var msg = "Yes, I'm starving!";
        el.textContent = msg;
    }

    // Function for when I'm not hungry, YET.
    function CallMeIfNotHungry() {
        var msg = "No, not right now.";
        el.textContent = msg;
    }
    
}());