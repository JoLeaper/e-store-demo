import findById from './findById.js';
import create100Selects from './create-100-selects.js';
import { getCart, addToCart } from './cart-api.js';

function renderCard(card) {
    const li = document.createElement('li');
    const cardName = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardCategory = document.createElement('p');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');
    const button = document.createElement('button');
    const selector = document.createElement('select');

    cardName.textContent = card.name;
    cardImage.src = card.image;
    cardCategory.textContent = card.category;
    cardDescription.textContent = card.description;
    cardPrice.textContent = `$${card.price}`;
    button.innerHTML = 'Add';

    let newSelector = create100Selects(selector);
    let jsonObject = localStorage.getItem('cart');
    button.addEventListener('click', function() {
  
        let cart = getCart(jsonObject);
        let lineItem = findById(cart, card.id);

        addToCart(card, cart, lineItem, newSelector);
    });


    li.append(cardName, cardImage, cardCategory, cardDescription, cardPrice, button, selector);
    
    return li;
}


export default renderCard;