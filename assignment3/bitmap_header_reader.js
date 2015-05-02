// TO DO:

'use strict';

// Included the fs module
var fs = require('fs');

// Extract the binary data out of the 'test.bmp'
var bitmap = fs.readFileSync('test.bmp');

exports.transform = function(data, callback) {
  callback(data);
};

exports.invertColors = function(data) {

  var bitmapObject = {};

  bitmapObject.headerSize = 14;
  bitmapObject.type = data.toString('utf-8', 0, 2);
  bitmapObject.size = data.readInt32LE(2);
  bitmapObject.startOfPixels = data.readInt32LE(10);
  bitmapObject.dibSize = data.readInt32LE(14);
  bitmapObject.width = data.readInt32LE(18);
  bitmapObject.height = data.readInt32LE(22);
  bitmapObject.colorDepth = data.readInt16LE(28);
  bitmapObject.paletteSize = data.readInt32LE(46);

  bitmapObject.palette = [];

  var startOfPalette = bitmapObject.dibSize + bitmapObject.headerSize;

  // Extract data from bitmap
  for (var i = startOfPalette;i < bitmapObject.startOfPixels;i += 4
    ) {
    var newPalette = {blue:   data.readUInt8(i),
                   green:  data.readUInt8(i + 1),
                   red:    data.readUInt8(i + 2),
                   alpha:  data.readUInt8(i + 3), };
    bitmapObject.palette.push(newPalette);
  }

  // Transform data
  for (i = 0;i < bitmapObject.palette.length;i++) {
    bitmapObject.palette[i].red   = 255 - bitmapObject.palette[i].red;
    bitmapObject.palette[i].blue  = 255 - bitmapObject.palette[i].blue;
    bitmapObject.palette[i].green = 255 - bitmapObject.palette[i].green;
    bitmapObject.palette[i].alpha = 255 - bitmapObject.palette[i].alpha;
  }

  // Load data into the bitmapObject
  var j = startOfPalette;
  for (i = 0;i < bitmapObject.palette.length;i++) {
    data.writeUInt8(bitmapObject.palette[i].blue, j);
    data.writeUInt8(bitmapObject.palette[i].green, j + 1);
    data.writeUInt8(bitmapObject.palette[i].red, j + 2);
    data.writeUInt8(bitmapObject.palette[i].alpha, j + 3);
    j = j + 4;
  }

  fs.writeFileSync('transformedFile.bmp', data);

  exports.bitmapObject = bitmapObject;
};

/* This is for debugging from within this file. this.transform
(bitmap, this.invertColors);*/
