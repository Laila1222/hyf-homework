console.log ('Script loaded');

const allProducts = getAvailableProducts ();
console.log(allProducts)

const shipsTo = allProducts.map(a => a.shipsTo);
console.log(shipsTo)









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
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
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
 
  const searchTerm = document.querySelector ('div.search input').value.toLowerCase ().trim();
  if (!searchTerm) {
    renderProducts(allProducts);
  }
  // console.log(searchTerm)
  const matchedProducts = allProducts.filter (product => product.name.toLowerCase().startsWith(searchTerm));

  // console.log(matchedProducts)

  renderProducts(matchedProducts)
}

filterForProductNames();




//Select sorting options
const sortOptions = document.querySelector('div.sort select');
//Event listener
sortOptions.addEventListener('change', selectOption);

function selectOption() {
  let matchedProducts;
  if (sortOptions.value === 'cheap') {
    matchedProducts = allProducts.sort((a, b) => a.price - b.price);
    renderProducts(matchedProducts);
  }  else if (sortOptions.value === 'name') {
      matchedProducts = allProducts.sort((a, b) => a.name > b.name ? 1 : -1);
      renderProducts(matchedProducts);
  } else if (sortOptions.value === 'expensive') {
    matchedProducts = allProducts.sort((a, b) => b.price - a.price);
    renderProducts(matchedProducts);
  }
}

//Ships to
const selectShipsToOption = document.querySelector('div.filters select');
selectShipsToOption.addEventListener('change', selectCountry);

function selectCountry() {
  let matchedProducts;
  let countryInput = selectShipsToOption.value;
  
  console.log(countryInput)
  
  console.log(matchedProducts)
  if (countryInput === 'all'){
    
    renderProducts(allProducts);
  } else {
    matchedProducts = allProducts.filter(product => product.shipsTo.includes(countryInput));
    renderProducts(matchedProducts);
  }

}
selectCountry();

const li = document.querySelector("ul > li.name")
console.log(li)
