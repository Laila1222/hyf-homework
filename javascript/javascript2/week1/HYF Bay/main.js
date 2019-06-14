console.log('Script loaded');

const products = getAvailableProducts();
renderProducts(products);


function renderProducts(array) {
    for (let productItem of array) {
    // Create main Ul and Li for products
    const mainUlOfProducts = document.querySelector(".products ul");
    const mainLiOfProducts = document.createElement("li");
    const childUl = document.createElement("ul");
    mainUlOfProducts.appendChild(mainLiOfProducts);
    mainLiOfProducts.appendChild(childUl);
    
    // Add list with product information to childUl
    createLi(productItem.name, childUl, "", "");
    createLi(productItem.price, childUl, "", "");
    createLi(productItem.rating, childUl, "", "");
    createLi("Ships to", childUl, "shipsTo", "");
    }
}

//Create ul for Shipto ----> something is off here :/ - still working on it! 
function createUltoShip() {
    const shipsUl = document.createElement("ul");
    shipsToLine.appendChild(shipsUl);  
    
    for (let items of products) {
        console.log(items.shipsTo)
        let countries = document.createElement("li");
        countries.innerHTML = items.shipsTo;
        shipsUl.appendChild(countries);
        console.log(items.shipsTo) 
    }  
}
//Gives the countries to shipTo
const shipsToLine = document.getElementById("shipsTo");
function createLi(value, parent, id, className) {
    newLi = document.createElement("li");
    newLi.innerHTML = value;
    newLi.id = id;
    newLi.class = className;
    parent.appendChild(newLi);
};
createUltoShip();
