// Variables
const searchField = document.querySelector('#write-emoji');
let listOfEmojis;



// Fetch API
function fetchEmojiApi () {
    fetch ('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        listOfEmojis = json;
        console.log(listOfEmojis);
        renderEmojis(listOfEmojis)
    })
}


function renderEmojis (listOfEmojis) {
    const emojisUl = document.querySelector('#list-of-emojis');
    emojisUl.innerHTML = '';

    listOfEmojis.forEach(emoji => {
        const emojiListItem = document.createElement('li');

        const emojiSpan = document.createElement('span');
        emojiSpan.innerHTML = emoji.char;
        emojiListItem.appendChild(emojiSpan);
        emojiSpan.classList.add('emoji');

        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = emoji.name;
        emojiListItem.appendChild(nameSpan); 
        nameSpan.classList.add('emojiName');
        
        emojisUl.appendChild(emojiListItem);

        emojiSpan.addEventListener('click', function (clicked) {
            const emojiToCopy = clicked.target.innerHTML;
            console.log(emojiToCopy)
            writeToClipboard(emojiToCopy);

        });
    });
}

fetchEmojiApi();



function search () {
    const searchValue = searchField.value;
    console.log(searchValue);
    const newListOfEmojis = listOfEmojis.filter(emoji => {
        return emoji.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    console.log(newListOfEmojis);
    renderEmojis(newListOfEmojis);
}

searchField.addEventListener('keyup', search);



