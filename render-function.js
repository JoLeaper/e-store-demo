import findById from '../findById.js';

function renderCard(card) {
    const li = document.createElement('li');
    const cardName = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardCategory = document.createElement('p');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');
    // const cardsToPurchase = document.createElement('button')
    const button = document.createElement('button');

    cardName.textContent = card.name;
    cardImage.src = card.image;
    cardCategory.textContent = card.category;
    cardDescription.textContent = card.description;
    cardPrice.textContent = `$${card.price}`;
    button.innerHTML = 'Add';
    button.addEventListener('click', function() {
        let jsonObject = localStorage.getItem('cart');
        let cart;

        if (jsonObject) {
            cart = JSON.parse(jsonObject);
        } else {
            cart = [];
        }

        let lineItem = findById(cart, card.id);

        if (!lineItem) {
            lineItem = {
                id: card.id,
                quantity: 1
            };

            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }

        jsonObject = JSON.stringify(cart);
        localStorage.setItem('cart', jsonObject);

    });


    li.append(cardName, cardImage, cardCategory, cardDescription, cardPrice, button);
    
    return li;
}


export default renderCard;