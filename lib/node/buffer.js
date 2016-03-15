/**
 * @component buffer
 * @description
 * @time 2016-03-14 下午9:34
 * @author StarZou
 **/

'use strict';

const buf1 = new Buffer(10);
// creates a buffer of length 10

const buf2 = new Buffer([1, 2, 3]);
// creates a buffer containing [01, 02, 03]

const buf3 = new Buffer('test');
// creates a buffer containing ASCII bytes [74, 65, 73, 74]

const buf4 = new Buffer('tést', 'utf8');
// creates a buffer containing UTF8 bytes [74, c3, a9, 73, 74]

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);

const buf5 = new Buffer('love_me');
console.log(buf5);
console.log(buf5.toString('hex'));
console.log(buf5.toString('base64'));
console.log(buf5.toString('ascii'));
console.log(buf5.toString('binary'));

