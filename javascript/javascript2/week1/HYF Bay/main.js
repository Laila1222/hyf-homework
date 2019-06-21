console.log ('Script loaded');

const products = getAvailableProducts ();
renderProducts (products);

function renderProducts (array) {
  for (let productItem of array) {
    // Create main Ul and Li for products
    const mainUlOfProducts = document.querySelector ('.products ul');
    const mainLi = createElement ('li', '', mainUlOfProducts, '', 'mainLi');
    const childUl = createElement ('ul', '', mainLi, '', 'childUl');

    //Add list with product information to childUl
    createElement ('li', 'Product name: ' + productItem.name, childUl, '', '');
    createElement ('li', 'Price: ' + productItem.price, childUl, '', '');
    createElement ('li', 'Rating: ' + productItem.rating, childUl, '', '');
    const shipToLi = createElement ('li', 'Ships to:', childUl, '', 'shipsTo');

    //create ul and li for shipto countries
    const shipToUl = createElement ('ul', '', shipToLi, '', '');

    //displaying countries in different li
    for (const country of productItem.shipsTo) {
      const countries = createElement (
        'li',
        country,
        shipToUl,
        '',
        'countries'
      );
    }
  }
}

function createElement (tag, value, parent, id, className) {
  newElement = document.createElement (tag);
  newElement.innerHTML = value;
  newElement.id = id;
  newElement.className = className;
  parent.appendChild (newElement);
  return newElement;
}
