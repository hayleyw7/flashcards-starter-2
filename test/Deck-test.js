const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Turn', () => {
  
  it('should be a function', () => {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  }); 
}