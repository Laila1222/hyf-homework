// variables
const modal = document.querySelector ('.modal');
const closeButton = document.querySelector ('.close-button');
const allProducts = [];
const errorMessage = document.querySelector ('.not-found-span');
const searchInput = document.querySelector ('input');
const purchaseButton = document.querySelector ('.purchase-button');
const inputButton = document.querySelector ('.input-button');

// Events
purchaseButton.addEventListener ('click', purchaseClicked);
inputButton.addEventListener ('click', openModalBySearchInput);
closeButton.addEventListener ('click', toggleModal);
window.addEventListener ('click', windowOnClick);

// Product class
class Product {
  constructor (name, price, description, url) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.url = url;
  }
}

// Available products
function addProductsToArray () {
  const dog = new Product (
    'dog',
    5000,
    'Cute puppy who will be always there for you.',
    'images/puppy.jpg'
  );
  const kitty = new Product (
    'kitty',
    6000,
    'Really lovely kitten.',
    'images/kitty.jpg'
  );
  const hamster = new Product (
    'hamster',
    3000,
    'Great if you want to have something small.',
    'images/hamster.jpg'
  );
  const pizza = new Product (
    'pizza',
    60,
    'If you are hungry.',
    'images/pizza.jpg'
  );
  const pasta = new Product (
    'pasta',
    50,
    'Pasta pista pusta',
    'images/pasta.jpg'
  );
  const flatscreen = new Product (
    'flat-screen',
    5000,
    'In other words, you can watch tv or movies on it.',
    'images/screen.jpg'
  );
  allProducts.push (dog, kitty, hamster, pizza, pasta, flatscreen);
  return allProducts;
}
addProductsToArray ();

class ShoppingCart {
  constructor (products) {
    this.products = products;
  }

  addProduct (productName, productPrice, productImage) {
    // Check if added product is already added to cart
    let exists = Boolean;
    for (let i = 0; i < this.products.length; i++) {
      console.log (this.products[i].name);
      if (this.products[i].name === productName) {
        exists = true;
      }
    }

    if (exists === true) {
      alert ('already exists');
      // If product is not on cart yet, add it.
    } else {
      this.products.push ({
        name: productName,
        price: productPrice,
        imageSrc: productImage,
      });
      this.renderProducts (productName, productPrice, productImage);
    }
  }

  removeProduct (productName, event) {
    // Get button element in html
    const buttonClicked = event.target;
    // Remove the whole li where the clicked button is
    buttonClicked.parentElement.parentElement.parentElement.remove ();
    // Remove product from shoppingcart
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice (i, 1);
      }

      if (!this.products[i]) {
        purchaseButton.style.display = 'none';
      }
    }
    updateCartTotal ();
  }

  removeAllProducts () {
    this.products = [];
    console.log (this.producst);
  }

  //   searchProduct (productName) {
  //     for (let product of this.products) {
  //       if (productName === product) {
  //         console.log (product);
  //       }
  //     }
  //   }

  getTotal () {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      const priceElement = this.products[i].price;
      const priceInNumbers = parseInt (priceElement);
      total += priceInNumbers;
    }
    return total;
  }

  renderProducts (itemName, itemPrice, itemUrl) {
    //   Render products that are added to shoppingcart
    const newShoppingCart = this;
    const nameOfItem = itemName;
    const li = document.createElement ('li');
    const cartRowContents = `
            <div class="cart-item cart-column">
                <img class ="cart-item-image" alt="img" src="${itemUrl}" >
                <span class="cart-item-title">${itemName}</span>
                <span class="cart-item-price">${itemPrice}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">Remove</button>
                </div>
                
            </div>`;
    li.innerHTML = cartRowContents;
    const shoppingcartUl = document.querySelector ('.shoppingcart-ul');
    shoppingcartUl.appendChild (li);
    li
      .getElementsByClassName ('btn-danger')[0]
      .addEventListener ('click', function () {
        newShoppingCart.removeProduct (nameOfItem, event);
      });
    li
      .getElementsByClassName ('cart-quantity-input')[0]
      .addEventListener ('change', quantityChanged);

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.style.display = 'block';
    updateCartTotal ();
    this.getUser ();
  }

  getUser () {
    let userName;
    const usernameDisplay = document.querySelector ('.username');
    // Get username from url
    fetch ('https://jsonplaceholder.typicode.com/users/1')
      .then (response => response.json ())
      .then (json => {
        userName = json.username;
        return userName;
      })
      .then (userName => {
        if (!userName) {
          console.log ('nemjó');
        } else {
          usernameDisplay.innerHTML = 'Shoppingcart of ' + userName;
        }
      })
      .catch (error => {
        console.log (error);
        usernameDisplay.innerHTML = 'Dont find username.';
      });
  }
}
// create new shoppingcart
let newShoppingCart = new ShoppingCart ([]);
// console.log (newShoppingCart);

