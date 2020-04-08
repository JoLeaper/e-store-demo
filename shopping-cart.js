import cards from './cards.js';
import cart from './cart.js';

import findById from './findById.js';

import calcLineItem from './calcLineItem.js';
import renderLineItem from './render-line-items.js';

const checkOutTable = document.getElementById('checkout');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cardToAdd = findById(cards, cartItem.id); 
    const lineTotal = calcLineItem(cartItem.quantity, cardToAdd.price);
    const cardRow = renderLineItem(cartItem, cardToAdd);
    cardRow.price = lineTotal;
    
    checkOutTable.appendChild(cardRow);
}
