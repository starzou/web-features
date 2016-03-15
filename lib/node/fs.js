/**
 * @component fs
 * @description
 * @time 2016-03-14 下午7:33
 * @author StarZou
 **/
'use strict';

const fs = require('fs');

var buf = fs.readFileSync('./http.js');

console.log(fs);
console.log(buf.toString());
