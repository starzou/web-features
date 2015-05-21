/**
 * @class 1
 * @description es6 使用
 * @time 2015-04-09 11:44
 * @author StarZou
 **/

"use strict";

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