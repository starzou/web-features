/**
 * @component test2
 * @description es6 test2
 * @time 2016/1/16 11:37
 * @author StarZou
 **/

'use strict';

let Test2 = {

  // const 常量
  _theConst(){
    /**
     * const常量规则:
     * 1. 声明常量, 必须设置初始值.
     * 2. 常量不能再赋值、改变
     * 3. 常量不能再声明
     * 4. 常量拥有块作用域
     * 5. 在同一作用域中, 不能声明相同的const常量名
     */
    const MY_NAME = 'StarZou';

    {
      const MY_NAME = 'Block Scope-StarZou';
      console.log(MY_NAME);
    }

    console.log(MY_NAME);
  },

  // let 变量
  _theLet(){
    /**
     * let变量规则:
     * 1. 声明块级作用域的局部变量, 可选设置初始值
     * 2. 在同一作用域中, 不能声明相同的let变量名
     * 3. 必须先声明, 再使用
     */

    {
      let me = 'StarZou';

      {
        console.log('child block scope:', me);
      }

      console.log('current block scope:', me);
    }

    console.log('parent block scope:', typeof me);
  },

  // 箭头函数
  _arrowFunction() {
    /**
     * 箭头函数:
     * 1. 是简写形式的函数表达式
     * 2. 拥有词法作用域的this值, this值是静态的(call, apply, bind不会改变this值)
     * 3. 箭头函数总是匿名的
     * 4. 没有prototype属性
     * 5. 在箭头函数里使用arguments, 指向父函数的arguments
     * 6. super支持
     * 7. new.target支持
     */

    const array = Luck.getRandomArrayInt();
    console.log(array);

    let array2 = array.map(value => value * 2);
    console.log(array2);

    let array3 = array.map((value, index) => {
      //console.log(index, value);

      return {
        index: index,
        value: value
      };

    });
    console.log(array3);

    let getArrowFunction = function () {

      return (type, ...args) => {
        console.log(type, args, arguments);
        return this;
      };

    };

    let o1 = {
      name: 'Object 1',
      getArrowFunction: getArrowFunction
    };

    let o2 = {
      name: 'Object 2'
    };

    let arrowFunction = o1.getArrowFunction('o1.getArrowFunction');

    //arrowFunction = getArrowFunction();

    console.log(arrowFunction.length);
    console.log(arrowFunction.prototype);

    console.log(arrowFunction('exec'));
    console.log(arrowFunction.call(o2));
    console.log(arrowFunction.apply(o2));
    console.log(arrowFunction.bind(o2)());

  },

  // 类
  _classes(){
    /**
     * Classes类:
     * 1. 本质上还是原型继承
     * 2. 添加新的语法糖, 简化面向对象编程
     * 3. 必须通过new调用
     * 4. 方法不会被枚举
     */
    class Phone {
      constructor(name, desc, timeToMarket) {
        this.name = name;
        this.desc = desc;
        this.timeToMarket = timeToMarket;
      }

      print() {
        console.log(`Name:${this.name}\nDesc:${this.desc}\nTimeToMarket:${this.timeToMarket}\n`);
      }

      static show(obj) {
        console.log(JSON.stringify(obj));
      }
    }

    let iphone = new Phone('iphone6s', 'Apple iphone 6s', 2015);
    iphone.print();

    Phone.show(iphone);

    //console.log(Phone.prototype);
    //console.log(Phone.show);

    class IPhone extends Phone {
      constructor(name, desc, timeToMarket) {
        super(name, desc, timeToMarket);
        this.type = 'iphone';
      }
    }

    IPhone.type = 'iphone';

    let i6sp = new IPhone('iphone6s plus', 'Apple iphone 6s plus', 2015);
    i6sp.date = Date.now();
    i6sp.print();

    Phone.show(i6sp);

    console.log(Object.keys(IPhone));

  },

  // super
  _theSuper(){
    /**
     * super: 通过super, 可以子类中可以访问父类的构造函数 super()、属性 super.prop、方法super.method()
     * 1. 指向函数的父对象
     * 2. 当在子类构造函数中使用时, 必须先调用super方法, 然后才能使用this
     * 3. 子类中静态方法中, 可以通过super.method() 调用父类的静态方法
     * 4. 子对象方法中不能删除父对象的属性, 会报引用错误
     * 5. 不能通过super.prop = 2, 给一个只读属性赋值
     */

      // 例1:
    class Polygon {
      constructor(height, width) {
        console.log('call Polygon.constructor');

        this.name = 'Polygon';
        this.height = height;
        this.width = width;
      }

      sayName() {
        console.log('Hi, I am a ', this.name + '.');
      }
    }

    class Square extends Polygon {
      constructor(length) {
        //this.height; // ReferenceError, super needs to be called first!

        // Here, it calls the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
      }

      get area() {
        return this.height * this.width;
      }

      set area(value) {
        this.area = value;
      }
    }

    let s1 = new Square(8);

    console.log(s1);

    s1.sayName();


    // 例2:
    class Human {
      constructor() {
      }

      static ping() {
        return 'ping';
      }
    }

    class Computer extends Human {
      constructor() {
      }

      static pingpong() {
        return super.ping() + ' pong';
      }
    }

    let value = Computer.pingpong(); // 'ping pong'
    console.log(value);

    // 例3:
    class Base {
      constructor() {
      }

      foo() {
      }
    }
    class Derived {
      constructor() {
      }

      delete() {
        //delete super.foo;
      }
    }

    new Derived().delete();

    // 例4:
    class X {
      constructor() {
        Object.defineProperty(this, "prop", {
          configurable: true,
          writable: false,
          value: 1
        });
      }

      f() {
        //super.prop = 2;
      }
    }

    var x = new X();
    x.f();
    console.log(x.prop); // 1

  },

  // generators
  _generators(){

    // 例1:
    function* idMaker() {
      var index = 0;
      while (index < 3) {
        yield index++;
      }

      return 'ok';
    }

    var gen = idMaker();

    console.log(gen);
    console.log(gen.next());
    //console.log(gen.return());

    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());


    // 例2:
    function* anotherGenerator(i) {
      yield i + 1;
      yield i + 2;
      yield i + 3;
    }

    function* generator(i) {
      yield i;
      yield* anotherGenerator(i);
      yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next().value); // 10
    console.log(gen.next().value); // 11
    console.log(gen.next().value); // 12
    console.log(gen.next().value); // 13
    console.log(gen.next().value); // 20
  },

  // Map
  _Map(){
    /**
     * Map:
     * 1. 存储key-value
     *
     * WeakMap: key必须为对象类型
     */

    var map = new Map();

    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);

    console.log(map);
    console.log(map.size);

    // map
    for (var [key, value] of map) {
      console.log(key + " = " + value);
    }

    // map.keys
    for (var key of map.keys()) {
      console.log(key);
    }

    // map.values
    for (var value of map.values()) {
      console.log(value);
    }

    // map.entries
    for (var [key, value] of map.entries()) {
      console.log(key + " = " + value);
    }

    // map.forEach
    map.forEach((key, value)=> {
      console.log(key + " = " + value);
    }, map);

    var kvArray = [['d', 4], ['e', 5], ['f', 6]];
    map = new Map(kvArray);
    console.log(map);

  },

  // Set
  _Set(){
    /**
     * Set:
     * 1. 存储的值是唯一的
     * 2. 可以认为key和value是相同的
     *
     * WeakSet: 只能存储对象类型
     */

    var mySet = new Set([0]);
    mySet.add(1);
    mySet.add(2);
    mySet.add(2);
    mySet.add(3);
    mySet.add('hi');

    console.log(mySet);
    console.log(mySet.has(1));
    console.log(mySet.size);

    for (var item of mySet) {
      console.log(item);
    }

    for (var item of mySet.keys()) {
      console.log(item);
    }

    for (var item of mySet.values()) {
      console.log(item);
    }

    for (var item of mySet.entries()) {
      console.log(item);
    }
  },

  // Proxy
  _Proxy(){
    var handler = {
      get: function (target, name) {
        return name in target ?
          target[name] :
          null;
      }
    };

    var target = {};
    var proxy = new Proxy(target, handler);

    proxy.a = 1;
    proxy.b = undefined;

    console.log(proxy);
    console.log(proxy.name);
    console.log(target);


    let validator = {
      set: function (obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid');
          }
        }

        // The default behavior to store the value
        obj[prop] = value;

        return true;
      }
    };

    let person = new Proxy({}, validator);

    person.age = 100;
    console.log(person.age); // 100
    //person.age = 'young'; // Throws an exception
    //person.age = 300; // Throws an exception
  },

  // Promise
  _Promise(){
    function makePromise(success = true, delay = 1000) {
      return new Promise(function (resolve, reject) {

        setTimeout(function () {

          if (success) {
            resolve({date: Date.now(), msg: 'ok'});
          } else {
            reject({date: Date.now(), msg: 'error'});
          }

        }, delay);

      });
    }

    var p1 = makePromise();

    console.log(p1);

    p1.then(function (value) {
      console.log(value, p1);

      return makePromise(false);
    }).catch(function (reason) {
      console.log(reason);
    });
  },

  // Symbol
  _Symbol(){
    /**
     * Symbol:
     * 1. 符号是一个独特的和不可改变的数据类型, 并且可以用作用于对象属性的标示符
     * 2. 不能用new调用
     * 3. Symbol类型的属性在es6之前的代码不能被遍历(隐藏的), 通过Object.getOwnPropertySymbols(obj)获取
     * 4. Symbol类型不能被转换成string、number
     * 5. JSON.stringify 将忽略Symbol类型的属性
     */

    var sym1 = Symbol();
    var sym2 = Symbol("foo");
    var sym3 = Symbol("foo");

    console.log(sym1);
    console.log(sym2);
    console.log(sym3);
    console.log(typeof sym3);
    console.log(sym2 === sym3);

    console.log(Object(sym2).toString() == sym2);
    console.log(Object(sym2).valueOf() == sym2);

    var obj = {
      name: 'a object',
      [sym1]: 1,
      [sym2]: 2
    };

    // 返回对象Symbol属性名的数组
    console.log(Object.getOwnPropertySymbols(obj));
    console.log(obj[sym1]);

    console.log(Symbol);

    console.log(JSON.stringify(obj));

    // global symbol registry
    var foo = Symbol.for('foo');
    console.log(Symbol.for('foo') === foo);
    console.log(Symbol.keyFor(foo) === 'foo');

  }

};

Luck.runTestClass(Test2);