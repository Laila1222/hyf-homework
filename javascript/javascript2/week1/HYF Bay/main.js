console.log('Script loaded');

// console.log(getAvailableProducts());

let testProductNamesWeird = ["SomethingAmazing", "Flat screen", "Mobile phone", "Wallet", "Visible Soap", "Dotted Kitten", "Open flowers", "Clean dirt"];
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
//Select product ul
let productUl = document.querySelector("section.products ul");




const products = getAvailableProducts();
console.log(products)
renderProducts(products);


function renderProducts(array) {
    // Create main Ul and Li for products
    let mainUlOfProducts = document.querySelector(".products ul");
    
    
    

    for (let productItem of array) {
        //Countries are seperated by ', '
    const mainLiOfProducts = document.createElement("li");
    let countryArrayToString = productItem.shipsTo.join(', ');
    mainLiOfProducts.innerHTML = productItem.name + " | " + productItem.price + " | " + productItem.rating + " | " + countryArrayToString;
    mainUlOfProducts.appendChild(mainLiOfProducts);

    }
}
