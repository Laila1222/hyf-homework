// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

// const logAfterSomeSeconds = setTimeout (logThisText, 2500);

function logThisText () {
  console.log ('Called after 2.5 seconds.');
}

//2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

function setTimeoutAndLog (stringToLog, delay) {
  setTimeout (function () {
    console.log (stringToLog);
  }, delay);
}

// setTimeoutAndLog("Hello", 3000);
// setTimeoutAndLog('Hahaha', 1500);
// setTimeoutAndLog("Log this text here", 2000);

// 3. Create a button in html.
// When clicking this button, use the function you created in the previous task to log out the text:
//  3.5 seconds after button is clicked 3.5 seconds after the button is clicked.
const button = document.querySelector ('button.clickBtn');
console.log (button);
const logThisString = '3 seconds after button is clicked';
const threeSecondsDelay = 3000;

button.addEventListener ('click', function () {
  setTimeoutAndLog (logThisString, threeSecondsDelay);
});

// 4. Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter:
// planetLogFunction. The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.
const logEarth = () => {
  console.log ('Earth');
};

const logSaturn = () => {
  console.log ('Saturn');
};

function logPlanets (planetLogFunction) {
  planetLogFunction ();
}

// logPlanets(logEarth);
// logPlanets(logSaturn);

// 5. Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

const buttonLocation = document.querySelector ('button.locationBtn');

function success (pos) {
  let crd = pos.coords;
  console.log (`Your current position is:`);
  console.log (`Latitude: ${crd.latitude}`);
  console.log (`Longitude: ${crd.longitude}`);
  console.log (`More-less ${crd.accuracy} meters`);
}

function error (err) {
  console.warn (`ERROR (${err.code}): ${err.message}`);
}

buttonLocation.addEventListener ('click', function () {
  navigator.geolocation.getCurrentPosition (success, error);
});


//6. Optional Now show that location on a map using fx the Google maps api
// This is not done!!!!!!!!!
// let map;
// let infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 6
//     });
//     infoWindow = new google.map.InfoWindow;

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             const pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//         }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         //Browser does not support geo location
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ? 
//         'Error: the geolocation service failed.' : 
//         'Error: your browser does not support geolocation.');
//         infoWindow.open(map);
// }

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. 
// When called the function should wait delay seconds and then call the provided callback function. 
// Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay)
}

const logName = () => {
    console.log('Lilla')
};
const logHobby = () => {
    console.log('Swimming')
}

// runAfterDelay(2000, logName);
// runAfterDelay(5000, logHobby);

//8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
// If a double click has been detected, log out the text: "double click!"

let lastClick = 0;
window.addEventListener('click', function() {
    const date = new Date();
    const time = date.getTime();
    if(time - lastClick < 500) {
        console.log('double click')
    }
    lastClick = time;
})

// 9.Create a function called jokeCreator that has three parameters: 
// shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
// If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. 
// And vice versa.

function funnyJoke()  {
    console.log('My boyfriend said to me last night, “You treat our relationship like some kind of game!\' Which unfortunately cost him 12 points and a bonus chance.')
}
function badJoke () {
    console.log('Q: What do you get when two giraffes collide? \n A: A giraffic jam')
}
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else if (shouldTellFunnyJoke === false) {
        badJoke();
    } else {
        console.log('You did not choose joketype.')
    }
}

// jokeCreator(true, funnyJoke, badJoke);
// jokeCreator(false, funnyJoke, badJoke);







