import findById from './findById.js';
import calcLineItem from './calcLineItem.js';

function calcOrderTotal(cart, cards) {
    let orderTotal = 0;
    
    for (let i = 0; i < cart.length; i++) {
        let cartSpot = cart[i];

        let cardToAdd = findById(cards, cartSpot.id);
        let amountToAdd = calcLineItem(cartSpot.quantity, cardToAdd.price);
        orderTotal += amountToAdd;
    }
    return '$ ' + orderTotal.toFixed(2);
}

export default calcOrderTotal;