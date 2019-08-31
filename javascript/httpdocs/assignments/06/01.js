// Function that gets called when the users clicks
// on the anchor tag in my page.
function createPicture() {
    // If an image hasn't been created, then create one
    if (imageCreated == false) {
        var image = document.createElement('img'); // img element
        image.setAttribute('src', linkOfImage); // set attribute src to be equal my linkofImage variable
        image.setAttribute('alt', 'Picture of  a dog and cat'); // set attribute alt to be a description about the image
        imageCreated = true; // set the imageCreated boolean to be true, so the user can't create no more images.
        imageContainer.appendChild(image); // append my img element to my image container
    } else { // Otherwise
        console.log("Stop trying to create more images!"); //  console.log('Stop trying to create more images!')
    }
}

// Declarations of variables
var ElAnchor = document.querySelector('a.middle-span'); // Anchor tag that contains the href for the image.
var linkOfImage = ElAnchor.getAttribute('href'); // ElAchor property that saves the href link to my variable linkOfImage.
var imageContainer = document.querySelector('div.image-container'); // Image Container from my HTML where I will be appending my image.
var imageCreated = false; // Boolean to prevent user from creating multiple images.