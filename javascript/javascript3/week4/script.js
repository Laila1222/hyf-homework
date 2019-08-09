
const searchField = document.querySelector('#write-emoji');
const searchButton = document.querySelector('#button');
const showAllButton = document.querySelector('#show-all-btn');
let listOfEmojis;
// let newListOfEmojis;



// Display all emojis
function getEmojiFromApi () {
    fetch ('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
    .then(response => response.json())
    .then(json => {
        listOfEmojis = json;
        console.log(listOfEmojis)
        renderEmojis(listOfEmojis);
    })   
}



function renderEmojis (listOfEmojis) {
    const emojiUL = document.querySelector('#list-of-emojis');
    listOfEmojis.forEach((emoji) => {
        // create li
        const emojiLi = document.createElement('li');

        const emojiSpan = document.createElement('span');
        emojiSpan.innerHTML = emoji.char;
        emojiSpan.classList.add('emoji');
        emojiLi.appendChild(emojiSpan);

        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = emoji.name;
        nameSpan.classList.add('emojiName');
        emojiLi.appendChild(nameSpan);


        emojiUL.appendChild(emojiLi);
        
    })
    
}
getEmojiFromApi();




searchField.addEventListener('keyup', function() {
    const newListOfEmojis =  listOfEmojis.filter((emoji) => {
		return emoji.name.toLowerCase().includes(searchField.value.toLowerCase());
    });
    renderEmojis(newListOfEmojis)
    console.log(newListOfEmojis);

    
})

// console.log(newListOfEmojis)

// searchButton.addEventListener('click', function ()  {
//     console.log(newListOfEmojis);
//     renderEmojis(newListOfEmojis)
// }
// )
