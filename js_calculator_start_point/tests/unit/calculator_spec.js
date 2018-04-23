var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add ', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(40, calculator.runningTotal);
  })
  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  })

  it('can numberClick', function(){
    calculator.clearClick();
    assert.equal('', calculator.runningTotal);
    assert.equal(null, calculator.previousTotal);
    assert.equal(true, calculator.newTotal);
    calculator.numberClick(0);
    assert.equal('', calculator.runningTotal);
    calculator.numberClick(2);
    assert.equal(false, calculator.newTotal);
    assert.equal(2, calculator.runningTotal);
    calculator.numberClick(2);
    assert.equal(22, calculator.runningTotal);
  })



  it('can set the previous operator when operatorClick is pressed', function(){
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
    calculator.operatorClick("+");
    assert.equal("+", calculator.previousOperator);
  })

  it('can clear the running total when clearClick is pressed', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);
    calculator.clearClick();
    assert.equal('', calculator.runningTotal);
  })




});
