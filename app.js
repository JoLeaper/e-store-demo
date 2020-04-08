import renderCard from './render-function.js';
import cards from './data/cards.js';

const cardContainer = document.getElementById('card-container');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardList = renderCard(card);
    
    cardContainer.appendChild(cardList);
}
