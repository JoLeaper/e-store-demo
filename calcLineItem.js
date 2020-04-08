function calcLineItem(cardQuantity, cardPrice) {
    let cardTotal = cardQuantity * cardPrice;
    let decimalTotal = Math.round(cardTotal * 100) / 100;
    return decimalTotal;
}


export default calcLineItem;