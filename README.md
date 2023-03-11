
# Project 1 - SEI-024 - RJ Crowder-Schaefer

## Github Pages Link:

* [Click to play game](https://rjcrowderschaefer.github.io/project-1-war/)

## Additional References:

* [Intial Overview & User Behaviors](https://docs.google.com/document/d/1q5OINmezczvxB7SqI4vA7HNZpvmRJ5ot9DSpHzc-dcM/edit?usp=sharing)

* [Initial Wireframe Mockups](https://www.figma.com/file/sgrSk5PUlpyOf4voi0thmm/Project-1---War---Wireframing?node-id=0%3A1&t=PREep9noM7QPLZom-1)

## Game Overview

**Type:** War (card game)

**Num players:** 2

**Objective:** Using a standard 52 card deck, two players go head to head with a winner declared when all 52 cards are in one of the player’s possession, leaving the other player without any cards.

**Technologies Used:** HTML, CSS, Javascript

## Basic Logic

* Card rank priority (high to low) A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2
* Suits are ignored
* Player cards are revealed simultaneously (1 card per player).
* Player with higher card wins round (“battle”) and receives losing player’s card.
* If the card values are the same then this starts a “War” and the players continue to flip cards until one player has a higher value card.
* The winning player receives all of the losing player’s cards from the war.
* If player runs out of cards during a war then they lose the game.

## Getting Started

1. Decide who will be 'Player One' and who will be 'Player Two'.
2. Select the "Start Game" button to shuffle the deck and assign 26 cards to each player.
3. Select "Let's Battle" to display flip the top card in each player's deck. The player with the higher valued card will win the battle, indicated by the game with a message in the browser. The winning player received their card and the loser's card, which go to the bottom of the winner's deck.
4. In the scenario where two card values are equal, a "War" will be initiated and can be started by selecting "Let's War!" The player with the higher valued card will win the war and collect all of the cards associated with the previous battle and war, placed at the bottom of their deck.
5. If the initial war results in another tie, then two more cards will be flipped using the "Let's Battle Again" button. This is repeated until a winner is determined.

## How To Win

1. A player wins once they have all 52 cards in their possession.
2. A player will automatically lose if they run out of cards during a "War" scenario.

## Game Screenshots

* Start Game

![View of War Game from initial page load](/img/war_start-game.png)

* Ready to Battle

![Button visible to initiate head-to-head battle](/img/war_lets-battle.png)

* Winning player identified

![Player 2 has a higher card and winner message displayed](/img/war_player2-wins.png)

* Going to War

![Players 1 & 2 card values are the same, time to go to war](/img/war_war-time.png)

* Winning A War

![Player 1 has a higher card and wins the war](/img/war-war-winner.png)





## Next Steps & Future Enhancements

* Style & Layout
1. Update card styling to look & feel like a real card deck
2. Include mobile reponsive layout across primary screen breakpoints
3. Fix button display inconsistencies
4. General styling updates for enhanced user experience

* Functinality & Interactivity
1. Implement player winning logic 
2. Allow player names to be manually changed
3. Implement card flipping animation when cards are dealt
4. Implement card stacking animation when player wins


