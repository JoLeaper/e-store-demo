export default function removeByName(cards, cardName) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.name === cardName){
            cards.splice(i, 1);
            break;
        }
        
    }
    return cards;
}