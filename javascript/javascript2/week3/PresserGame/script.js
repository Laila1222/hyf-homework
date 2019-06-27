const startButton = document.querySelector('button');
// startButton.addEventListener('click', function() {})
const selectSeconds = document.querySelector('select');

function getSeconds() {
    const secondsValue = selectSeconds.value;
    return secondsValue;
}

const gameShouldRunFor = selectSeconds.addEventListener('change', getSeconds);


let seconds = getSeconds() * 1000;


// Count how many times have s and l been pressed. 
let displayNumberOfPressesLeft = document.querySelector('.counterLeft');
let displayNumberOfPressesRight = document.querySelector('.counterRight');
let countS = 0;
let countL = 0;
// startButton.addEventListener('click', gameStart);
// startButton.addEventListener('click', removeGameStart);





// function gameStart() {
//     document.addEventListener('keydown', event => {
//         let key = event.key.toLocaleLowerCase();
        
        
//         if (key === 's') {
//             countS++;
//             console.log(countS);
//         } else if (key === 'l') {
//             countL++;
//             console.log(countL);
//         }
//         displayNumberOfPressesLeft.innerHTML = countS;
//         displayNumberOfPressesRight.innerHTML = countL; 
        
        
//     })
// } 

//Set event listeners for button
//If 'gameStarted' variable is false, the key press is not counted
let gameStarted = false; 
//When button gets clicked, 'gameStarted' becomes true, and key presses are being counted
startButton.addEventListener('click', function() {
    gameStarted = true; 
    startGame();
})

//The 'gameStarted' variable will become false again after the game is finished
startButton.addEventListener('click', function() {
    setTimeout(() => {
        gameStarted = false;
    }, seconds);
})

// Get the number of key presses
function startGame() {
    document.addEventListener('keydown', event => {
        let key = event.key.toLowerCase();
        if (gameStarted === true) {
            if (key === 's') {
                countS++;
                displayNumberOfPressesLeft.innerHTML = countS;
            } else if (key === 'l') {
                countL++;
                displayNumberOfPressesRight.innerHTML = countL; 
            }
        } 
        
        let winner;
        getMostCounts();
        showTheWinner();  
    })
}
function getMostCounts() {
    setTimeout(() => {
        if (countS > countL) {
            winner = 's'
        } else if (countS < countL) {
            winner = 'l'
        } else {
            winner = 'both'
        }
        return winner;
    }, seconds);
}

function showTheWinner () {
    setTimeout(() => {
        if (winner === 's') {
            displayNumberOfPressesLeft.innerHTML = countS + '<br /> Congratulations <br /> You won!';
        } else if (winner === 'l') {
            displayNumberOfPressesRight.innerHTML = countL + '<br /> Congratulation <br /> You won!';
        } else {
            displayNumberOfPressesLeft.innerHTML = countS + '<br /> It\'s a draw!';
            displayNumberOfPressesRight.innerHTML = countL + '<br /> It\'s a draw!';
        }
    }, seconds);
    
}






// countdown timer
let timer = document.querySelector('#time');
startButton.addEventListener('click', (function() {
    let counter = getSeconds(); 
    span = document.getElementById('countdown');
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


