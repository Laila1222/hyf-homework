/**
 * Weather generator
 *
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Lilla Kőrösi
 */

function clothesToWear(temp) {
    if (temp < 10) {
        console.log("Wear warm jackets, and boots.");
    } else if (temp > 10 && temp < 21) {
        console.log("It can still be a bit chilly, so take some lighter jacket with you, and long pants.");
    } else {
        console.log("You'll be boiling, unless you wear t-shirt/top, and shorts.");
    }
};

clothesToWear(15);

