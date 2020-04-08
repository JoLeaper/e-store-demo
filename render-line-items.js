import calcLineTotal from './calcLineItem.js';

function renderLineItem(cartItem, cardObject) {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemQuantity = document.createElement('td');
    const lineItemPrice = document.createElement('td');

    itemName.textContent = cardObject.name;
    itemQuantity.textContent = cartItem.quantity;
    let lineTotal = calcLineTotal(cartItem.quantity, cardObject.price);
    lineItemPrice.textContent = '$ ' + lineTotal.toFixed(2);

    tr.append(itemName, itemQuantity, lineItemPrice);
    return tr;
}

export default renderLineItem;