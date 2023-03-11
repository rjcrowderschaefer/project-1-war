const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const currentWarStarters = [];

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

function startGame() {
    document.querySelector('.start-game').style.display = 'block'; 
    this.style.visibility = 'hidden';
    document.querySelector('.lets-battle').style.visibility = "visible";
    document.querySelector('.player1-deck-total').innerText = player1Deck.cards.length;
    document.querySelector('.player2-deck-total').innerText = player2Deck.cards.length;
}

function battleTime() {
    const player1Card = player1Deck.deal();
    const player2Card = player2Deck.deal();
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
    } else if (winningCard === player1Card) {
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
      document.querySelector('.text').innerText = 'Error. Nobody wins!';
    } renderView();
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
    let player1CardCurrent = player1Deck.deal();
    let player2CardCurrent = player2Deck.deal();
    let warCards = [];

    while (player1CardCurrent.value === player2CardCurrent.value) {
        warCards.push(player1CardCurrent, player2CardCurrent)
        player1CardCurrent = player1Deck.deal();
        player2CardCurrent = player2Deck.deal();
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
        document.querySelector('.lets-war').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-battle').style.visibility = "visible";
        document.querySelector('.text').innerText = 'Player 1 wins the war!';
        p1HandsWon++
    } else {
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
        document.querySelector('.lets-war').style.display = 'block'; 
        this.style.visibility = 'hidden';
        document.querySelector('.lets-battle').style.visibility = "visible";
        document.querySelector('.text').innerText = 'Player 2 wins the war!';
        p2HandsWon++
    }
    renderView();
    return warCards
}

document.querySelector('.start-game').addEventListener("click", startGame);
document.querySelector('.lets-battle').addEventListener("click", battleTime);
document.querySelector('.lets-war').addEventListener("click", warTime);
document.querySelector('.lets-war-again').addEventListener("click", warTime);