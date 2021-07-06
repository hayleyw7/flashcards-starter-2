const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {

  it('should be a function', () => {
      
    expect(Game).to.be.a('function');
  });

  it('should create Cards', () => {
    const game = new Game();

    game.start();

    expect(game.deck.cards).to.exist;
  });

  it('should put cards in a deck', () => {
    const game = new Game();

    game.start();

    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });

  it('should create new round', () => {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.exist;
  });

  it('should keep track of currentRound', () => {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.equal(game.round);
  });
});
