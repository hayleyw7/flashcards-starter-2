const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {

    expect(Deck).to.be.a('function');
  });

  it('should contain cards', () => {

    const card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );

    const card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );

    const card3 = new Card(
      12,
      'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );

    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.cards).to.deep.equal([
      {
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: [ 'sea otter', 'pug', 'capybara' ],
        correctAnswer: 'sea otter'
      },
      {
        id: 14,
        question: 'What organ is Khalid missing?',
        answers: [ 'spleen', 'appendix', 'gallbladder' ],
        correctAnswer: 'gallbladder'
      },
      {
        id: 12,
        question: "What is Travis's favorite stress reliever?",
        answers: [
          'listening to music',
          'watching Netflix',
          'playing with bubble wrap'
        ],
        correctAnswer: 'playing with bubble wrap'
      }
    ]
    );
  });

  it('should count cards', () => {

    const card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );

    const card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );

    const card3 = new Card(
      12,
      'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );

    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.countCards()).to.equal(3);
  });
});
