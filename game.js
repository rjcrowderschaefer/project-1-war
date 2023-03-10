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
const currentWarStarters = [];

// const player1Slot = document.querySelector(".player1-card-slot")
// const player2Slot = document.querySelector(".player2-card-slot")
// const player1DeckTotal = document.querySelector(".player1-deck")
// const player2DeckTotal = document.querySelector(".player2-deck")
// const winnerAlert = document.querySelector(".winner-text")

let p1HandsWon = 0
let p2HandsWon = 0

document.querySelector('.lets-battle').style.visibility = "hidden";
document.querySelector('.play-again').style.visibility = "hidden";
document.querySelector('.lets-war').style.visibility = "hidden";
document.querySelector('.lets-war-again').style.visibility = "hidden";
document.querySelector('.war-name').style.visibility = "hidden";
document.querySelector('.war-total').style.visibility = "hidden";


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
    let dealCard = this.cards.shift();
    console.log(dealCard);
    // return this.cards.shift();
    return dealCard;
  }
}

const deck = new Deck(
  suits.flatMap((suit) => values.map((value) => new Card(suit, value)))
);

deck.shuffle();

const deckMiddle = Math.ceil(deck.cards.length / 2);
const player1Deck = new Deck(deck.cards.slice(0, deckMiddle));
const player2Deck = new Deck(deck.cards.slice(deckMiddle, deck.cards.length));

console.log(player1Deck);
console.log(player2Deck);
console.log(player1Deck.cards);
console.log(player2Deck.cards);

// Part Two - Gameplay Functions (upon "Battle" or "War" button selection)

function startGame() {
    // deck.shuffle();
    document.querySelector('.start-game').style.display = 'block'; 
    this.style.visibility = 'hidden';
    document.querySelector('.lets-battle').style.visibility = "visible";
    document.querySelector('.player1-deck-total').innerText = player1Deck.cards.length;
    document.querySelector('.player2-deck-total').innerText = player2Deck.cards.length;
}


function battleTime() {
    const player1Card = player1Deck.deal();
    const player2Card = player2Deck.deal();
    console.log(player1Card)
    console.log(player2Card)
    const winningCard = player1Card.compare(player2Card);

    
    document.querySelector('.player1-card-value-top').innerText = player1Card.value
    document.querySelector('.player1-card-value-bottom').innerText = player1Card.value
    document.querySelector('.player1-card-suit').innerText = player1Card.suit;
    document.querySelector('.player2-card-value-top').innerText = player2Card.value
    document.querySelector('.player2-card-value-bottom').innerText = player2Card.value
    document.querySelector('.player2-card-suit').innerText = player2Card.suit;
 

    if (player1Card.value === player2Card.value) {
        currentWarStarters[0] = player1Card
        currentWarStarters[1] = player2Card
        document.querySelector('.text').innerText = 'War Time!';
        document.querySelector('.lets-battle').style.display = 'block'; 
        document.querySelector('.lets-battle').style.visibility = 'hidden';
        document.querySelector('.lets-war').style.visibility = "visible";
    }
  
  else if (winningCard === player1Card) {
    document.querySelector('.text').innerText = 'Player 1 wins!';
    p1HandsWon++;
    player1Deck.cards.push(player1Card)
    player1Deck.cards.push(player2Card)
  } else if (winningCard === player2Card) {
    document.querySelector('.text').innerText = 'Player 2 wins!';
    p2HandsWon++;
    player2Deck.cards.push(player1Card)
    player2Deck.cards.push(player2Card)
  } else {
    console.log(`There's an error happening`);
  } console.log(
    player1Deck,
    player2Deck,
  )
  renderView();
}

function renderView() {
  document.querySelector('.player1-deck-total').innerHTML = player1Deck.cards.length;
  document.querySelector('.player2-deck-total').innerHTML = player2Deck.cards.length;
  document.querySelector('.player1-win-total').innerHTML = p1HandsWon;
  document.querySelector('.player2-win-total').innerHTML = p2HandsWon;
}


