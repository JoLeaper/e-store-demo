export function getCart(jsonObject) {
    let cart = [];
    if (jsonObject) {
        cart = JSON.parse(jsonObject);
    }
    return cart;
}

export function addToCart(card, cart, lineItem, selector) {

    if (!lineItem) {
        lineItem = {
            id: card.id,
            quantity: Number(selector.value)
        };   
        cart.push(lineItem);
    } else {
        lineItem.quantity = lineItem.quantity + Number(selector.value);
    }

    let jsonObject = JSON.stringify(cart);
    localStorage.setItem('cart', jsonObject);
}


export function clearCart() {
    localStorage.clear();
    location.assign('../index.html');
}

