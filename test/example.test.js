// IMPORT MODULES under test here:
// import example from '../src/example.js';
// import rawCards from './data/cards.js';
import renderCard from '../render-function.js';
import findById from '../findById.js';
import calcLineItem from '../calcLineItem.js';
import renderLineItem from '../render-line-items.js';
import calcOrderTotal from '../calc-order-total.js';
import addProduct from '../admin/addProduct.js';

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
    // eslint-disable-next-line no-useless-escape
    const expected = `<li><h3>Dark Magician</h3><img src=\"./assets/dark-magician2.png\"><p>Monster</p><p>The ultimate wizard in terms of attack and defense.</p><p>$70</p><button>Add</button><select><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option><option value=\"32\">32</option><option value=\"33\">33</option><option value=\"34\">34</option><option value=\"35\">35</option><option value=\"36\">36</option><option value=\"37\">37</option><option value=\"38\">38</option><option value=\"39\">39</option><option value=\"40\">40</option><option value=\"41\">41</option><option value=\"42\">42</option><option value=\"43\">43</option><option value=\"44\">44</option><option value=\"45\">45</option><option value=\"46\">46</option><option value=\"47\">47</option><option value=\"48\">48</option><option value=\"49\">49</option><option value=\"50\">50</option><option value=\"51\">51</option><option value=\"52\">52</option><option value=\"53\">53</option><option value=\"54\">54</option><option value=\"55\">55</option><option value=\"56\">56</option><option value=\"57\">57</option><option value=\"58\">58</option><option value=\"59\">59</option><option value=\"60\">60</option><option value=\"61\">61</option><option value=\"62\">62</option><option value=\"63\">63</option><option value=\"64\">64</option><option value=\"65\">65</option><option value=\"66\">66</option><option value=\"67\">67</option><option value=\"68\">68</option><option value=\"69\">69</option><option value=\"70\">70</option><option value=\"71\">71</option><option value=\"72\">72</option><option value=\"73\">73</option><option value=\"74\">74</option><option value=\"75\">75</option><option value=\"76\">76</option><option value=\"77\">77</option><option value=\"78\">78</option><option value=\"79\">79</option><option value=\"80\">80</option><option value=\"81\">81</option><option value=\"82\">82</option><option value=\"83\">83</option><option value=\"84\">84</option><option value=\"85\">85</option><option value=\"86\">86</option><option value=\"87\">87</option><option value=\"88\">88</option><option value=\"89\">89</option><option value=\"90\">90</option><option value=\"91\">91</option><option value=\"92\">92</option><option value=\"93\">93</option><option value=\"94\">94</option><option value=\"95\">95</option><option value=\"96\">96</option><option value=\"97\">97</option><option value=\"98\">98</option><option value=\"99\">99</option></select></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const darkMagicianCard = renderCard(darkMagician);
    const result = darkMagicianCard.outerHTML;
    
    //Assert
    // Make assertions about what is expected valid result
    // eslint-disable-next-line no-useless-escape
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

    const expected = '<tr><td>Elemental HERO Neos</td><td>2</td><td>$ 60.00</td><td>$ 120.00</td></tr>'
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


test('addProduct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const darkMagician = {
        id: 9,
        name: 'Dark Magician',
        image: './assets/dark-magician2.png',
        description: 'The ultimate wizard in terms of attack and defense.',
        category: 'Monster',
        price: 70

    };
    // eslint-disable-next-line no-useless-escape
    const expected = `[{\"id\":1,\"name\":\"Dark Magician\",\"image\":\"../assets/dark-magician2.png\",\"description\":\"The ultimate wizard in terms of attack and defense.\",\"category\":\"Monster\",\"price\":70},{\"id\":2,\"name\":\"Elemental HERO Neos\",\"image\":\"../assets/neos.png\",\"description\":\"A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.\",\"category\":\"Monster\",\"price\":60},{\"id\":3,\"name\":\"Stardust Dragon\",\"image\":\"../assets/stardust-dragon.png\",\"description\":\"1 Tuner + 1+ non-Tuner monsters\\n        When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.\",\"category\":\"Monster\",\"price\":50},{\"id\":4,\"name\":\"Number 39: Utopia\",\"image\":\"../assets/utopia.png\",\"description\":\"2 Level 4 monsters\\n        When a monster declares an attack: You can detach 1 material from this card; negate the attack. If this card is targeted for an attack, while it has no material: Destroy this card.\",\"category\":\"Monster\",\"price\":40},{\"id\":5,\"name\":\"Odd-Eyes Pendulum Dragon\",\"image\":\"../assets/oddeyes.png\",\"description\":\"Pendulum Effect: You can reduce the battle damage you take from an attack involving a Pendulum Monster you control to 0. During your End Phase: You can destroy this card, and if you do, add 1 Pendulum Monster with 1500 or less ATK from your Deck to your hand. You can only use each Pendulum Effect of \\\"Odd-Eyes Pendulum Dragon\\\" once per turn.\\n        Monster Effect: If this card battles an opponent's monster, any battle damage this card inflicts to your opponent is doubled.\",\"category\":\"Monster\",\"price\":30},{\"id\":6,\"name\":\"Decode Talker\",\"image\":\"../assets/decode-talker.png\",\"description\":\"2+ Effect Monsters\\n        Gains 500 ATK for each monster it points to. When your opponent activates a card or effect that targets a card(s) you control (Quick Effect): You can Tribute 1 monster this card points to; negate the activation, and if you do, destroy that card.\",\"category\":\"Monster\",\"price\":20},{\"id\":7,\"name\":\"Sevens Road Magician\",\"image\":\"../assets/seven-roads.png\",\"description\":\"[Requirement]: Send the top card from your Deck to the Graveyard.\\n\\n[Effect]: This card gains 300 ATK for each Attribute monster in your graveyard.\",\"category\":\"Monster\",\"price\":10},{\"id\":8,\"name\":\"Blue-Eyes White Dragon\",\"image\":\"../assets/blue-eyes.png\",\"description\":\"The legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.\",\"category\":\"Monster\",\"price\":100},{\"id\":9,\"name\":\"Dark Magician\",\"image\":\"./assets/dark-magician2.png\",\"description\":\"The ultimate wizard in terms of attack and defense.\",\"category\":\"Monster\",\"price\":70}]`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = addProduct(darkMagician);
    console.log(result);
    
    //Assert
    // Make assertions about what is expected valid result
    // eslint-disable-next-line no-useless-escape
    assert.equal(expected, result);
});