function warTime(){
    const card1 = currentWarStarters[0]
    const card2 = currentWarStarters[1]
    console.log('clicked');
    let player1CardCurrent = player1Deck.deal();
    let player2CardCurrent = player2Deck.deal();
    console.log(player1CardCurrent, player2CardCurrent);
    let warCards = [];
    console.log(document.querySelector('.lets-battle'))
    console.log(player2Deck.cards)  
    while (player1CardCurrent.value === player2CardCurrent.value) {
        warCards.push(player1CardCurrent, player2CardCurrent)
        player1CardCurrent = player1Deck.deal();
        player2CardCurrent = player2Deck.deal();
        console.log(card1, card2, player1CardCurrent, player2CardCurrent)
        
        document.querySelector('.player1-card-value-top').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-value-bottom').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-suit').innerText = player1CardCurrent.suit;
        document.querySelector('.player2-card-value-top').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-value-bottom').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-suit').innerText = player2CardCurrent.suit;
        document.querySelector('.player1-deck-total').innerHTML = player1Deck.cards.length;
        document.querySelector('.player2-deck-total').innerHTML = player2Deck.cards.length;
        document.querySelector('.lets-war').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-battle').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-war-again').style.visibility = "visible";
        document.querySelector('.text').innerText = 'The war goes on';

        
    } if (player1CardCurrent.value > player2CardCurrent.value) {
        // logic for adding to player 1 array
        // document.querySelector('.player1-card-num').innerText = player1CardCurrent.value + player1CardCurrent.suit;
        // document.querySelector('.player2-card-num').innerText = player2CardCurrent.value + player2CardCurrent.suit;
        document.querySelector('.player1-card-value-top').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-value-bottom').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-suit').innerText = player1CardCurrent.suit;
        document.querySelector('.player2-card-value-top').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-value-bottom').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-suit').innerText = player2CardCurrent.suit;
        document.querySelector('.player1-deck-total').innerHTML = player1Deck.cards.length;
        document.querySelector('.player2-deck-total').innerHTML = player2Deck.cards.length;
        player1Deck.cards.push(card1, card2, player1CardCurrent, player2CardCurrent)
        player1Deck.cards = player1Deck.cards.concat(warCards)
        console.log(card1, card2, player1CardCurrent, player2CardCurrent)
        document.querySelector('.lets-war').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-battle').style.visibility = "visible";
        document.querySelector('.text').innerText = 'Player 1 Win';
        p1HandsWon++
    } else {
        // logic for adding to player 2 array
        // document.querySelector('.player1-card-num').innerText = player1CardCurrent.value + player1CardCurrent.suit;
        // document.querySelector('.player2-card-num').innerText = player2CardCurrent.value + player2CardCurrent.suit;
        document.querySelector('.player1-card-value-top').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-value-bottom').innerText = player1CardCurrent.value;
        document.querySelector('.player1-card-suit').innerText = player1CardCurrent.suit;
        document.querySelector('.player2-card-value-top').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-value-bottom').innerText = player2CardCurrent.value;
        document.querySelector('.player2-card-suit').innerText = player2CardCurrent.suit;
        document.querySelector('.player1-deck-total').innerHTML = player1Deck.cards.length;
        document.querySelector('.player2-deck-total').innerHTML = player2Deck.cards.length;
        player2Deck.cards.push(card1, card2, player1CardCurrent, player2CardCurrent)
        player2Deck.cards = player2Deck.cards.concat(warCards)
        console.log(card1, card2, player1CardCurrent, player2CardCurrent)

        document.querySelector('.lets-war').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-battle').style.visibility = "visible";
        document.querySelector('.text').innerText = 'Player 2 Wins';

        p2HandsWon++
    }
    renderView();
    return warCards
}



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

document.querySelector('.start-game').addEventListener("click", startGame);
document.querySelector('.lets-battle').addEventListener("click", battleTime);
document.querySelector('.lets-war').addEventListener("click", warTime);
document.querySelector('.lets-war-again').addEventListener("click", warTime);




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



