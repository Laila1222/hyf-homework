// Spirit animal name generator

const spiritAnimals = [
  'The crying butterfly',
  'Amazing Ant',
  'Crazy Kitten',
  'Bobo doggu',
  'Hello owl',
  'mizi mouse',
  'rity rat',
  'munku squarrel',
  'miao cat',
  'mini mius',
  'liae loa',
];
const btn = document.getElementById ('btn');
const inputField = document.getElementById ('nameInput');

//Display name and spirit animal
function whenClicked () {
  let nextAnimal = Math.floor (Math.random () * 9 + 1);
  let input = document.getElementById ('nameInput').value;
  let result = document.getElementById ('displayName');
  if (input === '') {
    result.innerHTML = "You didn't write your name.";
  } else {
    result.innerHTML = input + ' - ' + spiritAnimals[nextAnimal];
  }
}

// Select how to display the name
function displayTypes () {
  let options = document.getElementsByName ('options');
  if (options[0].checked) {
    btn.addEventListener ('click', whenClicked);
    inputField.removeEventListener ('mouseover', whenClicked);
    inputField.oninput = '';
  } else if (options[1].checked) {
    inputField.addEventListener ('mouseover', whenClicked);
    btn.removeEventListener ('click', whenClicked);
    inputField.oninput = '';
  } else if (options[2].checked) {
    inputField.oninput = function () {
      whenClicked ();
    };
    btn.removeEventListener ('click', whenClicked);
    inputField.removeEventListener ('mouseover', whenClicked);
  }
}
