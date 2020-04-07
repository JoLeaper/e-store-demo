// IMPORT MODULES under test here:
// import example from '../src/example.js';

import renderCard from '../render-function.js';

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
