
//Variables
const button = document.querySelector ('button');
const input = document.getElementById ('searchWord');
const select = document.querySelector ('select');
const ul = document.querySelector ('ul');



function cleanItems(item) {
  while(item.firstChild) {
    item.removeChild(item.firstChild);
  }
}


//Event listener
button.addEventListener ('click', function () {
  
  const searchTerm = stringToArray (input.value);
  const index = select.value;
  cleanItems(ul);
  loadGifs(index, searchTerm);
  
  
});
function createLi() {
  const li = document.createElement ('li');
}
function removeGif() {
  if (!li) {
    console.log('nothing to remove');
    
  } else {
    li.remove();
  }

}

//Check if fetch works
const checkFetch = function (response) {
    if (!response.ok) {  
        console.log(response.statusText + ' - ' + response.url);
    }
    return response.json();
}

//Convert input string, so it can be inserted into the url
function stringToArray (str) {
  const arrayOfStrings = str.trim ().toLowerCase ().split (' ');
  const stringDevidedByPlus = arrayOfStrings.join ('+');
  return stringDevidedByPlus;
}


function loadGifs (index, searchTerm) {
  fetch (
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchTerm +
      '&api_key=nC9H30grHHmtXeadDvKzPAOu6sFDPfSH'
  )
    .then(checkFetch)
    .then(json => {
      for (let i = 0; i < index; i++) {
        const imgUrl = json.data[i].images.original.url;
        const li = document.createElement ('li');
        ul.appendChild (li);
        li.innerHTML = '<img src="' + imgUrl + '">';
      }
    })
}
