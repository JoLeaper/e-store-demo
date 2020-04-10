import getCards from '../getCards.js';
import removeByName from './remove-by-name.js';

export function removeFromCatalogue(list, cardName) {
    list.remove();
    let cards = getCards();
    const newCards = removeByName(cards, cardName);
    const stringProducts = JSON.stringify(newCards);
    localStorage.setItem('CARDS', stringProducts);
}