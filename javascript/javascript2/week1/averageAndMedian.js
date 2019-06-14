// Difference between median and average
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function average(arr) {
    let sum = 0;
    let averageNumber = 0;
    for (let numbers of arr) {
        sum += numbers; 
        averageNumber = sum / arr.length;
    }

    return averageNumber.toFixed(2);
 }
 average(housePrices);

 function median(arr) {
    arr.sort(function(a,b) {
        return a-b;
    });
    let indexNumber = Math.round(arr.length / 2);
    let middleNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        middleNumber = arr[indexNumber-1];
    }
    return middleNumber;
 }

median(housePrices);

//Show on webpage
let headline = document.createElement('h1');
headline.innerHTML = "Average and median";
document.body.appendChild(headline);

let ul = document.createElement('ul');
ul.innerHTML = "House prices";
ul.style.fontWeight = 'bold';

document.body.appendChild(ul);

for (let prices of housePrices) {
    let li = document.createElement('li');
    li.innerHTML = prices;
    li.style.fontWeight = 'normal';
    li.style.padding = '.5rem';
    ul.appendChild(li);
};

let averageHeadline = document.createElement('h3');
averageHeadline.innerHTML = 'Average of house prices: ' + average(housePrices);
document.body.appendChild(averageHeadline);

let medianHeadline = document.createElement('h3');
medianHeadline.innerHTML = 'Median of house prices: ' + median(housePrices);
document.body.appendChild(medianHeadline);