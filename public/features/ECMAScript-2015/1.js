/**
 * @module 1
 * @description
 * @time 2015-12-09 下午5:02
 * @author StarZou
 **/

'use strict';

var ObjProto = Object.prototype;

function toString(object) {
  return ObjProto.toString.call(object);
}

var obj = {};

function Dog(name) {
  this.name = name;
  this.createDate = new Date();
}

Dog.prototype.type = 'Dog';

var d1 = new Dog('小G');
console.log(d1);


function environmentFn() {
  console.log(this);
}

environmentFn();
