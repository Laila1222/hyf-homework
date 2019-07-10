// Functions moving the circles
function moveRed() {
    return moveElement(document.querySelector('#red-circle'), {x: 20, y: 310})
}
function moveBlue() {
   return moveElement(document.querySelector('#blue-circle'), {x: 400, y: 300})
}
function moveGreen () {
   return moveElement(document.querySelector('#green-circle'), {x: 400, y: 20})
}


// Translate one by one
function translateOneByOne() {
   return new Promise((resolve, reject) => {
    moveRed();
    setTimeout(() => {
    moveBlue()   
   }, 2000);
   setTimeout(() => {
       moveGreen()
   }, 4000);
   setTimeout(() => {
       resolve('all moved seperately')
       reject(new Error) 
   }, 6000); 
   
   })
    
}


function moveItLater(callback, time) {
    setTimeout(() => {
        callback;
    }, time);
}
// translateOneByOne()
// .then(console.log)
// .catch(console.log);





// Move at the same time, then log something
let promises = [moveRed(), moveGreen(), moveBlue()];

Promise.all(promises)
.then(() => console.log('all moved'))
.catch(console.log)

