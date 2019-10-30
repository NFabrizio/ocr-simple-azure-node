// import * as request from 'request';
// import { config } from './config';
// import * as utils from './utils';
const fs = require('fs');
// const prettyjson = require('prettyjson');
const request = require('request');
const config = require('./config');
const utils = require('./utils');

const analyzeImage = (fileName) => {
  const requestOptions = {
    body: utils.readImage(`${__dirname}/${fileName}`),
    // body: `{"url": "${fileName}"}`,
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': config.vision.key
    },
    qs: {
      'visualFeatures': 'Categories,Description,Color',
      'details': ''
    }
  };
  const uri = `${config.vision.endpoint}/vision/v2.0/analyze`;

  request.post(
    uri,
    requestOptions,
    (err, response, body) => {
      // console.log('err');
      // console.log(err);
      // console.log('response');
      // console.log(response);
      console.log('Analysis:');
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      console.log('Reading captions:');
      console.log(parsedBody.description.captions);
    }
  );
};

const readImageText = (fileName) => {
  const uri = `${config.vision.endpoint}/vision/v2.0/ocr`;
  const requestOptions = {
    body: utils.readImage(`${__dirname}/${fileName}`),
    // body: `{"url": "${fileName}"}`,
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': config.vision.key
    },
    qs: {
      'detectOrientation': 'true',
      'language': 'unk'
    },
    uri
  };

  request.post(
    // uri,
    requestOptions,
    (err, response, body) => {
      // console.log('err');
      // console.log(err);
      // console.log('response');
      // console.log(response.body);
      console.log('Reading:');
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      console.log('Reading regions:');
      if (Array.isArray(parsedBody.regions) && parsedBody.regions.length) {
        parsedBody.regions[0].lines.forEach((line) => {
          console.log(line.words);
        });
      } else {
        console.log('No regions found');
      }
    }
  );
};

const args = process.argv.slice(2);
analyzeImage(args[0]);
readImageText(args[0]);
// analyzeImage('../../opencv-tesseract-tutorial/images/sign-mcd.jpg');
// analyzeImage('https://www.signs.com/content/assets/filelibrary/RigidPlastic-01-4497.png');
// readImageText('../../opencv-tesseract-tutorial/images/sign-mcd.jpg');
// readImageText('https://www.signs.com/content/assets/filelibrary/RigidPlastic-01-4497.png');
