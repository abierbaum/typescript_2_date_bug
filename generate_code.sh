#!/bin/sh
npm install --save typescript@1.8.10
npm run build
cp example_code.js example_code.1_8_10.js

npm install --save typescript@2.0.0-beta
npm run build
cp example_code.js example_code.2.0.0-beta.js
