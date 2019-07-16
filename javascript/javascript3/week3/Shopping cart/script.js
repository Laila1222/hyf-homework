// variables
const modal = document.querySelector('.modal');
const shoppingCartModal = document.querySelector('.shoppingcart-modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');
const closeButton2 = document.querySelector('.close-button2');
const productTitle = document.querySelector('h4');
const productDescription = document.querySelector('p');
const productPriceInModal = document.querySelector('h5');
const allProducts = [];
const lookAtShoppingCartButton = document.querySelector('.get-shoppingcart');
const errorMessage = document.querySelector('.not-found-span');
console.log(errorMessage);
const searchInput = document.querySelector('input');

// console.log(shoppingCartModal);

// console.log(closeButton2)


class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct (product) {
        this.products.push(product);
    }

    logAll () {
        console.log(this.products)
    }

    removeProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i] === product) {
                this.products.splice(i, 1);
            }
        }
    }

    searchProduct(productName) {
        for (let product of this.products) {
            if (productName === product) {
                console.log(product);
            } 
        }
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
        
    }

    renderProducts(element) {
        //create Li
        const ul = document.querySelector('ul');
        const totalAmount = this.getTotal();
        
        
       
        for (let i = 0; i < this.products.length; i++) {
            const li = document.createElement('li');
            element.appendChild(li);
            li.innerHTML = this.products[i].name + ': ' + this.products[i].price + ' Dkk';
        }
        const totalLi = document.createElement('li');
        element.appendChild(totalLi);
        totalLi.innerHTML = 'Total amount: ' + totalAmount;

        
    }

    getUser(element) {
        let userName;
        // const h2 = document.querySelector('h2');
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => {
            userName = json.username;
            return userName;
        })
        .then(userName => {
            if (!userName) {
                console.log('nemjó');
                
                
            } else { 
                element.innerHTML = 'Shoppingcart of ' + userName;

            }
        })
        .catch(error => { 
            console.log(error)
            element.innerHTML = 'Dont find username.'
        })
        
    }
}

function addProducts () {
    const dog = new Product('dog', 5000, 'Cute puppy who will be always there for you.');
    const kitty = new Product('kitty', 6000, 'Really lovely kitten.');
    const hamster = new Product('hamster', 3000, 'Great if you want to have something small.');
    const pizza = new Product('pizza', 60,'If you are hungry.');
    const pasta = new Product('pasta', 50);
    const flatscreen = new Product('flat-screen', 5000, 'In other words, you can watch tv or movies on it.');
    allProducts.push(dog, kitty, hamster, pizza, pasta, flatscreen);
    return allProducts;
}
addProducts();

const dog = new Product('dog', 5000, 'Cute puppy who will be always there for you.');
const kitty = new Product('kitty', 6000, 'Really lovely kitten.');
const hamster = new Product('hamster', 3000, 'Great if you want to have something small.');
const pizza = new Product('pizza', 60,'If you are hungry.');
const pasta = new Product('pasta', 50);
const flatscreen = new Product('flat-screen', 5000, 'In other words, you can watch tv or movies on it.');
allProducts.push(dog, kitty, hamster, pizza, pasta, flatscreen);





const button = document.querySelector('.input-button');
button.addEventListener('click', function() {
    
    const searchInputValue = document.querySelector('input').value;
    let matchedProductDescription;
    let matchedProduct;
    let matchedProductPrice;
    console.log('clicked');
    for (let i = 0; i < allProducts.length; i++) {
        // console.log(allProducts[2].name)
        // console.log(searchInputValue)
        if (searchInputValue === allProducts[i].name) {
            // console.log(searchInputValue + 'is found and it is: ' + allProducts[i].name)
            matchedProduct = allProducts[i].name;
            matchedProductDescription = allProducts[i].description;
            matchedProductPriceInModal = allProducts[i].price;
            
        } if (!searchInputValue || searchInputValue !== allProducts[i].name) {
            errorMessage.style.display = 'inline-block';
        }
    }
    productTitle.innerHTML = matchedProduct.toUpperCase();
    productDescription.innerHTML = matchedProductDescription;
    productPriceInModal .innerHTML = 'Price: ' + matchedProductPrice;
    toggleModal();  
})


searchInput.addEventListener('keypress', function() {
    errorMessage.style.display = 'none';
})
//modal


function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

// trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);


let newShoppingCart = new ShoppingCart ([]);
console.log(newShoppingCart)


// List all products
function listAllProducts () {
    const ulAllProducts = document.querySelector('.all-products');
    for (let product of allProducts) {
        productName = product.name;
        productPrice = product.price;
        const li = document.createElement('li');
        ulAllProducts.appendChild(li);
        const addToCartButton = document.createElement('button');
        addToCartButton.innerHTML = 'Add to cart';
        li.innerHTML = productName + ' price: ' + productPrice + 
            ' DKK';
        ulAllProducts.appendChild(addToCartButton);
        // When add to shopping cart button is clicked
        addToCartButton.addEventListener('click', function () {
            const addedProduct = product;
            // add chosen product to the newShoppingCart array
            newShoppingCart.products.push(addedProduct);
            console.log(newShoppingCart)

        })
    }
}
listAllProducts();


//Look at the shopping cart
lookAtShoppingCartButton.addEventListener('click', toggleShoppingcartModal);
closeButton2.addEventListener('click', toggleShoppingcartModal);
window.addEventListener('click', windowOnClick);
function toggleShoppingcartModal () {
    shoppingCartModal.classList.toggle('show-modal');
    const shoppingCartUl = document.querySelector('.shoppingcart-ul');
    const userNameDisplay = document.querySelector('.modal-content h3');

    if (newShoppingCart) {
        newShoppingCart.getUser(userNameDisplay);
        newShoppingCart.renderProducts(shoppingCartUl);
    }
    

}
// const myCart = new ShoppingCart([]);
// myCart.addProduct(kitty);
// myCart.addProduct(dog);
// console.log(myCart)

// const newShoppingCart = new ShoppingCart([flatscreen, dog, kitty])
// console.log(allProducts);


// newShoppingCart.addProduct(pizza);
// newShoppingCart.addProduct(dog);
// newShoppingCart.searchProduct(kitty);
// newShoppingCart.addProduct(hamster)
// newShoppingCart.getTotal();
// // newShoppingCart.renderProducts();
// newShoppingCart.getUser();

// newShoppingCart.logAll();

// console.log(newShoppingCart)
