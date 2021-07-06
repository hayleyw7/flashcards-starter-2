const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const newCards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.deck = new Deck(newCards);
    this.round = new Round(this.deck);
    this.currentRound = this.round;
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${
      this.currentRound.deck.countCards()
    } cards.
-----------------------------------------------------------------------`)  
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
