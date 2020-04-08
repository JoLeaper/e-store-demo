import cards from '../data/cards.js';
import cart from '../data/cart.js';

import findById from '../findById.js';

import renderLineItem from '../render-line-items.js';

import calcOrderTotal from '../calc-order-total.js';

const checkOutTable = document.getElementById('checkout');
const totalSale = document.getElementById('total-sale');
const purchaseButton = document.getElementById('purchase');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cardToAdd = findById(cards, cartItem.id); 
    const cardRow = renderLineItem(cartItem, cardToAdd);
    checkOutTable.appendChild(cardRow);
    totalSale.textContent = calcOrderTotal(cart, cards);
}


purchaseButton.innerHTML = 'Purchase';
purchaseButton.addEventListener('click', function() {
});