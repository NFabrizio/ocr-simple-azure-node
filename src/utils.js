import * as fs from 'fs';
import { Buffer } from 'buffer';

export const readImage = (filePath) => {
  const fileData = fs.readFileSync(filePath).toString('hex'0);
  const result = [];
  for(let i = 0; i < fileData.length; i += 2) {
    result.push(parseInt(`${fileData[i]}${fileData[i + 1]}`, 16));
  }

  return new Buffer(result);
};
