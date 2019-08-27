console.log ('Script loaded');
// Variables
const allProducts = getAvailableProducts ();
const productsUl = document.querySelector ('section.products ul');

//Render products
function renderProducts (products) {
  productsUl.innerHTML = '';
  products.forEach (product => {
    const li = document.createElement ('li');
    const shipsToHTML = product.shipsTo.reduce (
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    //Create and append button
    const btn = document.createElement ('button');
    btn.innerHTML = 'Add to cart';
    li.appendChild (btn);
    btn.addEventListener ('click', () => {
      const cartUl = document.querySelector ('section.cart ul');
      const cartLi = document.createElement ('li');
      cartLi.innerHTML = `
                  <ul>
                    <li class="productOnCartName">${product.name}</li>
                    <li class="productOnCartPrice">${product.price}</li>
                  </ul>
                `;
      cartUl.appendChild (cartLi);
    });
    productsUl.appendChild (li);
  });
}

//Create new element
function createElement (tag, value, parent, id, className) {
  newElement = document.createElement (tag);
  newElement.innerHTML = value;
  newElement.id = id;
  newElement.className = className;
  parent.appendChild (newElement);
  return newElement;
}

// Filter product search on typing
const searchBar = document.querySelector ('.search input');
//Event Listener for typing searchword
searchBar.addEventListener ('keyup', filterForProductNames);

function filterForProductNames () {
  const searchTerm = document
    .querySelector ('div.search input')
    .value.toLowerCase ()
    .trim ();
  if (!searchTerm) {
    renderProducts (allProducts);
  }
  const matchedProducts = allProducts.filter (product =>
    product.name.toLowerCase ().includes (searchTerm)
  );
  renderProducts (matchedProducts);
}

//Select sorting options
const sortOptions = document.querySelector ('div.sort select');
//Event listener for selecting sort options
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

//Showing the product that are shipped to a chosen country
const selectShipsToOption = document.querySelector ('div.filters select');
//Event listener for choosing a country
selectShipsToOption.addEventListener ('change', selectCountry);

function selectCountry () {
  let matchedProducts;
  const countryInput = convertToLowerCase (selectShipsToOption.value);
  if (countryInput === 'all') {
    renderProducts (allProducts);
  } else {
    matchedProducts = allProducts.filter (item => {
      return item.shipsTo.some (shippingCountry => {
        return convertToLowerCase (shippingCountry) === countryInput;
      });
    });
    renderProducts (matchedProducts);
  }
}

function convertToLowerCase (str) {
  return str.trim ().toLocaleLowerCase ();
}

//Make a change on the webpage: Price range - create label that changes according to the range input value
const range = document.querySelector ('div.price input');

range.addEventListener ('change', filterProductsAfterPrice ());

function filterProductsAfterPrice () {
  const val = range.value;

  let matchedProducts;
  let rangeLabel = document.querySelector ('div.price label');
  let labelText = '';

  switch (val) {
    case '0':
      matchedProducts = allProducts.filter (product => product.price <= 500);
      labelText = 'Cheapest';
      break;
    case '1':
      matchedProducts = allProducts.filter (product => product.price <= 1500);
      labelText = 'Cheaper';
      break;
    case '2':
      matchedProducts = allProducts.filter (product => product.price <= 3000);
      labelText = 'Cheap';
      break;
    case '3':
      matchedProducts = allProducts.filter (product => product.price <= 5000);
      labelText = 'Average price';
      break;
    case '4':
      matchedProducts = allProducts.filter (product => product.price <= 7000);
      labelText = 'Higher price';
      break;
    case '5':
      matchedProducts = allProducts;
      labelText = 'All products and prices';
      break;
  }

  renderProducts (matchedProducts);
  rangeLabel.innerHTML = labelText;
}

const pricesArray = allProducts.filter(product => product.price);
console.log(pricesArray);