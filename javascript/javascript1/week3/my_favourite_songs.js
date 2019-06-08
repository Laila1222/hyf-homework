// My favourite songs 
// By Lilla Kőrösi
// Hack Your Future - JavaScript Week3

// Not ready

const songDatabase = [{
  songId: 1,
  title: "My baby",
  artist: "Soggy socks"
},
{
  songId: 2,
  title: "3 nails in wood",
  artist: "The carpenters"
},
{
  songId: 3,
  title: "Blacker than black",
  artist: "Instant coffee"
},
{
  songId: 4,
  title: "When is enough too little?",
  artist: "The spies girls"
}
];
const myPlaylist = [];

function addSongToDatabase(song) {
  let status = "Song has been added";
  for (let i = 0; i < songDatabase; i++) {
    for (let j = 0; j < songDatabase[i]; j++) {
      
      if (songDatabase[i].title[j] === song) {
        status = "Song already exists."
      }
    }
  }
  if (status === "Song has been added") {
    songDatabase.push(song);
  }

};
addSongToDatabase(3, "nem tuodm", "nem tudomdd");

addSongToDatabase({songId: 1, title: "My baby", artist: "Soggy socks"});
console.log(songDatabase);

function getSongByTitle(title) {
  let output = title + " is not in your database.";
  for (let i = 0; i < songDatabase.length; i++) {
    if (title === songDatabase[i].title) {
      output = songDatabase[i]; 
    };
  } 
  return output
}

// console.log(getSongByTitle("When is enough too little?"));
