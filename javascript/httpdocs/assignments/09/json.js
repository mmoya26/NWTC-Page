var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        var jsonObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < jsonObject.teslas.length; i++) {
            if (i === 0) {
                newContent += '<div class="d-flex">';
                newContent += '<div class="image_container" id="first_image"></div>'
                newContent += '<div class="d-flex-c">';
                newContent += '<h2>' + jsonObject.teslas[i].model + '</h2>';
                newContent += '<p class="lead">' + jsonObject.teslas[i].subtitle + '</p>';
                newContent += '<p class="info">' + jsonObject.teslas[i].info + '</p>';
                newContent += '</div>'
                newContent += '</div>'
            }
            if (i === 1) {
                newContent += '<div class="d-flex">';
                newContent += '<div class="image_container" id="second_image"></div>'
                newContent += '<div class="d-flex-c">';
                newContent += '<h2>' + jsonObject.teslas[i].model + '</h2>';
                newContent += '<p class="lead">' + jsonObject.teslas[i].subtitle + '</p>';
                newContent += '<p class="info">' + jsonObject.teslas[i].info + '</p>';
                newContent += '</div>'
                newContent += '</div>'
            }  
        }

        document.getElementById('content').innerHTML = newContent;
    }
}

xhr.open('GET', 'json-data.json', true);
xhr.send(null);