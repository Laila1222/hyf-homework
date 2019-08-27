// Difference between median and average
const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000,
];

//Calculates average
function average (arr) {
  let sum = 0;
  let averageNumber = 0;

  for (let number of arr) {
    sum += number;
    averageNumber = sum / arr.length;
  }
  return averageNumber.toFixed (2);
}

average (housePrices);

//Calculates median
function median (arr) {
  arr.sort (function (a, b) {
    return a - b;
  });
  
  const item = arr.length / 2;

  if (arr.length % 2 === 0) {
    return  (arr[item] + arr[item - 1]) / 2;
  } else {
    return arr[Math.floor(item)];
  }
}

median (housePrices);

//Show on webpage

//Create headline
const headline = document.createElement ('h1');
headline.innerHTML = 'Average and median';
document.body.appendChild (headline);

//Create list
const ul = document.createElement ('ul');
ul.innerHTML = 'House prices';

document.body.appendChild (ul);

//Display the house prices in the list
for (let prices of housePrices) {
  let li = document.createElement ('li');
  li.innerHTML = prices;
  ul.appendChild (li);
}

// Show average and median
const averageHeadline = document.createElement ('h3');
averageHeadline.innerHTML = 'Average of house prices: ' + average (housePrices);
document.body.appendChild (averageHeadline);

const medianHeadline = document.createElement ('h3');
medianHeadline.innerHTML = 'Median of house prices: ' + median (housePrices);
document.body.appendChild (medianHeadline);
