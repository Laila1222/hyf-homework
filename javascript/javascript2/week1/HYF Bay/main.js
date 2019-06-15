console.log('Script loaded');

const products = getAvailableProducts();
renderProducts(products);
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name);
// }
// for (let items of products) {
//     console.log(items.shipsTo[0]);
// }
// console.log(products.shipsTo)

function renderProducts(array) {
    // Create main Ul and Li for products
    
    
    
    // const childUl = document.querySelector(".childUl");
    // console.log(childUl);
    

    for (let productItem of array) {
        
        const mainUlOfProducts = document.querySelector(".products ul");
        // const mainLiOfProducts = document.createElement("li");
        // const childUl = document.createElement("ul");
        // mainUlOfProducts.appendChild(mainLiOfProducts);
        // mainLiOfProducts.appendChild(childUl);
        const mainLi = createElement("li", "", mainUlOfProducts, "", "mainLi");
        
        const childUl = createElement("ul", "", mainLi, "", "childUl");
        console.log(childUl);

        
        // const childUl = createElement("ul", "", mainLi, "", "childUl");

    //Add list with product information to childUl
    createElement("li", productItem.name, childUl, "", "");
    createElement("li", productItem.price, childUl, "", "");
    createElement("li", productItem.rating, childUl, "", "");
    createElement("li", "Ships to", childUl, "", "shipsTo");

    //create ul for shipto
    // const shipsToLine = document.getElementsByClassName("shipsTo");
    // console.log(shipsToLine);
    // const shipsUl = document.createElement("ul");
    // shipsToLine.appendChild(shipsUl); 

    
    }
    

    //loop through ships to
    // for (let countries of products) {
    //     console.log(countries.shipsTo);
        
    //     createLi(countries.shipsTo, shipsUl, "", "");
    // }
    
    
}

//Create ul for Shipto ----> something is off here :/ - still working on it! 
// function createUltoShip() {
     
    
//     for (let items of products) {
//         console.log(items.shipsTo)
//         let countries = document.createElement("li");
//         countries.innerHTML = items.shipsTo;
//         shipsUl.appendChild(countries);
//         console.log(items.shipsTo) 
//     }  
// }
//Gives the countries to shipTo

function createElement(tag, value, parent, id, className) {
    newElement = document.createElement(tag);
    newElement.innerHTML = value;
    newElement.id = id;
    newElement.className = className;
    parent.appendChild(newElement);
    return newElement;
};
// createUltoShip();
