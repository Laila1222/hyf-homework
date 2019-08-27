// Create funtions that are used in these different ways:


// Create an object that has a key whose value is a function. Try calling this function.

//Functions that log something
const logHello = () => {
    console.log('Hello');
}

const logMyName = () => {
    console.log('My name is Lilla');
}

const logOccupation = () => {
    console.log('I am a student.');
}

function logMyHobby () {
    console.log('Swimming')
}

//Function calling an array of functions
function callFunctions(array) {
    for (let item of array) {
        item();
    }
}

const arr = [logHello, logMyName, logOccupation, logMyHobby];
// callFunctions(arr);


// Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
    name: 'log my name', 
    call: function() {
        console.log('Lilla')
} }


myObject.call();
