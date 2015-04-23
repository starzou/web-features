/**
 * @class 1
 * @description es6 使用
 * @time 2015-04-09 11:44
 * @author StarZou
 **/

"use strict";

(function testLet() {

    {
        var name = 'StarZou';
        let age = 24;

        console.log(age);
    }

    console.log('%s age is %d', name, typeof age != 'undefined' ? age : 0);
})();