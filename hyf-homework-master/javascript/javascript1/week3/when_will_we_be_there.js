 //When will we be there??
// By Lilla Kőrösi
// Hack Your Future - JavaScript Week3

const speed = 50;
const distance = 432;
let time = 0;
function travelTime(speed, distance) {
    time = distance / speed;
    let hours = Math.floor(time);
    let minutes = Math.floor((time * 60) % 60);
    console.log("Travel time is " + hours + " hours and " + minutes + " minutes.");
}

travelTime(speed, distance);


