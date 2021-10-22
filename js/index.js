import { addNewCard } from './addNewCard';
import { removeCard } from './removeCard.js';

const addButton = document.querySelector( "#add-button" );
const removeButton = document.querySelector( "#remove-button" );
const gallery = document.querySelector( "#cards-container" )

addButton.addEventListener( "click", () => addNewCard( gallery ), false );
removeButton.addEventListener( "click", () => removeCard( gallery ), false );