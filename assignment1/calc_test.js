var calc = require('../calc.js');
var expect = require('chai').expect;
var a = 2;
var b = 3;

describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc(a,b).add()).to.eql(a+b)
  });
  //console.log(a+b); //a little debugging
});

describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc(a,b).subtract()).to.eql(a-b)
  });
  //console.log(a-b);
});

describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc(a,b).multiply()).to.eql(a*b)
  });
  //console.log(b);
});

describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc(a,b).divide()).to.eql(a/b)
  });
  //console.log(a); a little debugging
});

