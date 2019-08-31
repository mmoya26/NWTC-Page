var elDocument = document.documentElement;
    
elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

// Grouping items
console.group('Grouping items');
  console.log('Miguel Moya');
  console.log(jQuery.fn.jquery);
console.groupEnd();

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(success, fail);
} else {
  document.getElementById('mapcontainer').innerHTML = msg;
}

function success(position) {
  buildMap(position.coords.latitude, position.coords.longitude);
}

function fail () {
  var msg = "We are unable to find your location at the moment, please try again later.";
  document.getElementById('mapcontainer').innerHTML = msg;
}

function buildMap(lat, lon) {

  var userMap = new google.maps.Map(document.getElementById('mapcontainer'), {
    center: {
        lat: lat,
        lng: lon
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: {
        lat: lat,
        lng: lon
    },
    map: userMap
  });

}