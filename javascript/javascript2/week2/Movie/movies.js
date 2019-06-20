//Movies exercise

//1. Movies with short title
const shortTitleMovies = movies.filter(movie => movie.title.length < 3);
// console.log(shortTitleMovies);

//2. Movies with long title
const longTitleMovies = movies.filter(movie => movie.title.length > 70);
// console.log(longTitleMovies);

//3. Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovies = (movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)).length;
// console.log(numberOfMovies);


//4. Tag based on rating 

function tagMovies() {
    for (let objects of movies) {
        if (objects.rating >= 7) {
         objects.tag = "good"
        } else if (objects.rating >= 4 &&  objects.rating < 7){
         objects.tag = "average"
        } else {
         objects.tag = "bad"
        }
    };
    return movies;
 };

 tagMovies();


//5.  Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

let okayMovies = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);

// console.log(okayMovies);






//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.

let countNumberOfMoviesContaining = (movies.filter(movie => movie.title.includes("Benjamin") || 
    movie.title.includes("Alien") ||
    movie.title.includes("Surfer")));
// console.log(countNumberOfMoviesContaining.length);
//Titles with alien are selected and and extra character is added 
// const titlesHasAlien = movies
//     .filter(movieTitle => movieTitle.title.includes('Alien'))
//     ;

// console.log(titlesHasAlien);
// const criteria = "Alien"
// const result = titlesHasAlien.filter(item => item === criteria);
// console.log(result)

// function returnPureAlien(titlesHasAlien) {

// }

//Split by words


// console.log(isItOnlyAlien(titlesHasAlien));












//7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//Split movie titles by words

function duplicateWords(movie) {
    let titles = movie.title.split(' ').sort()
    if (titles.length === 0) {
        return false
    }
    let previous = titles[0];
    let tail = titles.slice(1);
    for (let theTitle of tail) {
        if (previous === theTitle) {
            return true
        }
        previous = theTitle;
    }
    return false
}
let hasDuplicates = movies.filter(duplicateWords);
// console.log(hasDuplicates);


//8. Return the most duplicated value
let movieTitles = movies.map(movie => movie.title);
let splitByWords = movieTitles.map(movie => movie.split(' '));
function onlyUnique(value, index, self) { 
    return self.indexOf(value) !== index;
}

//Title words are all in one array
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
// console.log(flatten(splitByWords));

//Strings are all in one array
let inOneArray = flatten(splitByWords);
// console.log(inOneArray);

//Find duplicates
let duplicates = inOneArray.filter(onlyUnique);
// console.log(duplicates);

//Count how many times the duplicates appear, and put into an array of objects
function count() {
    duplicates.sort();
    let wordsAndCounts = [];
    let current = null;
    let cnt = 0;
    for (let i = 0; i < duplicates.length; i++) {
        if (duplicates[i] != current) {
            if (cnt > 0) {
                
                wordsAndCounts.push({word: current, counts: cnt});
                
                // console.log(current + ' comes --> ' + cnt + ' times');
            }
            current = duplicates[i];
            cnt = 1; 
        } else {
            cnt++;
        }
    } 
    return wordsAndCounts;
    let wordsAndCountsTwo = [];
    if (cnt > 0) { 
        wordsAndCountsTwo.push({word: current, counts: cnt});
    }
    return wordsAndCountsTwo;
};

let wordsAndTheirCount = count();
// console.log(wordsAndTheirCount);

//Find with sort method ???????????????????????????????????????????????????


    


//With not sort method
//Place numbers into one array
// let numbersArray = wordsAndTheirCount.map(items => items.counts);
//Find the highest number
// let highestNumber = Math.max.apply(null, numbersArray);
//Find the index of the highest number
// let indexOfHighestNumber = numbersArray.indexOf(highestNumber);
//Find the corresponding word
// let wordUsedMostTimes = wordsAndTheirCount[indexOfHighestNumber];
// console.log(wordUsedMostTimes);
//Most used word is 'The' - 1401 times.






//Average rating of movies

function averageRating() {
    const votes = movies.map(movie => movie.votes);
    const numberOfVotes = votes.length;
    
    const rating = movies.map(movie => movie.rating);
    const sumRating = rating.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); 
    return sumRating / numberOfVotes;
}

// console.log(averageRating()); //6.626827026198841


// Return number of good/bad/average movies
function tagMovie(movie) {  
    if (movie.rating >= 7) {
     return "good"
    } else if (movie.rating >= 4 &&  movie.rating < 7){
     return "average"
    } else {
     return "bad"
    }
};

let initialTotal = {good: 0, average: 0, bad: 0}

function updateTotal(currentTotal, currentMovieTag) {
    currentTotal[currentMovieTag]++;
    return currentTotal;
}
// let movieTags = movies.map(movie => tagMovie(movie));
let movieTags = movies.map(tagMovie);
let goodMovieCounter = movieTags.reduce(updateTotal, initialTotal);
// console.log(goodMovieCounter);



