import getCards from '../getCards.js';
import addProduct from './addProduct.js';

const myForm = document.getElementById('add-product');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const myFormData = new FormData(myForm);
    
    const newCard = {
        id: myFormData.get('id'),
        name: myFormData.get('name'),
        image: myFormData.get('image'),
        description: myFormData.get('description'),
        category: myFormData.get('category'),
        price: Number(myFormData.get('price'))
    };

    getCards();
    addProduct(newCard);
});