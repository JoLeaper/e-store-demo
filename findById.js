function findById(cards, id) {
    let cardObject = null;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id === id){
            cardObject = card;
        }    
    }
    return cardObject;
}

export default findById;