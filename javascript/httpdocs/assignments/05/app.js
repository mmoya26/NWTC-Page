window.onload = function () {

    var myDiv = document.getElementById('page'); // Div element with ID 'page' from my HTML
    var pElements = document.getElementsByTagName('p'); // NodeList with all of my P's
    var newUL = document.createElement('ul'); // Creates a new UL element

    // The first par of this foor loop will take care of creating a new Li and
    // inserting the text from my P elements into those Li's.
    // Also appends the Li's into my UL element.
    for (var i = 0; i < pElements.length; i++) {

        var newLI = document.createElement('li');
        var textNode = document.createTextNode(pElements[i].firstChild.nodeValue)
        newLI.appendChild(textNode);
        newUL.appendChild(newLI);

        // This if statement makes sure that the first and last child
        // of my UL element have a class of 'complete'.
        if (i == pElements.length - 1)
        {
            newUL.firstChild.setAttribute('class', 'complete');
            newUL.lastChild.setAttribute('class', 'complete');
        }

        // Var that stores all of my Li inside my of UL element (newUL)
        var AllListedItems = newUL.querySelectorAll('li'); // Selects all of the Li's of my UL

        // If statement that checks if the counter is less than
        // the lenght of my length of my p elements - 1
        // and then it add the class name of 'cool' to those Li's
        // expect the last one.
        if ( i < pElements.length - 1) {
            AllListedItems[i].className = 'cool';
        }
    }

    // Counter that will keep track of how many Li's have class of 'cool'
    var coolClassCounter = 0;

    // For Loop that increses coolClassCounter if Li's have class of 'cool'
    for (var i = 0; i < pElements.length; i++) {
        if (AllListedItems[i].getAttribute('class') == 'cool') {
            coolClassCounter++;
        }
    }

    // Removes all P's
    while (pElements.length != 0) {
        myDiv.removeChild(pElements[0]);
    }

    // Add the my new UL to the page.
    myDiv.appendChild(newUL);

    // Select my h2 element and change it's textContent
    var elH2 = document.querySelector('h2');
    elH2.textContent = elH2.textContent + ': ' + coolClassCounter + ' - Items Remaining';

    // Select my title element and change it's textContent
    var elTitle = document.querySelector('title');
    elTitle.textContent = coolClassCounter + ' - Items Remaining - ' + elTitle.textContent;

};
