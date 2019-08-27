// Homework - JavaScript Week 1

//Age-ify (A future age calculator)
let yearOfBirth = 1993;
let yearFuture = 2045;
let futureAge = yearFuture - yearOfBirth;
console.log("You will be " + futureAge + " years old in " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2015;
let dogYearFuture = 2045;
let dogFutureAge = dogYearFuture - dogYearOfBirth;
let dogYear = dogFutureAge * 7;
let shouldShowResultInDogYear = true;
if (shouldShowResultInDogYear === true){
    console.log("Your dog will be " + dogFutureAge + " in " + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + dogYear + " years old in " + dogYearFuture + "."); 
};  

// House pricey (A house price estimator)
// Peter's house price
let width = 8;
let depth = 10;
let height = 10;
let gardenSizeinM2 = 100;
let volumeInMeters = width * depth * height;
let cost = 2500000;
let realHousePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeinM2 * 300);
if (realHousePrice < cost) {
    console.log("Peter payed more than he should have.")
} else if (realHousePrice === cost) {
    console.log("The price Peter payed matches with the real value of the house.")
} else {
    console.log("Peter payed less than the house is worth -> good deal!")
};

//Julia's house price
let width2 = 5;
let depth2 = 11;
let height2 = 8;
let gardenSizeinM22 = 70;
let volumeInMeters2 = width2 * depth2 * height2;
let cost2 = 1000000;
let realHousePrice2 = (volumeInMeters2 * 2.5 * 1000) + (gardenSizeinM22 * 300);
if (realHousePrice2 < cost2) {
    console.log("Julia payed more than he should have.")
} else if (realHousePrice2 === cost2) {
    console.log("The price Julia payed matches with the real value of the house.")
} else {
    console.log("Julia payed less than the house is worth -> good deal!")
};

//Ez Namey (Startup name generator)
let firstWords = ["pretty", "cute", "great", "awesome", "hello", "whynot", "out", "better", "whoop", "amazing"];
let secondWords = ["world", "hub", "container", "site", "doer", "collection", "group", "cathouse", "puppy", "giraffe"];
let startupName = firstWords[Math.floor(Math.random()*firstWords.length)] + secondWords[Math.floor(Math.random()*secondWords.length)];
console.log("Your startup name is " + startupName + ", and it is " + startupName.length + " characters long.")  ;