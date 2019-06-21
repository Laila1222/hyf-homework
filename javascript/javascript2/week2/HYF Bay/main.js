console.log ('Script loaded');

const allProducts = getAvailableProducts ();
const foo = allProducts


const productsUl = document.querySelector ('section.products ul');
// console.log (productsUl);

function renderProducts (products) {
  productsUl.innerHTML = '';
  products.forEach (product => {
    const li = document.createElement ('li');

    const shipsToHTML = product.shipsTo.reduce (
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li class="productName">${product.name}</li>
                <li class="productPrice">${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
                <li><button class="shoppingCartBtn">Add to cart</button></li>
            </ul>
        `;
    productsUl.appendChild (li);
  });
}

renderProducts (allProducts);

function createElement (tag, value, parent, id, className) {
  newElement = document.createElement (tag);
  newElement.innerHTML = value;
  newElement.id = id;
  newElement.className = className;
  parent.appendChild (newElement);
  return newElement;
}

renderProducts (allProducts);

// Filter products
const searchBar = document.querySelector ('.search input');

searchBar.addEventListener ('keyup', filterForProductNames);



function filterForProductNames () {
  const searchTerm = document
    .querySelector ('div.search input')
    .value.toLowerCase ()
    .trim ();
  if (!searchTerm) {
    renderProducts (allProducts);
  }
  // console.log(searchTerm)
  const matchedProducts = allProducts.filter (product =>
    product.name.toLowerCase ().startsWith (searchTerm)
  );
  renderProducts (matchedProducts);
}


//Select sorting options
const sortOptions = document.querySelector ('div.sort select');
//Event listener
sortOptions.addEventListener ('change', selectOption);

function selectOption () {
  let matchedProducts;
  if (sortOptions.value === 'cheap') {
    matchedProducts = allProducts.sort ((a, b) => a.price - b.price);
    renderProducts (matchedProducts);
  } else if (sortOptions.value === 'name') {
    matchedProducts = allProducts.sort ((a, b) => (a.name > b.name ? 1 : -1));
    renderProducts (matchedProducts);
  } else if (sortOptions.value === 'expensive') {
    matchedProducts = allProducts.sort ((a, b) => b.price - a.price);
    renderProducts (matchedProducts);
  }
}

//Ships to - filter where the products are shipped to.
const selectShipsToOption = document.querySelector ('div.filters select');
selectShipsToOption.addEventListener ('change', selectCountry);

function selectCountry () {
  let matchedProducts;
  const countryInput = selectShipsToOption.value;
  if (countryInput === 'all') {
    renderProducts (allProducts);
  } else {
    // countriesOfProducts = 
    // foo = allProducts.map(product => product.name);
    console.log(foo)
    matchedProducts = allProducts.filter((item) =>
      item.shipsTo.toLowerCase().includes(countryInput))
    
    renderProducts (matchedProducts);
  }
}

//Add picture of country when selected
// const pictureDatabase = [{name: 'denmark', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png"},
//    {name: 'Sweden', src: 'https://google.com'}];
// const divForPicture = document.querySelector('div.picture');
// function addPicture() {
//   const countryInput =  selectShipsToOption.value;
//   const pictureName = pictureDatabase.name;
//   if (countryInput === pictureName) {
//     const pictureElement = document.createElement('img');
//     pictureElement.src = image;
//     divForPicture.appendChild('pictureElement'); 
//   }
// }

//Add to cart
// theButton = document.querySelector('button.theButton');
// console.log(theButton)
const cartButton = document.querySelector('button.shoppingCartBtn');
console.log(cartButton)
cartButton.addEventListener('click', addToCart);


function addToCart() {

  //collect data from all products list
  // const addedProductName = document.querySelector('li.productName').innerHTML;
  const addedProductPrice = document.querySelector('li.productPrice').innerHTML;
  console.log(addedProductName);
  //insert it into shopping cart
  //create li in shopping cart
  // const shoppingCartList = document.createElement('li');
  // shoppingCartList.innerHTML = addedProductName + ' ' + addedProductPrice;
  // const shoppingCartUl = document.querySelector('section.cart ul');
  // shoppingCartUl.appendChild(shoppingCartList);

  

}







