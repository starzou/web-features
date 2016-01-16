/**
 * @component test2
 * @description es6 test2
 * @time 2016/1/16 11:37
 * @author StarZou
 **/

'use strict';

let Test2 = {

  // 常量
  theConst(){
    /**
     * 常量(const)规则:
     * 1. 声明常量, 必须设置初始值.
     * 2. 常量不能再赋值、改变
     * 3. 常量不能再声明
     * 4. 常量拥有块作用域
     * 5. 常量不能和它所在作用域内的其他变量或函数拥有相同的名称
     */
    const MY_NAME = 'StarZou';

    {
      const MY_NAME = 'Block Scope-StarZou';
      console.log(MY_NAME);
    }

    console.log(MY_NAME);
  }

};

Luck.runTestClass(Test2);