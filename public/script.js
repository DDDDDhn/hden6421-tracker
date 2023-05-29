// DOM elements
const addCharacterBtn = document.getElementById('addCharacterBtn');
const popup = document.getElementById('popup');
const cancelBtn = document.getElementById('cancelBtn');
const popupForm = document.getElementById('popupForm');
const characterList = document.getElementById('characterList');

// Show popup form
addCharacterBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Hide popup form
cancelBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Handle form submission
popupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const characterName = document.getElementById('characterName').value;
  const animeName = document.getElementById('animeName').value;
  const hairColor = document.getElementById('hairColor').value;
  const eyeColor = document.getElementById('eyeColor').value;
  const gender = document.getElementById('gender').value;
  const personalityFeatures = getSelectedCheckboxes('personality');
  const race = document.getElementById('race').value;
  const occupation = document.getElementById('occupation').value;

  // Generate unique ID
  const id = generateID();

  // Generate current date and time
  const date = getCurrentDate();

  // Create character object
  const character = {
    id,
    characterName,
    animeName,
    hairColor,
    eyeColor,
    gender,
    personalityFeatures,
    race,
    occupation,
    date
  };

  // Add character to the list
  addCharacter(character);

  // Reset form
  popupForm.reset();

  // Hide popup form
  popup.style.display = 'none';
});

// Helper function to get selected checkboxes
function getSelectedCheckboxes(name) {
  const checkboxes = document.querySelectorAll(`input[name=${name}]:checked`);
  const values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

// Function to generate unique ID
function generateID() {
  const timestamp = new Date().getTime().toString();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return timestamp + random;
}

// Function to generate current date and time
function getCurrentDate() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return now.toLocaleDateString('en-US', options);
}

// Function to add character to the list
function addCharacter(character) {
  const characterItem = document.createElement('div');
  characterItem.classList.add('character-item');
  characterItem.innerHTML = `
    <h3>${character.characterName}</h3>
    <p class="id half-size smaller">ID: ${character.id}</p>
    <p>Anime: ${character.animeName}</p>
    <p>Hair Color: ${character.hairColor}</p>
    <p>Eye Color: ${character.eyeColor}</p>
    <p>Gender: ${character.gender}</p>
    <p>Personality Features: ${character.personalityFeatures.join(', ')}</p>
    <p>Race: ${character.race}</p>
    <p>Occupation: ${character.occupation}</p>
    <p class="date half-size smaller">Date Added: ${character.date}</p>
  `;
  characterList.appendChild(characterItem);
}

