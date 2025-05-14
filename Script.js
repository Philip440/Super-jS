// script.js

// Get references to the HTML elements we'll be manipulating
const dynamicTextElement = document.getElementById('dynamicText');
const styledElement = document.getElementById('styledElement');
const changeTextButton = document.getElementById('changeTextBtn');
const styleElementButton = document.getElementById('styleElementBtn');
const addElementButton = document.getElementById('addElementBtn');
const removeElementButton = document.getElementById('removeElementBtn');
const containerForNewElement = document.getElementById('containerForNewElement');

let newElement; // Variable to hold the dynamically added element

// Function to change the text content
changeTextButton.addEventListener('click', () => {
    dynamicTextElement.textContent = 'The text content has been dynamically changed by JavaScript!';
});

// Function to modify CSS styles
styleElementButton.addEventListener('click', () => {
    styledElement.style.backgroundColor = 'lightblue';
    styledElement.style.color = 'darkblue';
    styledElement.style.fontWeight = 'bold';
    styledElement.style.padding = '20px';
    styledElement.style.border = '2px solid blue';
});

// Function to add a new element
addElementButton.addEventListener('click', () => {
    newElement = document.createElement('p');
    newElement.textContent = 'This new paragraph was added dynamically!';
    newElement.style.marginTop = '15px';
    newElement.style.color = 'green';
    containerForNewElement.appendChild(newElement);
});

// Function to remove the dynamically added element
removeElementButton.addEventListener('click', () => {
    if (newElement && containerForNewElement.contains(newElement)) {
        containerForNewElement.removeChild(newElement);
        newElement = null; // Reset the reference
    } else {
        alert('No dynamically added element to remove!');
    }
});
