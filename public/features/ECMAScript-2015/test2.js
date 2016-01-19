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
  classes(){
    /**
     * Classes类:
     * 1. 本质上还是原型继承
     * 2. 添加新的语法糖, 简化面向对象编程
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

    let i6sp = new IPhone('iphone6s plus', 'Apple iphone 6s plus', 2015);
    i6sp.print();

    Phone.show(i6sp);

  }

};

Luck.runTestClass(Test2);