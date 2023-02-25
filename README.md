
# Project 1 - SEI-024 - RJ Crowder-Schaefer

## Additional References:

* [Overview & User Behaviors](https://docs.google.com/document/d/1q5OINmezczvxB7SqI4vA7HNZpvmRJ5ot9DSpHzc-dcM/edit?usp=sharing)

* [Wireframe Mockups](https://www.figma.com/file/sgrSk5PUlpyOf4voi0thmm/Project-1---War---Wireframing?node-id=0%3A1&t=PREep9noM7QPLZom-1)

## Game Overview

**Type:** War (card game)

**Num players:** 2

**Objective:** Using a standard 52 card deck, two players go head to head with a winner declared when all 52 cards are in one of the player’s possession, leaving the other player without any cards.

## Basic Logic

* Card rank priority (high to low) A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2
* Suits are ignored
* Player cards are revealed simultaneously (1 card per player).
* Player with higher card wins round (“battle”) and receives losing player’s card.
* If the card values are the same then this starts a “War” and the players continue to flip cards until one player has a higher value card.
* The winning player receives all of the losing player’s cards from the war.
* If player runs out of cards during a war then they lose the game.

## How To Play

1. Decide who will be 'Player One' and who will be 'Player Two'.
2. Select the "Start Game" button. Player cards will be displayed and a battle winner identified.
3. Select "Let's Battle" to display another set of cards.
4. In the scenario where two card values are equal, a "War" will be initiated and can be started by selecting "Let's War!" The card total will continue to increase until one player has a higher value card. The winner will get all cards in the pile.

## How To Win

1. A player wins once they have all 52 cards in their possession.
2. A player will automatically lose if they run out of cards during a "War" scenario.