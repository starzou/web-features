/**
 * @class 1
 * @description es6 使用
 * @time 2015-04-09 11:44
 * @author StarZou
 **/

"use strict";

var toString = Object.prototype.toString;

/**
 * Default parameters : 默认参数
 */
function getDefaultPoint() {
    return 0;
}

function getPoint(x = getDefaultPoint(), y = x) {
    return {x, y};
}

console.log(getPoint());
console.log(getPoint(1, 3));


/**
 * Rest parameters : 其余参数
 */
function sort(array = [], ...args) {
    // args 是数组对象, [object Array]
    console.log(args);

    array = array.concat(args);

    return array.sort();
}

console.log(sort([3, 1, 2], 1.5, 0));


/**
 * Spread operator
 */
var [num1,...array] = [1, 2, 3, 4, 5];
console.log(array);


/**
 * for..of loops
 */
function myOf() {
    for (var value of array) {
        console.log(value);
    }
}
myOf();


/**
 * Template strings
 */
console.log(`this
is
template text. array : ${array.push('I am ok.') && array}
`);
