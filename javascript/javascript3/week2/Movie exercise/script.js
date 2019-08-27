// Variables
const display = document.querySelector ('h3');
const url =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const badMovies = [];
const badMoviesSince2000 = [];
const badMovieTitles = [];

// Function that gets movies from API, takes a function, and pushes items into the array
function getMoviesData (doSomethingFunction, array) {
  fetch (url)
    .then (response => response.json ())
    .then (movies => {
      const array = doSomethingFunction (movies);
      return array;
    })
    .then (result => array.push (result))
    .catch (err => console.log (err));
}

// Function that returns bad movies (movies with rating below 6)
const getBadMovies = movies => {
  const badFilms = movies.filter (movie => movie.rating < 6);
  return badFilms;
};

// Function that returns bad movies made after and in 2000
const getBadMovesSince2000 = movies => {
  const badFilmsSince2000 = movies.filter (
    movie => movie.rating < 6 && movie.year >= 2000
  );
  badMoviesSince2000.push (badFilmsSince2000);
};

// Function that returns titles of bad movies
const getTitles = movies => {
  const badMovies = movies.filter (movie => movie.rating < 6);
  const titles = badMovies.map (movie => movie.title);
  badMovieTitles.push (titles);
};

getMoviesData (getBadMovies, badMovies);
getMoviesData (getBadMovesSince2000, badMoviesSince2000);
getMoviesData (getTitles, badMovieTitles);

//Log movies
console.log (badMovies);
console.log (badMovieTitles);
console.log (badMoviesSince2000);
