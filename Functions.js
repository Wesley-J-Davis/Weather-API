


// function getWeather(tau) {
//   weather.getWeather(tau) 
//     .then(results => {

//       ui.paint(results);
//     })
//     .catch(err => console.log(err));
// }


function getWeather0() {
  weatherData.getWeather(0)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather12() {
  weatherData.getWeather(1)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather24() {
  weatherData.getWeather(2)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather36() {
  weatherData.getWeather(3)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather48() {
  weatherData.getWeather(4)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather60() {
  weatherData.getWeather(5)
  .then(results => weatherPull.paint(weatherData));
}
function getWeather72() {
  weatherData.getWeather(6)
  .then(results => weatherPull.paint(weatherData));
}

function myMap() {
  let mapProp= {
    center:new google.maps.LatLng(35,-100),
    zoom:4,
  };
  let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  LatLng = new google.maps.LatLng

    // Create the initial InfoWindow.
  var infoWindow = new google.maps.InfoWindow(
      {content: 'Click the map to pick your spot.' + `<hr>` + 'Then pick when you want the weather for!', position: LatLng});
  infoWindow.open(map);

  // Configure the click listener.
  map.addListener('click', function(mapsMouseEvent) 
  {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    // Goes and gets the location and the weather for that location
    weatherData.changeLocation(mapsMouseEvent.latLng.lat().toFixed(2), mapsMouseEvent.latLng.lng().toFixed(2));
    weatherData.getWeather(0)
    .then(results => 
      weatherPull.paint(weatherData)
      )
      
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng, content:
        `
        <img class = "" src="${weatherData.icon}"id="w-icon">
        `
      });  
    
    
      infoWindow.open(map);

    console.log(weatherData.icon)
  })}


  window.onload = myMap;
