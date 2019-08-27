// Variables
const inputField = document.querySelector ('#input-location');
const button = document.querySelector ('#input-location-button');
const humidity = document.querySelector ('#humidity');
const errorMessage = document.querySelector ('#error-message');
const currentLocationButton = document.querySelector ('#current-location');
const background = document.querySelector ('body');
const weatherInfoBackground = document.querySelector ('section');
const weatherInfoContainer = document.querySelector ('.weather-main');

// Get weather info by pressing 'enter'
inputField.addEventListener ('keyup', function (event) {
  if (event.keyCode === 13) {
    locationButtonOnClick ();
  }
});

// Functions
//Get weather data by input
function locationButtonOnClick () {
  const location = inputField.value.toLowerCase ();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
  getWeatherData (url);
  const savedData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
  localStorage.setItem ('location', JSON.stringify (savedData));
  const data = JSON.parse (localStorage.getItem ('location'));
  console.log (data);
}
//Get weather data using user's location
function currentLocationButtonOnClick () {
  navigator.geolocation.getCurrentPosition (function (position) {
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
    getWeatherData (url);
    const savedData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6`;
    localStorage.setItem ('location', JSON.stringify (savedData));
    const data = JSON.parse (localStorage.getItem ('location'));
    console.log (data);
  });
}

//Get weather data
function getWeatherData (url) {
  fetch (url)
    .then (checkFetch)
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
        ).innerHTML = `Humidity: ${json.main.humidity} hPa.`;
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

        //Convert Unix timestamp into hour and minute
        function convertUnixTime (unix) {
          const date = new Date (unix * 1000);
          const hours = date.getHours ();
          const minutes = date.getMinutes ();
          const displayTime = `${hours}:${minutes}`;
          return displayTime;
        }

        // Load map
        initMap (json.coord.lat, json.coord.lon);

        // Display different background image according to weather
        const weatherCode = json.weather[0].id;
        getWeatherCondition (weatherCode);

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
const checkFetch = function (response) {
  if (!response.ok) {
    console.log (response.statusText + ' - ' + response.url);
  }
  return response.json ();
};

//Load location on  map
function initMap (coordLat, coordLng) {
  //Get location coordinates
  const location = {lat: coordLat, lng: coordLng};
  //The map is centered at the location
  const mapDiv = document.querySelector ('#map');
  const map = new google.maps.Map (mapDiv, {
    zoom: 12,
    center: location,
  });
  mapDiv.style.display = 'block';
  console.log (location);
}

//Change background picture and colour according to weather
function getWeatherCondition (weatherCondition) {
  if (weatherCondition <= 232 && weatherCondition >= 200) {
    background.style.backgroundImage = 'url(images/storm.jpg)';
    weatherInfoBackground.style.background = 'url(images/stormyBack.png)';
    addStyling ();
  } else if (weatherCondition <= 321 && weatherCondition >= 300) {
    background.style.backgroundImage = 'url(images/drizzle.jpg)';
    weatherInfoBackground.style.background = 'url(images/stormyBack.png)';
    addStyling ();
  } else if (weatherCondition <= 531 && weatherCondition >= 500) {
    background.style.backgroundImage = 'url(images/rainy.jpg)';
    weatherInfoBackground.style.background = 'url("images/rainyBack.png")';
    addStyling ();
  } else if (weatherCondition <= 622 && weatherCondition >= 600) {
    background.style.backgroundImage = 'url(images/snow.jpg)';
    weatherInfoBackground.style.background = 'url(images/snowyBack.png)';
    addStyling ();
  } else if (weatherCondition <= 781 && weatherCondition >= 701) {
    background.style.backgroundImage = 'url(images/mist.jpg)';
    weatherInfoBackground.style.background = 'url(images/mistyBack.png)';
    addStyling ();
  } else if (weatherCondition > 800 && weatherCondition <= 804) {
    background.style.backgroundImage = 'url(images/cloudy.jpg)';
    weatherInfoBackground.style.background = 'url(images/mistyBack.png)';
    addStyling ();
  } else if ((weatherCondition = 800)) {
    background.style.backgroundImage = 'url(images/sunny.jpg)';
    weatherInfoBackground.style.background = 'url(images/sunnyBack.png)';
    addStyling ();
  } else {
    background.style.backgroundImage = 'url(images/error.jpg)';
    weatherInfoBackground.style.background = 'url(images/sunnyBack.png)';
    addStyling ();
  }
}

// Styling of weather info background
function addStyling () {
  weatherInfoContainer.style.padding = '2rem 2rem 0 2rem';
  weatherInfoContainer.style.marginTop = '1rem';
  weatherInfoBackground.style.boxShadow =
    'inset 0 0 10px 5px rgb(34, 34, 34, .98)';
  weatherInfoBackground.style.borderRadius = '10px';
}
