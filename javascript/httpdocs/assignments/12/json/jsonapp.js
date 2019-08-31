var elDocument = document.documentElement;
elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

// Grouping items
console.group('Grouping items');
    console.log('Miguel Moya');
    console.log(jQuery.fn.jquery);
console.groupEnd();

var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        var jsonObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < jsonObject.champions.length; i++) {
            if (i === 0) {
                newContent += '<div class="flex-c champion-card align-item-c">';
                newContent += '<img src="ezreal.jpg" alt="Ezreal champion" class="champion-images">';
                newContent += '<p>' + "Champion Name: "+ jsonObject.champions[i].name + '</p>';
                newContent += '<p>'+ "Champion Role: " + jsonObject.champions[i].role + '</p>';
                newContent += '<p>' + "Fun Champion: " + jsonObject.champions[i].funChampion + '</p>'
                newContent += '</div>'
            }
            if (i === 1) {
                newContent += '<div class="flex-c champion-card align-item-c">';
                newContent += '<img src="udyr.jpg" alt="Udyr champion" class="champion-images">';
                newContent += '<p>' + "Champion Name: "+ jsonObject.champions[i].name + '</p>';
                newContent += '<p>'+ "Champion Role: " + jsonObject.champions[i].role + '</p>';
                newContent += '<p>' + "Fun Champion: " + jsonObject.champions[i].funChampion + '</p>'
                newContent += '</div>'
            }

            if (i === 2) {
                newContent += '<div class="flex-c champion-card align-item-c">';
                newContent += '<img src="amumu.jpg" alt="Amumu champion" class="champion-images">';
                newContent += '<p>' + "Champion Name: "+ jsonObject.champions[i].name + '</p>';
                newContent += '<p>'+ "Champion Role: " + jsonObject.champions[i].role + '</p>';
                newContent += '<p>' + "Fun Champion: " + jsonObject.champions[i].funChampion + '</p>'
                newContent += '</div>'
            }
        }

        document.getElementById('json-container').innerHTML = newContent;
    }
}

xhr.open('GET', 'data.json', true);
xhr.send(null);