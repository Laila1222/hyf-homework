//variables
const searchInput = document.querySelector('#search').value;
const button = document.querySelector('button');
const image = document.querySelector('img');

// button.addEventListener('click', () => {
//     fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nC9H30grHHmtXeadDvKzPAOu6sFDPfSH&limit=5")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         image.src = json.data[0].url;
//     }
        
// )

function createNode (element) {
    return document.createElement(element);
}
