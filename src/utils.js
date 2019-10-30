// import * as fs from 'fs';
// import { Buffer } from 'buffer';
const fs = require('fs');
const Buffer = require('buffer').Buffer;

module.exports = {
  readImage: (filePath) => {
    const fileData = fs.readFileSync(filePath).toString('hex');
    const result = [];
    for(let i = 0; i < fileData.length; i += 2) {
      result.push(parseInt(`${fileData[i]}${fileData[i + 1]}`, 16));
    }

    return new Buffer(result);
  }
}
