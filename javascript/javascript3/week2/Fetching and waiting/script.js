// Variables
const button = document.querySelector ('button');
const displayAdvice = document.querySelector ('h3');
const image = document.querySelector ('img');

// Get advice
function getRandomAdvice () {
  return fetch ('https://api.adviceslip.com/advice')
    .then (response => response.json ())
    .then (json => {
      displayAdvice.innerHTML = json.slip.advice;
      button.innerHTML = 'Get a new advice';
    })
    .catch (err => console.log ('We got an error: ' + err));
}

// Get photo
function getRandomPhoto () {
  fetch (
    'https://api.unsplash.com/photos/random?client_id=5ec5946328208a12cf86ed3a10004da3325b5d8a10514f0d2789ed947ccdd305'
  )
    .then (response => response.json ())
    .then (json => {
      const imgUrl = json.urls.small;
      image.src = imgUrl;
      image.style.display = 'block';
    })
    .catch (error => console.log (error));
}

// Change button sign when 'loading'
function loadingOnButton () {
  button.innerHTML = 'Loading...';
}

// Set timeout for advice and photo
function changeAdvice () {
  setTimeout (() => {
    getRandomAdvice ();
  }, 3500);
}

function changePhoto () {
  setTimeout (() => {
    getRandomPhoto ();
  }, 3000);
}

// Button click event listener
button.addEventListener ('click', function () {
  loadingOnButton ();
  Promise.all ([changeAdvice (), changePhoto ()]);
});
