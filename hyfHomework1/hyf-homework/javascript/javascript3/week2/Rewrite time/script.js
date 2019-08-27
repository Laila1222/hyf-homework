// // Settimeout as a promise
function setTimeoutPromise (time) {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve ('I am resolved from setTimeout');
      reject ('There is an error');
    }, time);
  });
}

setTimeoutPromise (1000).then (() => {
  console.log ('Called after 1 second');
});

// Get location as a promise
function getLocation () {
  return new Promise ((resolve, reject) => {
    navigator.geolocation.getCurrentPosition (
      position => {
        resolve (
          'Latitude: ' +
            position.coords.latitude +
            ', Longitude: ' +
            position.coords.longitude
        );
      },
      error => {
        reject (error);
      }
    );
  });
}

getLocation ().then (console.log).catch (console.log);
