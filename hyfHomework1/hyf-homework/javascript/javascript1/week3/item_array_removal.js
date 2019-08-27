// Item array removal
// By Lilla Kőrösi
// Hack Your Future - JavaScript week 3

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);


function removeRandomNumber() {
    let theNumber = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        theNumber = numbersArray[i];
        if (theNumber === randomNumber) {
            numbersArray.splice(i, 1);
            console.log(theNumber + " has been removed.");
        }
    }
}

removeRandomNumber();
console.log(numbersArray);