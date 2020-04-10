import rawCards from './data/cards.js';

export function getCards() {
    const PRODUCTS_KEY = 'CARDS';

    let cards = localStorage.getItem(PRODUCTS_KEY);
    if (!cards) {
        cards = JSON.stringify(rawCards);
        localStorage.setItem(PRODUCTS_KEY, cards);
    }
    const parsedCards = JSON.parse(cards);
    return parsedCards;
}

export default getCards;