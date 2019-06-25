//Movies exercise

//1. Movies with short title
const shortTitleMovies = movies.filter (movie => movie.title.length < 3);
// console.log(shortTitleMovies);

//2. Movies with long title
const longTitleMovies = movies.filter (movie => movie.title.length > 70);
// console.log(longTitleMovies);

//3. Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovies = movies.filter (
  movie => movie.year >= 1980 && movie.year <= 1989
).length;
// console.log(numberOfMovies);

//4. Give tags to movies based on rating

function tagMovies () {
  for (let objects of movies) {
    if (objects.rating >= 7) {
      objects.tag = 'good';
    } else if (objects.rating >= 4 && objects.rating < 7) {
      objects.tag = 'average';
    } else {
      objects.tag = 'bad';
    }
  }
  return movies;
}
tagMovies ();
//console.log(tagMovies())

//5.  Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const moviesAbove6 = movies
  .filter (movie => movie.rating > 6)
  .map (movie => movie.rating);

// console.log(moviesAbove6);

//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.

const moviesContainingName = movies.filter (
  movie =>
    movie.title.includes ('Benjamin') ||
    movie.title.includes ('Alien') ||
    movie.title.includes ('Surfer')
);
// console.log(moviesContaining.length);

//Improved solution
const searchKeyWords = ['Benjamin', 'Surfer', 'Alien'];
const moviesContainingSearchKeywords = movies.filter (movie =>
  searchKeyWords.some (keyword =>
    movie.title.toLocaleLowerCase ().includes (keyword.toLocaleLowerCase ())
  )
);
// console.log(moviesContainingSearchKeywords.length);

//7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//Split movie titles by words

function duplicateWords (movie) {
  //Split titles into strings
  const titles = movie.split (' ').sort ();
  //Empty array returns undefined
  if (titles.length === 0) {
    return false;
  }
  //Titles are separated and compared
  let previous = titles[0];
  const tail = titles.slice (1);

  for (let wholeTitle of tail) {
    if (previous === wholeTitle) {
      return true;
    }
    previous = wholeTitle;
  }
  return false;
}

//Turn titles into lovercase
const loverCaseTitles = movies.map (movie => movie.title.toLowerCase ());
//Filter duplicates
const hasDuplicates = loverCaseTitles.filter (duplicateWords);
// console.log(hasDuplicates);

//8. Return the most duplicated value
//Get movie titles and all words lower case
const movieTitles = movies.map (movie => movie.title.toLowerCase ());
// console.log(movieTitles);
//Split titles into single word strings
const splitByWords = movieTitles.map (movie => movie.split (' '));

//Strings are all in one array
const inOneArray = flatten (splitByWords);
// console.log(inOneArray);

function flatten (arr) {
  return arr.reduce (function (flat, toFlatten) {
    return flat.concat (
      Array.isArray (toFlatten) ? flatten (toFlatten) : toFlatten
    );
  }, []);
}
// console.log(flatten(splitByWords));

//Find duplicates
const duplicates = inOneArray.filter (onlyDuplicates);
// console.log(duplicates);

function onlyDuplicates (value, index, self) {
  return self.indexOf (value) !== index;
}

//Count how many times the duplicates appear, and put into an array of objects
function count () {
  duplicates.sort ();
  let wordsAndCounts = [];
  let current = null;
  let cnt = 0;
  for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i] != current) {
      if (cnt > 0) {
        wordsAndCounts.push ({word: current, counts: cnt});
      }
      current = duplicates[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }

  return wordsAndCounts;
}

const wordsAndTheirCount = count ();
// console.log(wordsAndTheirCount);

// Find with sort method
const sortedWords = wordsAndTheirCount.sort (
  (a, b) => (a.counts > b.counts ? -1 : 1)
);
// console.log(sortedWords)

const mostUsedWord = sortedWords[0];
console.log (
  `The most used word is '${mostUsedWord.word}' with ${mostUsedWord.counts} counts.`
);

//Solution2 with imperial style
//Place numbers into one array
const numbersArray = wordsAndTheirCount.map (items => items.counts);
//Find the highest number
const highestNumber = Math.max.apply (null, numbersArray);
//Find the index of the highest number
const indexOfHighestNumber = numbersArray.indexOf (highestNumber);
//Find the corresponding word
const wordUsedMostTimes = wordsAndTheirCount[indexOfHighestNumber];
// console.log(wordUsedMostTimes);

//Most often repeated word in one title
function splitIntoWords (str, IGNORE_CASE = false) {
  //if casing is to be ignored, convert into lower case
  if (IGNORE_CASE) {
    str = str.toLocaleLowerCase ();
  }
  //Split the string
  return str.split (/[^a-z0-9]+/gi).filter (word => word.length);
}

function findDuplicateWords (str, IGNORE_CASE) {
  //Convert string into list of words
  const wordsArray = splitIntoWords (str, IGNORE_CASE);
  //Count each word
  let countsDict = {};

  for (const word of wordsArray) {
    if (!countsDict[word]) {
      //word is seen for the first time
      countsDict[word] = 1;
    } else {
      //word gets repeated
      countsDict += 1;
    }
  }

  const duplicateWords = Object.entries (countsDict)
    .map (([word, count]) => ({word, count}))
    .filter (obj => obj.count > 1);
  duplicateWords.sort ((a, b) => b.count - a.count);
  //Return the array if duplicates are found
  if (duplicateWords.length) {
    return duplicateWords;
  }
}

const moviesWithDuplicatWordsInTitles = movies.filter (movie =>
  findDuplicateWords (movie.title, true)
);
console.log (
  `moviesWithDuplicateWordsInTitles = `,
  moviesWithDuplicatWordsInTitles
);

//9. Average rating of movies

function averageRating () {
  const votes = movies.map (movie => movie.votes);
  const numberOfVotes = votes.length;

  const rating = movies.map (movie => movie.rating);
  const sumRating = rating.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sumRating / numberOfVotes;
}

// console.log(averageRating()); //6.626827026198841

//10. Return number of good/bad/average movies with reduce

function tagMovie (movie) {
  if (movie.rating >= 7) {
    return 'good';
  } else if (movie.rating >= 4 && movie.rating < 7) {
    return 'average';
  } else {
    return 'bad';
  }
}

let initialTotal = {good: 0, average: 0, bad: 0};

function updateTotal (currentTotal, currentMovieTag) {
  currentTotal[currentMovieTag]++;
  return currentTotal;
}
// let movieTags = movies.map(movie => tagMovie(movie));
const movieTags = movies.map (tagMovie);
const goodMovieCounter = movieTags.reduce (updateTotal, initialTotal);
// console.log(goodMovieCounter);
