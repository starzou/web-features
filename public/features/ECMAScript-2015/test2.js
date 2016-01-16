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
  arrowFunction() {
    /**
     * 箭头函数:
     * 1. 是简写形式的函数表达式
     * 2. 拥有词法作用域的this值, this值是静态的
     * 3. 箭头函数总是匿名的
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
      return () => this;
    };

    let o1 = {
      name: 'Object 1',
      getArrowFunction: getArrowFunction
    };

    let o2 = {
      name: 'Object 2'
    };

    let arrowFunction = o1.getArrowFunction();

    arrowFunction = getArrowFunction();

    console.log(arrowFunction());
    console.log(arrowFunction.call(o2));
    console.log(arrowFunction.apply(o2));

  }

};

Luck.runTestClass(Test2);