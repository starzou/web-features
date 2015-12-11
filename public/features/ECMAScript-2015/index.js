/**
 * @module index
 * @description es6 test
 * @time 2015-12-09 下午5:02
 * @author StarZou
 **/

'use strict';

var ObjProto = Object.prototype;

function toString(object) {
  return ObjProto.toString.call(object);
}

/**
 * Prototype Inherited
 */
function testPrototypeInherited() {
  var obj = {};

  function Dog(name) {
    this.name = name;
    this.createDate = new Date();
  }

  Dog.prototype.type = 'Dog';

  var d1 = new Dog('小G');
  console.log(d1);
}


/**
 * Environment
 */
function testEnvironment() {
  console.log(this);
}

testEnvironment();


/**
 * Arrows Function
 */
function testArrowFunction() {
  var array = [];

  for (let index = 0; index < 10; index++) {
    array[index] = index;
  }

  console.log('index:', typeof index);

  var arr = array.map((value, index, arr) => {
    return value * 2
  });

  console.log(array);
  console.log(arr);
  console.log(array.map(v => v * 3));
}

testArrowFunction();
