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
     * 声明常量, 必须初始值.
     *
     */
    const MY_NAME = 'StarZou';

    console.log(MY_NAME);
  }

};

Luck.runTestClass(Test2);