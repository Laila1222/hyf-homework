const button = document.querySelector ('button');
const display = document.querySelector('p');
const prevLocation = document.querySelector('h3');
const input = document.querySelector('input');

// button.addEventListener ('click', getCoords);
// //Give coordinates
// function getCoords () {
//   navigator.geolocation.getCurrentPosition (function (pos) {
//     const long = pos.coords.longitude;
//     const lat = pos.coords.latitude;
//     const coordinates = {latitude: lat, longitude: long};
//     console.log (coordinates);
//   });
// }

if (localStorage.getItem('loc')) {
    const loc = JSON.parse(localStorage.getItem('loc'));
    prevLocation.innerHTML = `Previous location: latitude: ${loc.lat}, longitude: ${loc.long}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
    getWeatherData(url);
} else {
    console.log('nothing in storage')
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        display.innerHTML = "geolocation is not supported by your browser."
    }
}

function showPosition(position) {
    const inputValue = input.value;
    localStorage.setItem('loc', JSON.stringify({
        'lat': position.coords.latitude,
        'long': position.coords.longitude,
        'location': inputValue
    }));

}
// const url = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
function getWeatherData(url) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        display.innerHTML = json.weather[0].description;
    })
}

// function getLocation() {
//     getWeatherData(url);
// }
// {
  /* <script>
  if(localStorage.getItem("loc")) {
    // json to object
   var loc = JSON.parse(localStorage.getItem("loc")); document.querySelector("#prevLoc").innerHTML= `<b>PREVIOUS LOCATION</b><br />LAT:${loc.lat} LONG: ${loc.long}`;
  }
var x = document.getElementById("demo");

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
} else { 
    x.innerHTML = "Geolocation is not supported by this browser.";}
}

function showPosition(position) {
  localStorage.setItem("loc", JSON.stringify({
    "lat": position.coords.latitude,
    "long": position.coords.longitude
  }));
x.innerHTML="Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}
</script> */
// }
