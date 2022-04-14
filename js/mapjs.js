let map;

function initMap() {
  alert('just opened a map page');
  map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 41.834709, lng: -87.626630 },
  zoom: 15,
  });
  
const iitlogo =
    "media/iitlogo.png";

const square = [
    { lat: 41.839435, lng: -87.629710 },
    { lat: 41.839435, lng: -87.623623 },
    { lat: 41.831230, lng: -87.623623 },
    { lat: 41.831230, lng: -87.629421 },
	{ lat: 41.839435, lng: -87.629710 },
  ];
  
  // Construct the square.
  const squaredescr = new google.maps.Polygon({
    paths: square,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF3361",
    fillOpacity: 0.5,
  });
  squaredescr.setMap(map);
  

  const sb = new google.maps.Marker({
    position: { lat: 41.838526, lng: -87.627466},
    map,
    icon: iitlogo,
	animation: google.maps.Animation.DROP,
	label: "Stuart Buidling",
  });
  
  const prit = new google.maps.Marker({
    position: { lat: 41.837885, lng: -87.627216},
    map,
    icon: iitlogo,
	animation: google.maps.Animation.DROP,
	label: "Pritzker Science Center",
  });
  
   const hh = new google.maps.Marker({
    position: { lat: 41.83565791077378, lng: -87.62838833138886},
    map,
    icon: iitlogo,
	animation: google.maps.Animation.DROP,
	animation: google.maps.Animation.BOUNCE,
	label: "Hermann Hall",
  });
  
  }


