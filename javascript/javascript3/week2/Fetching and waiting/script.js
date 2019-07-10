

function weatherFetch () {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=8520585c9e303dd1aa21a11aaebf99d6');
}

weatherFetch()
.then(response => response.json())
.then(json => {
    setTimeout(() => {
        console.log(json.weather[0].main)
    }, 3000)})
.catch(err => console.log('We got an error: ' + err))