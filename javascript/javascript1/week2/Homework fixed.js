// Flight booking fullname function
function getFullname (firstname, surname, useFormalName) {
    if (useFormalName == true) {
        return "Lord " + firstname + " " + surname; 
    }
    return firstname + " " + surname;
};
const fullname1 = getFullname("Lilla", "Kőrösi", false);
console.log(fullname1);

// // Event application
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
function getEventWeekday (days) {
    const todayDay = today.getDay();
    let eventDay = todayDay + days;
    if (days > 7) {
        const remainder = days % 7;
        eventDay = todayDay + remainder;
    }
    console.log("The event is going to be on a " + dayOfWeek[eventDay]);
}

console.log(today);
getEventWeekday(10);

//Weather wear

function whatToWear (temperature) {
    if (temperature < 10) {
        console.log("It's gonna be very cold.");
    } else if ( temperature >= 10 && temperature <= 20) {
        console.log("it might get a bit chilly.");
    } else {
        console.log("its gonna be pretty warm.");
    }
}

whatToWear(-4);

// Student manager
const class07Students = ["anka", "gerda", "paksi", "matild", "Gerbera", "kkjklj" ];
count = 0;
function addStudentsToClass(studentName) {
    let message = "";
    let status = true;
    getNumberOfStudents(class07Students);
    if (count < 6 && studentName) {
        for (let students of class07Students) {
            if (studentName === students) {
                message = studentName + " is already in the class.";  
                status = false;
            } 
                
        } 
                
    } else {
        message = "cannot add more people to class.";
        status = false;
    }
    if (studentName === "Queen") {
        
        status = true;
    }
    if (studentName === "") {
        message = "No name was typed in."
        status = false;
    }
    if (status == true) {
        class07Students.push(studentName);
        message = studentName + " added."
    }
    return message;
    
}
console.log(addStudentsToClass("matild"));
console.log(addStudentsToClass("jeno"));
console.log(addStudentsToClass("Queen"));
console.log(addStudentsToClass(""));
console.log(class07Students);

function getNumberOfStudents(group) {
    count = group.length;
    return count;
}

// Candy Helper
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    switch (candyType) {
        case "Sweet":
        case "Chocolate":
        case "Toffee":
        case "Chewing-gum":
            boughtCandyPrices.push({candyType, weight});
            break;
        default: 
        console.log("Invalid candy type.");
    }
};

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
    let spentMoney = 0;
    let pricePaid = 0;
    for (let boughtCandies of boughtCandyPrices) {
        if (boughtCandies.candyType === "Sweet") {
            pricePaid = boughtCandies.weight * 0.5;
        } else if (boughtCandies.candyType === "Chocolate") {
            pricePaid = boughtCandies.weight * 0.5;
        } else if (boughtCandies.candyType === "Toffee") {
            pricePaid = boughtCandies.weight * 0.5;
        } else if (boughtCandies.candyType === "Chewing-gum") {
            pricePaid = boughtCandies.weight * 0.5;
        } else {
            console.log("invalid candyType");
        }

        spentMoney += pricePaid;
        
    
    } 
    if (spentMoney <= amountToSpend) {
        console.log("You can buy more candy.");
    } else {
        console.log("Stop buying.");
    }
}


addCandy("Chocolate", 50);
addCandy("Sweet", 30);


canBuyMoreCandy();



