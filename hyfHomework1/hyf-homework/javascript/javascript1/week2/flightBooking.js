/**
 * Flight booking fullname function
 *
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Lilla Kőrösi
 */



let firstname;
let surname;
let useFormalName = new Boolean(); 

function getFormalFullName(firstname, surname, useFormalName) {
    if (useFormalName) {
        return "Queen/King" + " " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}

console.log(getFormalFullName("Lilla", "Kőrösi", true));


// Improved version

// Flight booking fullname function
function getFullname (firstname, surname, useFormalName) {
    if (useFormalName == true) {
        return "Lord " + firstname + " " + surname; 
    }
    return firstname + " " + surname;
};
const fullname1 = getFullname("Lilla", "Kőrösi", false);
console.log(fullname1);