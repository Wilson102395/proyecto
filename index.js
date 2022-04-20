let map;

function initMap() {
  const colombia = { lat: 4.609, lng: -74.081 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: colombia,
    zoom: 6,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: "f8087337b17afc88",
  });

  loadMapShapes();

  map.data.addListener("mouseover", function (event) {
    map.data.overrideStyle(event.feature, { fillColor: "green" });
  });

  map.data.addListener("mouseout", function (event) {
    map.data.revertStyle();
  });
  
  datosDepartamento ();
  
}

function loadMapShapes() {
  // load US state outline polygons from a GeoJson file
  map.data.loadGeoJson(
    "https://gist.githubusercontent.com/john-guerra/43c7656821069d00dcbc/raw/3aadedf47badbdac823b00dbe259f6bc6d9e1899/colombia.geo.json"
  );
}


window.initMap = initMap;
