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
const searchInput = document.querySelector('input');
const addToCartButtonInProductInfo = document.querySelector('#add-to-cart-in-product-info');
const allProductsUl = document.querySelector('.all-products')



class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

function addProductsToArray () {
    const dog = new Product('dog', 5000, 'Cute puppy who will be always there for you.');
    const kitty = new Product('kitty', 6000, 'Really lovely kitten.');
    const hamster = new Product('hamster', 3000, 'Great if you want to have something small.');
    const pizza = new Product('pizza', 60,'If you are hungry.');
    const pasta = new Product('pasta', 50);
    const flatscreen = new Product('flat-screen', 5000, 'In other words, you can watch tv or movies on it.');
    allProducts.push(dog, kitty, hamster, pizza, pasta, flatscreen);
    return allProducts;
}
addProductsToArray();

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

    removeProduct(product, element) {
        // console.log(product)
        let refreshedShoppingCart;
        let removedElement;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === product) {
                this.products.splice(i, 1);
                removedElement = product;
            }
            refreshedShoppingCart = this.products;
        }
        element.parentNode.removeChild(element);
        console.log(removedElement)
        renderProducts(refreshedShoppingCart); itt hagytam abba, hogy itt be kéne renderelni az új listát!!
        // console.log(refreshedShoppingCart)
        // console.log(removedElement + 'has been removed');
        
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

    renderProducts() {
        const shoppingcartUl = document.querySelector('.shoppingcart-ul');

        for (let i= 0; i < this.products.length; i++) {
            const li = document.createElement('li');
            shoppingcartUl.appendChild(li); 
            li.innerHTML = this.products[i].name + ': ' + this.products[i].price + ' DKK';
            // create remove from cart button
            const removeFromCartButton = document.createElement('button');
            removeFromCartButton.innerHTML = 'Remove From cart';
            li.appendChild(removeFromCartButton);
            const shoppingCart = this;
            console.log(shoppingCart.products[i].name)
            const totalPrice = document.querySelector('#total-price');
            // console.log(totalPrice);
            let total = this.getTotal();
            if (total) {
                totalPrice.innerHTML = 'Total price: ' + total;
            } else {
                totalPrice.innerHTML = 'Nothing in cart'
            }
            // console.log(shoppingCart.products[i].name)
            let removeThisProduct;


            removeFromCartButton.addEventListener('click', function() {
                removeThisProduct = shoppingCart.products[i].name
                    console.log(removeThisProduct);
                    
                    
                    shoppingCart.removeProduct(removeThisProduct, li);

                    console.log(shoppingCart)
                    // total = shoppingCart.getTotal();
                    // // console.log(total);
                    // totalPrice.innerHTML = 'Total: ' + total;

                
                
                 
             })
        }

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
let newShoppingCart = new ShoppingCart ([]);
console.log(newShoppingCart)


function renderProducts (products) {
    console.log(products)
    let addedProduct;
    let addToCartButton;
    let removedProduct;
    for (let i = 0; i < products.length; i++) { 
        const li = document.createElement('li');
        allProductsUl.appendChild(li);
        li.innerHTML = products[i].name + ': ' + products[i].price + ' Dkk';
        // Add to cart button
        addToCartButton = document.createElement('button');
        addToCartButton.innerHTML = 'Add to cart';
        allProductsUl.appendChild(addToCartButton);
        const shoppingcartUl = document.querySelector('.shoppingcart-ul')
        addToCartButton.addEventListener('click', function() {
            cleanItems(shoppingcartUl);
            newShoppingCart.addProduct(products[i]);
        
            newShoppingCart.renderProducts();



        })
        
    }
}

renderProducts(allProducts);

function toggleShoppingcartModal() {
    console.log('clicked me')
    shoppingCartModal.classList.toggle('show-modal');
    newShoppingCart.renderProducts();
}

function cleanItems (item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
}








// Get product by input
const button = document.querySelector('.input-button');
button.addEventListener('click', function() {
    const searchInputValue = document.querySelector('input').value;
    let matchedProductDescription;
    let matchedProduct;
    let matchedProductPriceInModal;
    let addedProduct;
    
    console.log('clicked');
    for (let i = 0; i < allProducts.length; i++) {
        // console.log(allProducts[2].name)
        // console.log(searchInputValue)
        if (searchInputValue === allProducts[i].name) {
            // console.log(searchInputValue + 'is found and it is: ' + allProducts[i].name)
            matchedProduct = allProducts[i].name;

            matchedProductDescription = allProducts[i].description;
            matchedProductPriceInModal = allProducts[i].price;
            addedProduct = allProducts[i];
            
            
        } if (!searchInputValue || searchInputValue !== allProducts[i].name) {
            errorMessage.style.display = 'inline-block';
        }
    }
    const addToCartAction = addToCartButtonInProductInfo.addEventListener('click', function () {  
        // add chosen product to the newShoppingCart array
        newShoppingCart.products.push(addedProduct);
        console.log(newShoppingCart)
    })
    productTitle.innerHTML = matchedProduct.toUpperCase();
    productDescription.innerHTML = matchedProductDescription;
    productPriceInModal .innerHTML = 'Price: ' + matchedProductPriceInModal;
 
    
    toggleModal();  
})

// Remove error message on keypress
searchInput.addEventListener('keypress', function() {
    errorMessage.style.display = 'none';
})



//modal functions
function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

function closeModal (modal) {
    modal.style.display = 'none';
}






//Look at the shopping cart
// lookAtShoppingCartButton.addEventListener('click', toggleShoppingcartModal);
// closeButton2.addEventListener('click', toggleModal);

window.addEventListener('click', windowOnClick);
// function toggleShoppingcartModal () {
//     shoppingCartModal.classList.toggle('show-modal');
//     // const shoppingCartUl = document.querySelector('.shoppingcart-ul');
//     // const userNameDisplay = document.querySelector('.modal-content h3');
//     newShoppingCart.renderProducts();
//     // if (newShoppingCart) {
//     //     // newShoppingCart.getUser(userNameDisplay);
//     //     newShoppingCart.renderProducts();
//     // }
//     // const totalAmount = document.querySelector('#total-price')
//     // totalAmount.innerHTML = newShoppingCart.getTotal();
//     // totalLi.innerHTML = 'Total amount: ' + totalAmount;
// }



// function refreshShoppingCart() {
//     newShoppingCart.renderProducts();
//     console.log(newShoppingCart)
// }

// function logHello() {
//     console.log('hrello')
//     myArray.push('me');
//     console.log(myArray)
// }
// const myArray = [];
// const meButton = document.querySelector('#me');
// meButton.addEventListener('click', refreshShoppingCart)

// // meButton.removeEventListener('click', logHello);


