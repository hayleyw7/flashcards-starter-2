const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Test', () => {

  it.skip('Should be a function', () => {

    expect(Test).to.be.a('function');
  });

  it.skip('Should be an instance of Test', () => {
    const test = new Test();

    expect(test).to.be.an.instanceof(Test);
  }); 
}
