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