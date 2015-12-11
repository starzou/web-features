/**
 * @module test
 * @description es6 test
 * @time 2015-12-11 下午2:26
 * @author StarZou
 **/

'use strict';

let Test = {

  defaultFunctionParameters() {
    let fn = function (a = 1, b = 2, c = b) {
      a = 100;
      console.log(a, b, c);
      console.log(arguments);
    };

    fn(10, undefined, 33);
  },

  arrowFunction() {
    let array = [];

    for (let index = 0; index < 10; index++) {
      array[index] = index;
    }

    /**
     * 0 parameters
     */
    {
      let equals = (() => array)() === array;
      console.log(equals);
    }

    /**
     * 1 parameter, no brackets
     */
    {
      let showWord = word => {
        console.log(word);
        return word;
      };

      showWord('Hello World!');
    }

    /**
     * multiple parameters
     */
    {

    }
  }

};

Luck.runTestClass(Test);