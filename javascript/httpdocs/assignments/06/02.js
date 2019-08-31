function createPicture() {
    if (imageCreated == false) {
        var image = document.createElement('img');
        image.setAttribute('src', imageLink);
        image.setAttribute('alt', 'Cute Dog');
        imageContainer.appendChild(image);
        imageCreated = true;
    } else {
        console.log("Please stop trying to create more images!");
    }
    return false;
}

var elAnchor = document.querySelector('a.middle-span');
var imageLink = elAnchor.getAttribute('href');
var imageContainer = document.querySelector('div.image-container');
var imageCreated = false;

elAnchor.onclick =  createPicture;
