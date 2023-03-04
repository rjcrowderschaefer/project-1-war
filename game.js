// Part One - Variable and Array Creation (upon browser load/refresh)
/**
 * create const variables for suits & values
 * createDeck function to create const unshuffled, ordered deck of cards
 * shuffleDeck function to shuffle const deck each time called
 * split shuffled deck into player 1 & player 2 (26 each): player1 array = index 0-25, player2 array = 26-51
 * Assign split deck arrays to each player
 */
const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  compare(card) {
    if (card.value === this.value) {
      if (suits.indexOf(card.suit) > suits.indexOf(this.suit)) {
        return card;
      } else {
        return this;
      }
    } else if (values.indexOf(card.value) > values.indexOf(this.value)) {
      return card;
    } else {
      return this;
    }
  }
}

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

deal() {
    return this.cards.shift();
  }
}

const deck = new Deck(
  suits.flatMap((suit) => values.map((value) => new Card(suit, value)))
);

deck.shuffle();

const deckMiddle = Math.ceil(deck.cards.length / 2);
const player1Deck = new Deck(deck.cards.slice(0, deckMiddle));
const player2Deck = new Deck(deck.cards.slice(deckMiddle, deck.cards.length));

// console.log(player1Deck);
// console.log(player2Deck);

// Part Two - Gameplay Functions (upon "Battle" or "War" button selection)

function startGame() {
    deck.shuffle();
}

function battleTime() {
    const player1Card = player1Deck.deal();
    const player2Card = player2Deck.deal();

    const winningCard = player1Card.compare(player2Card);


    if (player1Card.value === player2Card.value) {
        console.log(player1Card)
        console.log(player2Card)
        console.log(`It's a tie!`);
        warTime(player1Card, player2Card);
    }
  
  else if (winningCard === player1Card) {
    // console.log(player1Card)
    // console.log(player2Card)
    console.log(`Player 1 wins!`);
    player1Deck.cards.push(player1Card)
    player1Deck.cards.push(player2Card)
    // console.log(player1Deck)
  } else if (winningCard === player2Card) {
    // console.log(player1Card)
    // console.log(player2Card)
    console.log(`Player 2 wins!`);
    player2Deck.cards.push(player1Card)
    player2Deck.cards.push(player2Card)
    // console.log(player2Deck)
  } else {
    console.log(`There's an error happening`);
  }
}
battleTime();
console.log(player1Deck.cards.length)
console.log(player2Deck.cards.length)
// console.log(player1Deck);
// console.log(player2Deck)

function warTime(card1, card2){
    let player1CardCurrent = player1Deck.deal();
    let player2CardCurrent = player2Deck.deal();
    let warCards = [];
    while (player1CardCurrent.value === player2CardCurrent.value) {
        warCards.push(player1CardCurrent, player2CardCurrent)
        player1CardCurrent = player1Deck.deal();
        player2CardCurrent = player2Deck.deal();
    } if (player1CardCurrent.value > player2CardCurrent.value) {
        // logic for adding to player 1 array
        player1Deck.cards.push(card1, card2, player1CardCurrent, player2CardCurrent)
        player1Deck.cards = player1Deck.cards.concat(warCards)
    } else {
        // logif for adding to player 2 array
        player2Deck.cards.push(card1, card2, player1CardCurrent, player2CardCurrent)
        player2Deck.cards = player2Deck.cards.concat(warCards)
    }
}

document.querySelector('.start-game').addEventListener("click", battleTime);

/**
 * Grab & compare first index of each player deck
 * Determine winner based on highest card value
 * Move player1 & player2 cards to bottom of winner's deck
 * Update deck total numbers
 * If values are tied, then call battle function & deal two more cards (next card in each player array). "War Total" count is updated.




// Part Three - Gameover Functions
/**
 * Identify game winner based on winner total = 52 or loser total = 0
 * Upon game completion, update total wins for winner
 */

// Part Four - DOM Manipulation


/**
 * 
 * Upon browser load:
 * Display 'Start Game' button
 * "Card number" and number are hidden
 * Deck total = 26
 * Total wins = 0 for each player
 * All other buttons are hidden
 *  
 * Upon 'Start Game' click:
 * Player1 & Player2 card numbers are visible and winner is indicated
 * 'Let's Battle' button appears
 * All other buttons are hidden
 * 
 * Upon card tie/war scenario:
 * Verbal indication of a tie
 * 'Let's war' button appears
 * 'Let's war, again' button appears if another tie
 * All other buttons are hidden
 * 
 * Upon game completion:
 * Winner is indicated
 * Totals wins number is updated for winner
 * 'Play again' button is displayed
 * 
 * Upon 'play again' click:
 * Player1 & Player2 card numbers are visible and winner is indicated
 * 'Let's Battle' button appears
 * All other buttons are hidden


// Stretch features

/**
 * Card design to align with look/feel of actual deck of cards
 * Overall design (background, layout, etc)
 * 'Reset button' with alert indicating game & totals will be fully reset
 */



