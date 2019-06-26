const startButton = document.querySelector('button');
// startButton.addEventListener('click', function() {})
const selectSeconds = document.querySelector('select');

function getSeconds() {
    const secondsValue = selectSeconds.value;
    return secondsValue;
}

const gameShouldRunFor = selectSeconds.addEventListener('change', getSeconds);




// Count how many times have s and l been pressed. 
const displayNumberOfPressesLeft = document.querySelector('.counterLeft');
const displayNumberOfPressesRight = document.querySelector('.counterRight');
let countS = 0;
let countL = 0;

function gameStart() {
    document.addEventListener('keydown', event => {
        const key = event.key.toLocaleLowerCase();
        if (key === 's') {
            countS++;
            console.log(countS);
        } else if (key === 'l') {
            countL++;
            console.log(countL);
        }
    
        displayNumberOfPressesLeft.innerHTML = countS;
        displayNumberOfPressesRight.innerHTML = countL;    
    })
} 

// startButton.addEventListener('click', function() {
//     let seconds = getSeconds() * 1000;
//     let withInterval = setInterval(() => {
//         seconds--;
//        if (seconds >= 0) {
//             gameStart();
//        } 
//        if (seconds === 0) {
//            clearInterval;
//        }
//     }, seconds);
//     setTimeout(() => {
//        clearInterval(withInterval) 
//     }, seconds);
// }) 

let gameEnabled;
let seconds = getSeconds() * 1000;
// startButton.addEventListener('click', function() {
//     gameEnabled = true;
//     function disable () {
//         setTimeout(() => {
//             gameEnabled = false;
//         }, seconds);
//     }
//     disable();
//     isEnabled();
    
// })


// gameStart();






// countdown timer
let timer = document.querySelector('#time');
startButton.addEventListener('click', (function() {
    let counter = getSeconds(); 
    span = document.getElementById('count');
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            
            span.innerHTML = counter + ' seconds left';
            
        }
        if (counter === 0) {
            span.innerHTML = 'Time is over';
            clearInterval(counter);
        
        }
        

    }, 1000);

})) 

// startButton.addEventListener('click', function() {
//     const game = setInterval(() => {
//         gameStart();
//     }, seconds);
//     clearInterval(game);
// })
// startButton.addEventListener('click', function() {
//     setTimeout(() => {
//         displayNumberOfPressesLeft.innerHTML = 'Your score is: ' + countS;
//         displayNumberOfPressesRight.innerHTML = 'Your score is: ' + countL;
//     }, seconds);
// })


// startButton


