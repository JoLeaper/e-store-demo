import calcLineTotal from './calcLineItem.js';

function renderLineItem(cartItem, cardObject) {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemPrice = document.createElement('td');
    const itemQuantity = document.createElement('td');
    const lineItemPrice = document.createElement('td');

    itemName.textContent = cardObject.name;
    itemQuantity.textContent = cartItem.quantity;
    itemPrice.textContent = cardObject.price;
    lineItemPrice.textContent = calcLineTotal(cartItem.quantity, cardObject.price);

    tr.append(itemName, itemQuantity, lineItemPrice);
    return tr;
}

export default renderLineItem;