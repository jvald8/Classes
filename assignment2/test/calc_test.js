var calc = require('../calc.js');
var expect = require('chai').expect;
var a = 2;
var b = 3;

describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc.add(a,b)).to.eql(a+b);
  });
  it('should subtract the second parameter from the first', function(){
    expect(calc.subtract(a,b)).to.eql(a-b);
  });
  it('should multiply parameters', function(){
    expect(calc.multiply(a,b)).to.eql(a*b);
  });
  it('should divide the first parameter by the second', function(){
    expect(calc.divide(a,b)).to.eql(a/b);
  });
});

/*describe('calc', function(){
  it('should add both parameters', function(){
    expect(calc.add(a,b)).to.eql(a+b)
  });
  //console.log(a+b); //a little debugging
});

describe('calc', function(){
  it('should subtract the second parameter from the first', function(){
    expect(calc(a,b).subtract()).to.eql(a-b)
  });
  //console.log(a-b);
});

describe('calc', function(){
  it('should multiply parameters', function(){
    expect(calc(a,b).multiply()).to.eql(a*b)
  });
  //console.log(b);
});

describe('calc', function(){
  it('should divide the first parameter by the second', function(){
    expect(calc(a,b).divide()).to.eql(a/b)
  });
  //console.log(a); a little debugging
});*/

