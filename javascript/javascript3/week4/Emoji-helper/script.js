// Variables
const searchField = document.querySelector ('#write-emoji');
const select = document.querySelector ('#categories');
let listOfEmojis;
const favouriteEmojiObjects = [];

// Event listeners
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

searchField.addEventListener ('keyup', search);

// Fetch API
function fetchEmojiApi () {
  fetch ('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
    .then (response => response.json ())
    .then (json => {
      // console.log(json)
      listOfEmojis = json;
      //   console.log (listOfEmojis);
      // Render all emojis
      renderEmojis (listOfEmojis);
      // Render categories
      renderCategories (json);
      // Check if thereis something in local storage
      if (localStorage.getItem ('emojiObject')) {
        const savedEmojiNames = JSON.parse (
          localStorage.getItem ('emojiObject')
        );
        console.log (savedEmojiNames);

        renderFavouritesFromStorage (savedEmojiNames);
      }
    });
}

function renderEmojis (listOfEmojis) {
  const emojisUl = document.querySelector ('#list-of-emojis');
  emojisUl.innerHTML = '';
  // Create li, span and button for each emoji
  listOfEmojis.forEach (emoji => {
    const emojiListItem = document.createElement ('li');
    const emojiAndNameDiv = document.createElement ('div');
    emojiAndNameDiv.classList.add ('emojis-div');
    // Add emoji picture
    const emojiSpan = document.createElement ('span');
    emojiSpan.innerHTML = emoji.char;
    emojiAndNameDiv.appendChild (emojiSpan);
    emojiSpan.classList.add ('emoji');
    // Add emoji name
    const nameSpan = document.createElement ('span');
    nameSpan.innerHTML = emoji.name;
    emojiAndNameDiv.appendChild (nameSpan);
    nameSpan.classList.add ('emojiName');
    // Add button
    const addToFavButton = document.createElement ('button');
    addToFavButton.innerHTML = 'Add to Favourite';

    emojiListItem.appendChild (emojiAndNameDiv);
    emojiListItem.appendChild (addToFavButton);
    emojisUl.appendChild (emojiListItem);

    // Copy clicked emoji to clipboard
    emojiListItem.addEventListener ('click', function (clicked) {
      const clickedEmoji = clicked.target.parentElement;
      const copyEmoji = clickedEmoji.querySelector ('.emoji').innerHTML;
      // console.log(copyEmoji)
      writeToClipboard (copyEmoji);
    });

    // Add emoji to favourite
    addToFavButton.addEventListener ('click', function (clicked) {
      const clickedEmoji = clicked.target.parentElement;
      console.log (clickedEmoji);
      saveFavourites (clickedEmoji);
      renderFavouriteEmojis (clickedEmoji);
    });
  });
}

fetchEmojiApi ();

// Search emoji by input
function search () {
  const searchValue = searchField.value;
  //   console.log (searchValue);
  const newListOfEmojis = listOfEmojis.filter (emoji => {
    return emoji.name.toLowerCase ().includes (searchValue.toLowerCase ());
  });
  //   console.log (newListOfEmojis);
  renderEmojis (newListOfEmojis);
  //   console.log (renderFavourites (arrayOfFavEmojiNames));
}

// Get categories
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

// Load favourite emojis
function renderFavouriteEmojis (addedItem) {
  const addToFavouriteLi = addedItem;
  console.log (addToFavouriteLi);

  const favEmojisUl = document.querySelector ('#list-of-fav-emojis');
  // console.log(favEmojiLi)
  favEmojisUl.appendChild (addToFavouriteLi);
  const removeFromFavourite = addToFavouriteLi.querySelector ('button');
  removeFromFavourite.innerHTML = 'Remove from favourite';

  removeFromFavourite.addEventListener ('click', function (clicked) {
    const removeItem = clicked.target.parentElement;
    // console.log(removeItem);
    removeItem.remove ();
  });
}

// Save favourite emojis to local storage
function saveFavourites (favouriteEmoji) {
  const emojiObject = favouriteEmoji;
  const emojiObjectString = emojiObject.outerHTML;

  console.log (emojiObjectString);
  favouriteEmojiObjects.push (emojiObjectString);
  console.log (emojiObject);
  localStorage.setItem ('emojiObject', JSON.stringify (favouriteEmojiObjects));
  console.log (favouriteEmojiObjects);
}

// Load locally stored emojis
function renderFavouritesFromStorage (emojiNameArray) {
  console.log (emojiNameArray);
  for (let i = 0; i < emojiNameArray.length; i++) {
    console.log (emojiNameArray[i]);
    // renderFavouriteEmojis(emojiNameArray[i]);
    convertAndRenderFromStorage (emojiNameArray[i]);
  }
}

// Convert items from storage, and render as favourites
function convertAndRenderFromStorage (addedItem) {
  const addToFavouriteLi = document.createElement ('span');
  addToFavouriteLi.innerHTML = addedItem;
  renderFavouriteEmojis (addToFavouriteLi);
}
