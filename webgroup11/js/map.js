'use strict';

function initMap() {
    var myLatLng = {lat: 39.956569, lng: 44.547526};
        // Create a map object and specify the DOM element for display.
    var
    map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        center: myLatLng,
        zoom: 18
    });
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Mer tun'
        })
};