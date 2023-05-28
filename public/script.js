// Function to display the popup form
function showPopupForm() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

// Function to hide the popup form
function hidePopupForm() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Function to add a character
function addCharacter() {
  var name = document.getElementById('name').value;
  var anime = document.getElementById('anime').value;
  var hairColor = document.getElementById('hairColor').value;
  var eyeColor = document.getElementById('eyeColor').value;
  var personality = document.getElementById('personality').value;
  var race = document.getElementById('race').value;
  var occupation = document.getElementById('occupation').value;

  // Create a character card
  var characterCard = document.createElement('div');
  characterCard.classList.add('character-card');

  // Fill the character card with information
  characterCard.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Anime:</strong> ${anime}</p>
    <p><strong>Hair Color:</strong> ${hairColor}</p>
    <p><strong>Eye Color:</strong> ${eyeColor}</p>
    <p><strong>Personality:</strong> ${personality}</p>
    <p><strong>Race:</strong> ${race}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
  `;

  // Add the character card to the character list
  var characterList = document.getElementById('characterList');
  characterList.appendChild(characterCard);

  // Clear the form values
  document.getElementById('name').value = '';
  document.getElementById('anime').value = '';
  document.getElementById('hairColor').value = 'black'; // Set default value to black
  document.getElementById('eyeColor').value = '';
  document.getElementById('personality').value = '';
  document.getElementById('race').value = '';
  document.getElementById('occupation').value = '';

  // Hide the popup form
  hidePopupForm();
}

// Add event listeners
document.getElementById('addCharacterBtn').addEventListener('click', showPopupForm);
document.getElementById('popupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  addCharacter();
});
document.getElementById('cancelBtn').addEventListener('click', hidePopupForm);
