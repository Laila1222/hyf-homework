// Variables
const inputField = document.querySelector ('#input-location');
const button = document.querySelector ('#input-location-button');
const humidity = document.querySelector ('#humidity');
const errorMessage = document.querySelector ('#error-message');
const currentLocationButton = document.querySelector ('#current-location');
const background = document.querySelector ('body');
const weatherInfoBackground = document.querySelector ('section');
const weatherInfoContainer = document.querySelector ('.weather-main');
let data;
let saveInLocalStorageLat;
  let saveInLocalStorageLng;

  //If local storage has coordinates: load weather info regarding that location
if (localStorage.getItem('loc')) {
  const loc = JSON.parse(localStorage.getItem('loc'));
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
  getWeatherData(url);
} else {
  console.log('nothing in storage');
}


//Get weather data using user's location
function currentLocationButtonOnClick () {
  // navigator.geolocation.getCurrentPosition (function (position) {
  //   const currentLocation = {
  //     longitude: position.coords.longitude,
  //     latitude: position.coords.latitude,

  //   };
  getLocation();
  
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
  //   getWeatherData (url);
  // });
}

//get location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    console.log("geolocation is not supported by your browser.");
  }
}

function showPosition(position) {
    localStorage.setItem('loc', JSON.stringify({
        'lat': position.coords.latitude,
        'long': position.coords.longitude
    }))
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.lat}&lon=${position.coords.long}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
    // getWeatherData(url);
}

//Get weather data
function getWeatherData (url) {
  fetch (url)
    .then (response => response.json())
    .then (json => {
      if (!json.message) {
        console.log (json.weather[0].id);
        document.querySelector (
          '#city-name'
        ).innerHTML = `Location: ${json.name}`;
        document.querySelector ('h3').innerHTML = json.weather[0].description;
        document.querySelector (
          '#temperature'
        ).innerHTML = `Temperature: ${json.main.temp}°C`;
        document.querySelector (
          '#humidity'
        ).innerHTML = `Humidity: ${json.main.humidity}.`;
        document.querySelector (
          '#min-temp'
        ).innerHTML = `Minimum-temperature: ${json.main.temp_min} °C.`;
        document.querySelector (
          '#max-temp'
        ).innerHTML = `Maximum-temperature: ${json.main.temp_max} °C.`;
        document.querySelector (
          '#wind-speed'
        ).innerHTML = `Wind speed: ${json.wind.speed} Km/h`;
        document.querySelector (
          '#clouds'
        ).innerHTML = `Cloudiness: ${json.clouds.all}%`;
        document.querySelector (
          '#sunrise'
        ).innerHTML = `Sunrise: ${convertUnixTime (json.sys.sunrise)} am`;
        document.querySelector (
          '#sunset'
        ).innerHTML = `Sunset: ${convertUnixTime (json.sys.sunset)} pm`;

        function convertUnixTime (unix) {
          const date = new Date (unix * 1000);
          const hours = date.getHours ();
          const minutes = date.getMinutes ();
          const displayTime = `${hours}:${minutes}`;
          return displayTime;
        }

        // initMap (json.coord.lat, json.coord.lon);

        const weatherCode = json.weather[0].id;
        // getWeatherCondition (weatherCode);
      } else {
        errorMessage.innerHTML = json.message;
        errorMessage.style.display = 'inline-block';
        inputField.addEventListener ('keypress', function () {
          errorMessage.style.display = 'none';
        });
      }
    })
    .catch (function (err) {
      console.log ('error');
      console.log (err);
    });
}

//Check if fetch works
// const checkFetch = function (response) {
//   if (!response.ok) {
//     console.log (response.statusText + ' - ' + response.url);
//   }
//   return response.json ();
// };

//Convert Unix timestamp into hour and minute
function convertUnixTime () {
  const date = new Date ();
}