const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {

  it.skip('Should be a function', () => {

    expect(Game).to.be.a('function');
  });

  it.skip('Should be an instance of Game', () => {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  }); 
}
