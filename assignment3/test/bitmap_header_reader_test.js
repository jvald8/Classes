var fs = require('fs');
var bitmapping = require('../bitmap_header_reader.js');
var expect = require('chai').expect;
var bitmap = fs.readFileSync('test.bmp');

// Run the inverted colors transform
bitmapping.transform(bitmap, bitmapping.invertColors);


describe('bitmapping', function() {
  it('bitmap to be an object', function() {
    expect(bitmap).to.be.an('object');
  });
  it('bitmap to be a buffer object', function() {
    expect(bitmap).to.be.an.instanceOf(Buffer);
  });
  it('bitmapObject to be an object', function() {
    expect(bitmapping.bitmapObject).to.be.an('object');
  });
  it('bitmapObject palettes 127ths hash to contain 4 color channel keys',
   function() {
    expect(bitmapping.bitmapObject.palette[127]).to.contain.any.keys
    ('red', 'green', 'blue', 'alpha');
  });
  it('bitmapObject palettes 255ths hash to contain 4 color channel keys',
   function() {
    expect(bitmapping.bitmapObject.palette[255]).to.contain.any.keys
    ('red', 'green', 'blue', 'alpha');
  });
});

