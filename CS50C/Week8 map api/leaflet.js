

let mycoord = [40.8676543,-123.9374986];

let myzoom = 13;

let mymap = L.map('map1').setView( mycoord, myzoom);


// OpenStreetMap

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

    {
        maxZoom: 20,
        attribution: '&copy; <a href="http:/www.openstreetmap.org/copyright">OpenStreepMap</a>'
    }
).addTo(mymap);

let mymarker = L.marker( mycoord );

mymarker.addTo(mymap);

// add a popup

mymarker.bindPopup( "<b>Hello there</b><br /> I am a popup.").openPopup();


// other shapes

let mycircle = L.circle(
    mycoord,
    {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }
)


mycircle.addTo(mymap);
mycircle.bindPopup("This is another popup");

// define a polygon shape

let myshape = L.polygon(
    [
        [40.8676543,-123.9374986],
        [40.8455296,-124.1232648],
        [40.7851648,-124.2189443]
    ]
);

myshape.addTo(mymap);

myshape.bindPopup("This is a polygon");

// create a frestanding popup

let mypopup = L.popup();

function onMapClick(myevent) {
    mypopup.setLatLng(myevent.latlng);
    mypopup.setContent( "this was clicked at " + myevent.latlng.toString() );
    mypopup.openOn(mymap);

}

mymap.on( 'click', onMapClick);