
/**
 * Event application
 *
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Lilla Kőrösi
 */

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date("26/May/2019 10:30"); //Today was a Sunday.
let days = 5; //The event is 5 days.
let result;

function addDays(date, plusdays) {
    result = new Date(date);
    result.setDate(result.getDate() + plusdays);
    return result.getDay();
}

let eventsDayOfTheWeek = addDays(today, days);
console.log("Your event will be held on a " + daysOfTheWeek[(eventsDayOfTheWeek)] + " as in " + days + " days.");
