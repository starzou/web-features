/**
 * @component event
 * @description
 * @time 2016-03-15 下午2:08
 * @author StarZou
 **/

'use strict';

const EventEmitter = require('events');
const util = require('util');

//function MyEmitter() {
//  EventEmitter.call(this);
//}
//util.inherits(MyEmitter, EventEmitter);
//
//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
//  console.log('an event occurred!');
//});
//myEmitter.emit('event');


class MyEmitter extends EventEmitter {
  static newMyEmitter() {
    return new MyEmitter();
  }
}

const myEmitter = MyEmitter.newMyEmitter();

let count = 0;

myEmitter.on('getData', (args)=> {
  count++;
  console.log(args);
  console.log(this);
});

myEmitter.emit('getData', 1);
myEmitter.emit('getData', 2);
myEmitter.emit('getData', 3);

console.log(this == module.exports);
