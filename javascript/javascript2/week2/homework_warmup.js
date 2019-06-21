// Howework Warmup
//Doubling of numbers
const numbers = [1, 2, 3, 4];

//Finding odd numbers
const oddNumbers = numbers.filter (number => number % 2 == 1);
console.log (oddNumbers);

//Doubling odd numbers
const newNumbers = oddNumbers.map (number => number * 2);
console.log (`The new numbers are: ${newNumbers}`);
