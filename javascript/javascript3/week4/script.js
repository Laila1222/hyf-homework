// Variables
const searchField = document.querySelector ('#write-emoji');
const select = document.querySelector ('#categories');
let listOfEmojis;
const favouriteEmojiNames = [];

// Fetch API
function fetchEmojiApi () {
  fetch ('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
    .then (response => response.json ())
    .then (json => {
      // console.log(json)
      listOfEmojis = json;
      console.log (listOfEmojis);
      renderEmojis (listOfEmojis);

      renderCategories (json);

      if (localStorage.getItem ('emojiName')) {
        const emojiName = JSON.parse(localStorage.getItem('emojiName'));
        console.log(emojiName);
    
        renderFavouritesfromStorage(emojiName, listOfEmojis);
    }
      

    });
}

function renderEmojis (listOfEmojis) {
  const emojisUl = document.querySelector ('#list-of-emojis');
  emojisUl.innerHTML = '';

  listOfEmojis.forEach (emoji => {
    const emojiListItem = document.createElement ('li');
    const emojiAndNameDiv = document.createElement('div');

    const emojiSpan = document.createElement ('span');
    emojiSpan.innerHTML = emoji.char;
    emojiAndNameDiv.appendChild (emojiSpan);
    emojiSpan.classList.add ('emoji');

    const nameSpan = document.createElement ('span');
    nameSpan.innerHTML = emoji.name;
    emojiAndNameDiv.appendChild (nameSpan);
    nameSpan.classList.add ('emojiName');

    const addToFavButton = document.createElement('button');
    addToFavButton.innerHTML = 'Add to Favourite';
    


    emojiListItem.appendChild(emojiAndNameDiv);
    emojiListItem.appendChild(addToFavButton);
    emojisUl.appendChild (emojiListItem);

    // Copy clicked emoji to clipboard
    emojiListItem.addEventListener ('click', function (clicked) {
      const clickedEmoji = clicked.target.parentElement;
      const copyEmoji = clickedEmoji.querySelector ('.emoji').innerHTML;
      // console.log(copyEmoji)
      writeToClipboard (copyEmoji);
    });

    // Add emoji to favourite
    addToFavButton.addEventListener('click', function (clicked) {
        const clickedEmoji = clicked.target.parentElement;
        console.log(clickedEmoji);
        saveFavourites(clickedEmoji);
        renderFavouriteEmojis(clickedEmoji)
        
    });

    
  });
}

fetchEmojiApi ();

function search () {
  const searchValue = searchField.value;
  console.log (searchValue);
  const newListOfEmojis = listOfEmojis.filter (emoji => {
    return emoji.name.toLowerCase ().includes (searchValue.toLowerCase ());
  });
  console.log (newListOfEmojis);
  renderEmojis (newListOfEmojis);
  console.log(renderFavourites(arrayOfFavEmojiNames));
}

searchField.addEventListener ('keyup', search);

function renderCategories (jsonData) {
  const categoriesOfAllEmojis = jsonData.map (emoji => emoji.category);
  const categoriesOnly = [...new Set (categoriesOfAllEmojis)];
  // console.log(categoriesOnly)
  // create option for each category
  categoriesOnly.forEach (category => {
    const option = document.createElement ('option');
    option.innerHTML = category;
    option.value = category;
    select.appendChild (option);
  });
}

select.addEventListener ('change', function () {
  const selectedCategory = this.value;
  // console.log(selectedCategory);
  showEmojiByCategory = listOfEmojis.filter (emoji => {
    return emoji.category
      .toLowerCase ()
      .includes (selectedCategory.toLowerCase ());
  });
  // console.log(showEmojiByCategory)
  renderEmojis (showEmojiByCategory);
});

function renderFavouriteEmojis (addedItem) {
    const addToFavouriteLi = addedItem;
    // console.log(addToFavouriteLi);

    const favEmojisUl = document.querySelector('#list-of-fav-emojis');
    // console.log(favEmojiLi)
    favEmojisUl.appendChild(addToFavouriteLi);
    const removeFromFavourite = addToFavouriteLi.querySelector('button');
    removeFromFavourite.innerHTML = 'Remove from favourite';

    removeFromFavourite.addEventListener('click', function(clicked) {
        const removeItem = clicked.target.parentElement;
        // console.log(removeItem);
        removeItem.remove();
    })
}


function saveFavourites (favouriteEmoji) {
    const emojiName = favouriteEmoji.querySelector('.emojiName').innerHTML;
    favouriteEmojiNames.push(emojiName);
    // console.log(emojiName);
    localStorage.setItem('emojiName', JSON.stringify(favouriteEmojiNames));
    console.log(favouriteEmojiNames);
}



// console.log(listOfEmojis)
 function renderFavouritesfromStorage(emojiNameArray, arrayOfAllEmojis) {
     let matchingNamesList;
    for (let i = 0; i < emojiNameArray.length; i++) {
        matchingNamesList = arrayOfAllEmojis.filter(emoji => {
            return emoji.name.includes(emojiNameArray[i]);
    })
 }
 console.log(matchingNamesList)
 matchingNamesList.forEach(emoji => {
    const emojiLi = document.createElement('li');
    emojiLi.innerHTML = `<li>
                            <div>
                                <span class="emoji">${emoji.char}</span>
                                <span class="emojiName">${emoji.name}</span>
                            </div>
                        </li>`

    const favEmojisUl = document.querySelector('#list-of-fav-emojis');

    favEmojisUl.appendChild(emojiLi);
    const removeButton = document.querySelector('button');
    removeButton.innerHTML = 'Remove from favourite';
    emojiLi.appendChild(removeButton)

    removeButton.addEventListener('click', function(clicked) {
        const removeItem = clicked.target.parentElement;
        removeItem.remove();
        // remove from storage
        const clickedToRemoveLi = clicked.target.parentElement;
        console.log(clickedToRemoveLi.querySelector('.emojiName').innerHTML);
        const nameOfEmojiToRemove = clickedToRemoveLi.querySelector('.emojiName').innerHTML;
        window.localStorage.removeItem(nameOfEmojiToRemove);
 })
})
}
