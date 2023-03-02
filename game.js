// Part One - Variable and Array Creation (upon browwser load/refresh)

const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class cardDeck {
    constructor(deck) {
        this.deck = deck;
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function createDeck() {
    let deck = new Array();
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = values[j] + suits[i];
            deck.push(card);
        }
    }
    return deck;
}

const deck = createDeck()

// console.log(deck)

function shuffleDeck() {
    let freshDeck = new Array();
    for (let i = deck.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i]
        
        deck[i] = deck[j];
        deck[j] = temp;
        freshDeck.push(deck[i]);
    } return freshDeck;
} 

let freshDeck = shuffleDeck(deck)

// console.log(freshDeck)

const deckMiddle = Math.ceil(freshDeck.length / 2)
player1Deck = freshDeck.slice(0, deckMiddle)
player2Deck = freshDeck.slice(deckMiddle, freshDeck.length)

console.log(player1Deck)
console.log(player2Deck)


/**
 * create deck deck using the constructor class method
 * create card class using contructor class method (suit & value)
 * create deck of 52 cards using suits and values (const variables)
 * function to create const unshuffled deck of cards
 * function to shuffle const deck each time called
 * split shuffled deck into player 1 & player 2 (26 each) 
 */

// Part Two - Deck Randomization & Split (upon "Start Game" button selection)

/**
 * Randomize full card deck array
 * Split randomized card deck into two arrays: player 1 array = index 0-25, player 2 array = 26-51
 * Assign split deck arrays to each player 
 */

// Part Three - Gameplay Functions (upon "Battle" or "War" button selection)

/**
 * Grab next index in each player card array and display
 * Identify winner based on highest card value
 * If values are tied, then call battle function & deal two more cards (next card in each player array). "War Total" count is updated.
 * Identify game winner based on winner total = 52 or loser total = 0
 */

// Part Three - Wins Update & Start Again (upon winning/losing condition)

/**
 * Update game winner's total wins
 * Allow for game to be restarted
 */






// for reference while coding:
/** 
 * 
 * /** 
 * Declare player one & two variables
 * Declare 52 card deck, including suits & numbers
 * Assign image to each card type 
 * Assign value to each card: 2 through 13
 */
