/**
 * @module test
 * @description es6 test
 * @time 2015-12-11 下午2:26
 * @author StarZou
 **/

'use strict';

let Test = {

  // 默认函数参数
  _defaultFunctionParameters() {
    /**
     * arguments对象, 表示函数被调用时实际传的参数
     *
     * 默认函数参数规则如下：
     * 1. 未传值, 将使用默认值
     * 2. undefined不会被设置
     * 3. 默认参数可以引用其他默认参数
     * 4. 设置默认参数的值, 不会改变arguments对象(对象类型除外)
     */

    //let fn = function (a = c, b = 2, c = b) {
    //  arguments[2].age = 22;
    //
    //  a = 100;
    //
    //  console.log(a, b, c);
    //
    //  console.log(arguments);
    //};
    //
    //fn(10, undefined, {name: 'StarZou'});
  },

  // 其余参数
  _restParameters() {
    /**
     * Rest Parameters(其余参数)规则：
     * 1. 类型为Array类型
     * 2. 不改变function函数的length属性
     * 3. 设置Rest Parameters的值, 不会改变arguments对象(对象类型除外)
     * 4. 不能在Setter函数中使用restParameters
     * 5. new Function形式可以使用
     */

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

  // 展开操作符
  _spreadOperator() {
    /**
     * Spread Operator(展开操作符)规则：
     * 在函数调用、字面量数组设置值时; 将数组、字符串 展开成参数列表.
     * 如:
     * Math.max(...[1, 2, 3]);
     * Array(...[1, 2, 3]);
     * var arr = [...[1, 2, 3]];
     */

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

  // 字面量对象扩展
  _objectLiteralExtensions: function () {
    /**
     * 字面量对象扩展:
     * 1. 动态设置对象属性名(Property Name), 通过中括号引入变量. let propertyName = 'name'; {[propertyName]: 'StarZou'};
     * 2. 属性简写: 字面量对象在声明时, 指定其他变量. 则对象的属性名为变量名, 属性值为变量值. var name = 'StarZou', sex = 'boy', me = {name, sex};
     * 3. 方法简写: 方法名+小括号(参数列表)+大括号(方法体)
     */

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

  _templateStrings(){
    let name = 'StarZou';
    let sex = 'boy';
    let me = `My name is ${name},I'm a ${sex.toUpperCase()}.`;
    console.log(me);
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
  },

  _clazz(){
    class Dog {

    }
    console.log(Dog);
    console.log(typeof Dog);

    {
      class Dog {
        get date() {
          return Date.now();
        }

        showMe() {
          console.log(this, this.date, Luck.typeOf(this));
        }
      }

      new Dog().showMe();
    }

    class Cat {
      constructor(name, colour) {
        this.name = name;
        this.colour = colour;
        this._date = Date.now();
      }
    }

    let hua = new Cat('小花猫', '黑白相间');
    console.log(hua);

  }

};

Luck.runTestClass(Test);