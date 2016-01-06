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

  _spreadOperator() {
    let array = Luck.getRandomArrayInt();
    console.log(array);

    // with arrays, in function calls
    console.log(Math.max(...array));

    // with arrays, in array literals
    console.log([...array][0]);

    // with sparse arrays, in function calls
    var arrayCopy = Array(...array);
    console.log(arrayCopy, arrayCopy === array);

    // with sparse arrays, in array literals
    var arrayCopy2 = [...array];
    console.log(arrayCopy2, arrayCopy2 === array);

    // with strings, in function calls
    console.log(Math.max(...'123456'));

    // with strings, in array literals
    console.log([1, ...'23', 4, 5, 6]);

    // with astral plane strings, in function calls
    console.log(Array(...'你好啊'));

    // with astral plane strings, in array literals
    console.log([...'还不错,你呢？']);


  },

  _objectLiteralExtensions: function () {
    // computed properties
    let propertyName = 'name';
    let name = 'StarZou';
    let obj = {[propertyName]: 'StarZou'};
    console.log(obj.name, obj[propertyName]);

    // shorthand properties
    let sex = 'boy';
    let me = {
      name, sex, showMe(){
        console.log(this);
      }
    };
    me.showMe();

    // computed shorthand methods
    let age = 22;
    let methodName = 'showMe';
    me = {
      name, sex, age,
      [methodName](){
        console.log(this);
      }
    };
    me.showMe();

    // string-keyed shorthand methods
    console.log(
      {
        'ab c'(){
          console.log(this);
          return 'called.';
        }
      }['ab c']()
    );

    // computed accessors
    let _name;
    me = {
      get name() {
        return 'StarZou';
      },

      set name(value) {
        _name = value;
      }
    };
    me.name = 'Super StarZou';
    console.log(me);
    console.log(_name);

  },


  _forOfLoops(){
    let array = Luck.getRandomArrayInt();
    console.log(array);

    for (let index in array) {
      console.log(index);
    }

    let item;

    for (item of array) {
      console.log(item);
    }

    for (item of 'Hello,你好') {
      console.log(item);
    }
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