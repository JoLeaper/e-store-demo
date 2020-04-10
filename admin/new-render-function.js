import { removeFromCatalogue } from './removeFromCatalogue.js';

function renderCard(card) {
    const li = document.createElement('li');
    const cardName = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardCategory = document.createElement('p');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');
    const button = document.createElement('button');
    const selector = document.createElement('select');

    cardName.textContent = card.name;
    cardImage.src = card.image;
    cardCategory.textContent = card.category;
    cardDescription.textContent = card.description;
    cardPrice.textContent = `$${card.price}`;
    button.innerHTML = 'Remove';


    li.append(cardName, cardImage, cardCategory, cardDescription, cardPrice, button, selector);
    
    
    button.addEventListener('click', function() {
        removeFromCatalogue(li, card.name);
    });

    return li;
}


export default renderCard;