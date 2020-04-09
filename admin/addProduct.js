import getCards from '../getCards.js';

export default function addProduct(productObject) {
    // existing products array
    const cards = getCards();
    
    // push into existing array
    cards.push(productObject);
    
    // put back
    const stringProducts = JSON.stringify(cards);
    localStorage.setItem('CARDS', stringProducts);

    return stringProducts;
}

// event.preventDefault();
// console.log('i clicked the form!!');

// const myFormData = new FormData(myForm);

// const product = {
//     id: myFormData.get('id'),
//     name: myFormData.get('name'),
//     image: myFormData.get('image'),
//     description: myFormData.get('description'),
//     catagory: myFormData.get('catagory'),
//     price: myFormData.get('price'),
//     cost: myFormData.get('cost')
// };

// console.log(product);

// const fruits = localStorage.getItem('PRODUCTS');

// const parsedFruits = JSON.parse(fruits);


// parsedFruits.push(product);

// console.log(parsedFruits); 

// const stringyNewProducts = JSON.stringify(parsedFruits);

// localStorage.setItem('PRODUCTS', stringyNewProducts);