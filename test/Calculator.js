//load node.js assertion library
const assert = require("assert");

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("add: Adds 1 and 2",function(){
	var result = calc.add(1,2);
	assert.equal(result,3);
  });

  it("subtract: Six - Three",function(){
	var result = calc.subtract(6,3);
	assert.equal(result,3);
  });

  it("multiply: Three times seven",function(){
	var result = calc.multiply(7,3);
	assert.equal(result,21);
  });

  it("divide: Four divided Two",function(){
	var result = calc.divide(6,3);
	assert.equal(result,2);
  });

});