// Render all products on page
function renderProducts (products) {
  for (let i = 0; i < products.length; i++) {
    const shopItem = document.createElement ('li');
    const allProductsUl = document.querySelector ('.all-products');
    allProductsUl.appendChild (shopItem);
    // create div for each item
    const itemContainer = document.createElement ('div');
    itemContainer.className = 'product-item-container';
    shopItem.appendChild (itemContainer);
    // create item image
    const itemImage = document.createElement ('img');
    itemImage.className = 'item-image';
    itemImage.src = products[i].url;
    itemContainer.appendChild (itemImage);
    // create item name
    const itemName = document.createElement ('span');
    itemName.className = 'item-name';
    itemName.innerText = products[i].name;
    itemContainer.appendChild (itemName);
    
    // create price
    const itemPrice = document.createElement ('span');
    itemPrice.className = 'item-price';
    itemPrice.innerText = products[i].price;
    itemContainer.appendChild (itemPrice);
    const itemCurrency = document.createElement('span');
    itemCurrency.innerHTML = 'DKK';
    itemCurrency.className = 'item-currency';
    itemContainer.appendChild(itemCurrency);
    // Create add to cart button
    const addItemToCartButton = document.createElement ('button');
    addItemToCartButton.className = 'add-item-button'
    addItemToCartButton.innerHTML = 'Add to cart';
    itemContainer.appendChild (addItemToCartButton);
    addItemToCartButton.addEventListener ('click', addToCartClicked);
  }
}

renderProducts (allProducts);

// Functions
// Add to cart button is clicked
function addToCartClicked (event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement;
  const title = shopItem.getElementsByClassName ('item-name')[0].innerText;
  const price = shopItem.getElementsByClassName ('item-price')[0].innerText;
  const imageSrc = shopItem.getElementsByClassName ('item-image')[0].src;
  //   Add products to shoppingcart
  newShoppingCart.addProduct (title, price, imageSrc);
  updateCartTotal ();
  //   Purchase button is visible
  purchaseButton.style.display = 'block';
}

// Quantity of product is set to 1 by default and cannot be lower than 1
function quantityChanged (event) {
  const input = event.target;
  if (isNaN (input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal ();
}

// Update total price
function updateCartTotal () {
  const newPrice = newShoppingCart.getTotal ();
  const cartTotalPrice = document.querySelector ('.cart-total-price');
  cartTotalPrice.innerText = newPrice;
}

// When clicked on purchase button
function purchaseClicked () {
  alert ('Thank you for your purchase');
  const cartItems = document.querySelector ('.cart-items');
  //   Remove all products from shoppingcart
  while (cartItems.hasChildNodes ()) {
    cartItems.removeChild (cartItems.firstChild);
  }
  newShoppingCart.removeAllProducts ();
  updateCartTotal ();
}

// Get product by input
function openModalBySearchInput () {
  const searchInputValue = document.querySelector ('input').value;
  let matchedProductDescription;
  let matchedProduct;
  let matchedProductPriceInModal;
  const addToCartButtonInProductInfo = document.querySelector (
    '#add-to-cart-in-product-info'
  );
  // Go through all products
  for (let i = 0; i < allProducts.length; i++) {
    if (searchInputValue === allProducts[i].name) {
      matchedProduct = allProducts[i].name;
      matchedProductDescription = allProducts[i].description;
      matchedProductPriceInModal = allProducts[i].price;
      addedProduct = allProducts[i];
      productUrl = allProducts[i].url;
    }
    //   If there's no input value, or doesn't match with names, display error
    if (!searchInputValue || searchInputValue !== allProducts[i].name) {
      errorMessage.style.display = 'inline-block';
    }
  }
  // Add product to cart from modal
  addToCartButtonInProductInfo.addEventListener ('click', function () {
    // add chosen product to the newShoppingCart array
    newShoppingCart.addProduct (
      matchedProduct,
      matchedProductPriceInModal,
      productUrl
    );
  });
  //Insert image
  const imageUrl = document.querySelector ('.modal img');
  imageUrl.src = productUrl;
  // Insert product name
  const productTitle = document.querySelector ('h4');
  productTitle.innerHTML = matchedProduct.toUpperCase ();
  // Insert description
  const productDescription = document.querySelector ('p');
  productDescription.innerHTML = matchedProductDescription;
  // Insert price
  const productPriceInModal = document.querySelector ('h5');
  productPriceInModal.innerHTML = 'Price: ' + matchedProductPriceInModal;

  // Show modal
  toggleModal ();
}

// Remove error message on keypress
searchInput.addEventListener ('keypress', function () {
  errorMessage.style.display = 'none';
});

//Show modal
function toggleModal () {
  modal.classList.toggle ('show-modal');
}

function windowOnClick (event) {
  if (event.target === modal) {
    toggleModal ();
  }
}

// Close modal
function closeModal (modal) {
  modal.style.display = 'none';
}
