function calcLineItem(cardQuantity, cardPrice) {
    let cardTotal = cardQuantity * cardPrice;
    let decimalTotal = cardTotal.toFixed(2);
    return `$${decimalTotal}`;
}


export default calcLineItem;