import rawCards from './data/cards.js';

export function getCards() {
    const PRODUCTS_KEY = 'CARDS';
    // pull down from local storage
    let cards = localStorage.getItem(PRODUCTS_KEY);
    // if there are no fruits or if fruits is the string of null . . .
    if (!cards) {
        // seed data into local storage
        cards = JSON.stringify(rawCards);
        localStorage.setItem(PRODUCTS_KEY, cards);
    }
    const parsedCards = JSON.parse(cards);
    return parsedCards;
}

export default getCards;