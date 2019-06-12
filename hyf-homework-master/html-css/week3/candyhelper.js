// Candy helper
// author: Lilla Kőrösi


let boughtCandyPrices = {
        "Sweet": 0,
        "Chocolate": 0,
        "Toffee": 0,
        "Chewing-gum": 0
};
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    let candyPrice;
    if (candyType === "Sweet") {
        candyPrice = weight * 0.5;
        boughtCandyPrices.Sweet = candyPrice;
    } else if (candyType === "Chocolate") {
        candyPrice = weight * 0.7;
        boughtCandyPrices.Chocolate = candyPrice;
    } else if (candyType === "Toffee") {
        candyPrice = weight * 1.1;
        boughtCandyPrices.Toffee = candyPrice;
    } else if (candyType === "Chewing-gum") {
        candyPrice = weight * 0.03;
        boughtCandyPrices["Chewing-gum"] = candyPrice;
    } else {
        console.log("Invalid candy type.");
    }
};

function canBuyMoreCandy() {
    let sum = 0;
    for (let el in boughtCandyPrices) {
        if (boughtCandyPrices.hasOwnProperty(el)) {
            sum += parseFloat(boughtCandyPrices[el]);
        }
    }
    
    if (sum >= amountToSpend) {
        console.log("Enough candy for you!");
    } else {
        console.log("You can buy more candy, so please do!")
    }
};


canBuyMoreCandy();
