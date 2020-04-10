import getCards from '../getCards.js';

export default function addProduct(productObject) {
    // existing products array
    const cards = getCards();
    
    // push into existing array
    cards.push(productObject);
    
    // put back
    const stringProducts = JSON.stringify(cards);
    localStorage.setItem('CARDS', stringProducts);


    return cards;
}