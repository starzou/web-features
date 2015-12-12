/**
 * @module test
 * @description es6 test
 * @time 2015-12-11 下午2:26
 * @author StarZou
 **/

'use strict';

let Test = {

  _defaultFunctionParameters() {
    //let fn = function (a = 1, b = 2, c = b) {
    //  a = 100;
    //  console.log(a, b, c);
    //  console.log(arguments);
    //};
    //
    //fn(10, undefined, 33);
  },

  _restParameters() {
    let fn = function (type, ...args) {
      // change: 对象类型传的是引用, 基本类型传的是值
      type = 'add';
      args[0] = Luck.now() + '';
      args[1].logType = 'warn';

      console.log('type:', type);
      console.log('args:', args, Luck.typeOf(args));// [object Array] 类型
      console.log('arguments:', arguments);
    };

    fn('delete', Luck.now(), {logType: 'log'});

    // length = 1
    console.log('fn.length:', fn.length);


    // SyntaxError: Setter function argument must not be a rest parameter at restParameters
    try {
      eval('({set name(...args) {console.log(args)}})');
    } catch (e) {
      console.log(e);
    }

    // new Function() support
    fn = new Function('type', '...args', 'console.log(type, args);');

    fn('newFunction', 1, 2, 3);

  },

  spreadOperator() {

  },

  _arrowFunction() {
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