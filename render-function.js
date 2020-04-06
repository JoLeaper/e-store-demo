function renderCard(card) {
    const li = document.createElement('li');
    const cardName = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardCategory = document.createElement('p');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');

    cardName.textContent = card.name;
    cardImage.src = card.image;
    cardCategory.textContent = card.category;
    cardDescription.textContent = card.description;
    cardPrice.textContent = card.price;

    li.append(cardName, cardImage, cardCategory, cardDescription, cardPrice);

    return li;
}


export default renderCard;