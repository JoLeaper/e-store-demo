import cards from '../data/cards.js';

import findById from '../findById.js';

import renderLineItem from '../render-line-items.js';

import calcOrderTotal from '../calc-order-total.js';
import { clearCart } from '../cart-api.js';

const checkOutTable = document.getElementById('checkout');
const totalSale = document.getElementById('total-sale');

const purchaseButton = document.getElementById('purchase');
purchaseButton.innerHTML = 'Purchase';

const rawCartData = localStorage.getItem('cart');
const cart = JSON.parse(rawCartData);




for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cardToAdd = findById(cards, cartItem.id); 
    const cardRow = renderLineItem(cartItem, cardToAdd);
    checkOutTable.appendChild(cardRow);
    totalSale.textContent = calcOrderTotal(cart, cards);
}


if (cart === []){
    purchaseButton.disabled = true;
}

purchaseButton.addEventListener('click', function() {
    console.log(checkOutTable);
    alert(JSON.stringify(cart, true, 2));
    clearCart();

});