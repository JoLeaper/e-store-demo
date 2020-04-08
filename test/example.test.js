// IMPORT MODULES under test here:
// import example from '../src/example.js';

import renderCard from '../render-function.js';
import findById from '../findById.js';
import calcLineItem from '../calcLineItem.js';
import renderLineItem from '../render-line-items.js';
import calcOrderTotal from '../calc-order-total.js';

const test = QUnit.test;

test('renderCard', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const darkMagician = {
        id: 1,
        name: 'Dark Magician',
        image: './assets/dark-magician2.png',
        description: 'The ultimate wizard in terms of attack and defense.',
        category: 'Monster',
        price: 70

    };
    const expected = `<li><h3>Dark Magician</h3><img src="./assets/dark-magician2.png"><p>Monster</p><p>The ultimate wizard in terms of attack and defense.</p><p>$70</p><button>Add</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const darkMagicianCard = renderCard(darkMagician);
    const result = darkMagicianCard.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('findById', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id1 = 1;
    const id2 = 2;
    const id3 = 3;
    const id4 = 4;
    const cards = [{
        id: 1,
        name: 'Dark Magician',
        image: './assets/dark-magician2.png',
        description: 'The ultimate wizard in terms of attack and defense.',
        category: 'Monster',
        price: 70

    },
    {
        id: 2,
        name: 'Elemental HERO Neos',
        image: './assets/neos.png',
        description: 'A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.',
        category: 'Monster',
        price: 60
    }];

    const expected1 = JSON.stringify(cards[0]);
    const expected2 = JSON.stringify(cards[1]);
    const expected3 = null;
    const expected4 = null;

    //Act 
    // Call the function you're testing and set the result to a const
    const darkMagicianObject = findById(cards, id1);
    const heroNeosObject = findById(cards, id2);
    const result1 = JSON.stringify(darkMagicianObject);
    const result2 = JSON.stringify(heroNeosObject);
    const result3 = findById(cards, id3);
    const result4 = findById(cards, id4);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, result1);
    assert.equal(expected2, result2);
    assert.equal(expected3, result3);
    assert.equal(expected4, result4);
});


test('calcLineItem', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cardQuantity = 7;
    const cardPrice = 50;

    const expected = 350.00;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineItem(cardQuantity, cardPrice);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('renderLineItem', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cartItem = {
        id: 1,
        quantity: 2
    };
    const cardObject = {
        id: 2,
        name: 'Elemental HERO Neos',
        image: './assets/neos.png',
        description: 'A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.',
        category: 'Monster',
        price: 60

    };

    const expected = '<tr><td>Elemental HERO Neos</td><td>2</td><td>$ 120.00</td></tr>'
    ;

    //Act 
    // Call the function you're testing and set the result to a const
    const renderedItem = renderLineItem(cartItem, cardObject);
    const result = renderedItem.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('calcOrderTotal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 2
        },
        {
            id: 3,
            quantity: 7
        },
    ];
    
    const cards = [{
        id: 1,
        name: 'Dark Magician',
        image: './assets/dark-magician2.png',
        description: 'The ultimate wizard in terms of attack and defense.',
        category: 'Monster',
        price: 70
    },

    {
        id: 2,
        name: 'Elemental HERO Neos',
        image: './assets/neos.png',
        description: 'A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.',
        category: 'Monster',
        price: 60

    },

    {
        id: 3,
        name: 'Stardust Dragon',
        image: './assets/stardust-dragon.png',
        description: `1 Tuner + 1+ non-Tuner monsters
        When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.`,
        category: 'Monster',
        price: 50

    }];

    const expected = `$ 610.00`;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcOrderTotal(cart, cards);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});