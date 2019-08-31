function createPicture (e) {
    if (imageCreated == false) {
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageLink);
        imageContainer.setAttribute('alt', 'Cute dogs');
        imageContainer.appendChild(imageElement);
        imageCreated = true;
    } else {
        console.log("Please stop trying to create more images!");
    }
    
    // Fallback for older browsers to prevent default.
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var elAnchor = document.querySelector('a.middle-span');
elAnchor.addEventListener('click', function(e) {
    createPicture(e)
}, false);

var imageLink = elAnchor.getAttribute('href');
var imageContainer = document.querySelector('div.image-container');
var imageCreated = false;
