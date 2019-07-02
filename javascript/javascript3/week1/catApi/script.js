// fetch('https://api.openweathermap.org/data/2.5/weather?q=valby&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6')
// .then(resp => resp.json())
// .then(json => console.log(json.main.temp))


const inputField = document.querySelector('.location input');
const button = document.querySelector('button');
// const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const errorMessage = document.querySelector('#errorMessage');


const checkFetch = function (response) {
    if (!response.ok) {  
        console.log(response.statusText + ' - ' + response.url);
        // return response.message;
    }
    return response.json();
}


button.addEventListener('click', function() {
    const location = inputField.value.toLowerCase();
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6')
        .then(checkFetch)
        .then(json => {
           if (!json.message) {
            document.querySelector('#city-name').innerHTML = `Location: ${json.name}`;
            document.querySelector('#temperature').innerHTML = 'Temperature: ' + json.main.temp + '°C';
            document.querySelector('#humidity').innerHTML = `Humidity: ${json.main.humidity} hPa.`;
            document.querySelector('#min-temp').innerHTML = `Minimum-temperature: ${json.main.temp_min} °C.`;
            document.querySelector('#max-temp').innerHTML = `Maximum-temperature: ${json.main.temp_max} °C.`;
            document.querySelector('#wind-speed').innerHTML = `Wind speed: ${json.wind.speed} Km/h`;
            document.querySelector('#clouds').innerHTML = `Cloudiness: ${json.clouds.all}%`;
            document.querySelector('#sunrise').innerHTML = `Sunrise: ${convertUnixTime(json.sys.sunrise)} am`;
            document.querySelector('#sunset').innerHTML = `Sunset: ${convertUnixTime(json.sys.sunset)} pm`;

            function convertUnixTime (unix) {
                const date = new Date(unix * 1000);
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const displayTime = `${hours}:${minutes}`;
                return displayTime;
            }
            const latitude = json.coord.lat;
            const longitude = json.coord.lon;

            initMap(json.coord.lat, json.coord.lon);


           } else {
            errorMessage.innerHTML = json.message;
            errorMessage.style.display = "inline-block"
            inputField.addEventListener("keypress", function() {
                errorMessage.style.display = 'none';
            })
           }
                
            
        })
        .catch(function(err) {
            console.log('error');
            console.log(err);
        })
    
    

});
//Convert Unix timestamp into hour and minute
function convertUnixTime () {
    const date = new Date
}

//Load location on  map
function initMap(coordLat, coordLng) {
    //Get location coordinates
    const location = {lat: coordLat, lng: coordLng};
    //The map is centered at the location
    const mapDiv = document.querySelector("#map");
    const map = new google.maps.Map(mapDiv, {
        zoom: 12,
      center: location
    });
    console.log(location)
    //Marker is positioned at the location
    const marker = new google.map.Marker({position: location, map: map});
    marker.setMap(map);
  }




