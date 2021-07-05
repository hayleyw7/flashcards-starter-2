const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', () => {

  it.skip('Should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it.skip('Should be an instance of Round', () => {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  }); 
});
