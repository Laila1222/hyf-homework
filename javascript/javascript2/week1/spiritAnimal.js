// Spirit animal name generator
const spiritAnimals = ["The crying butterfly", "Amazing Ant", "Crazy Kitten", "Bobo doggu", "Hello owl", "mizi mouse", "rity rat", "munku squarrel", "miao cat", "mini mius", "liae loa"]

const btn = document.getElementById("btn");
const inputField = document.getElementById("nameInput");


// Spirit animal name displayed when user clicks on button. 
btn.addEventListener('click', whenClicked);

// //Spiritanimal name displayed when user hovers on input field. 
// inputField.addEventListener("mouseover", whenClicked);

// // // Spirit animal name being displayed, when user types
// inputField.oninput = function() {whenClicked()};



function whenClicked() {
    let nextAnimal = Math.floor((Math.random() * 9) + 1);
        let input = document.getElementById("nameInput").value;
        let result = document.getElementById("displayName");
        if (input === "") {
                result.innerHTML = "You didn't write your name."
        } else {
                result.innerHTML = input + " - " + spiritAnimals[nextAnimal];
        }     
}
